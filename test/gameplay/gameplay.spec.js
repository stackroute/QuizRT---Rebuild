var should = require('should');
var seneca = require('seneca');

describe('Middleware API', function() {
  const responses = [];
  const playerMiddlewareMicroservice = seneca();

  const playerUsername = Math.random()*2348123;
  const tournamentId = Math.random()*2734819;
  const socket = {};

  it('Setup Socket', function() {
    socket.emit = function(event, msg) {
      const response = {};
      response[event] = msg;
      responses.push(response);
    };
  });

  it('Bootstrap Middleware Plugin', function(done) {
    this.timeout(10000);
    playerMiddlewareMicroservice.use(playerMiddlewareMicroservicePlugin, {username: playerUsername, tournamentId: tournamentId, socket: socket});
    playerMiddlewareMicroservice.ready(function() {
      responses.length.should.be.exactly(1);
      responses[0].should.have.property('queued');
      responses[0].queued.should.be.exactly(true);
      done();
    });
  });
});

function playerMiddlewareMicroservicePlugin(options) {
  var self = this;
  self.username = options.username;
  self.tournamentId = options.tournamentId;
  self.socket = options.socket;
  self.socket.emit('queued', true);
}

describe('Provisioner API', function() {
  const tournamentId = Math.random() * 2348271;
  const playerUsername = Math.random() * 5839281;

  const provisionerMicroservice = seneca();
  const provisionerClientMicroservice = seneca();
  const playerMiddlewareMicroservice = seneca();

  it('Setup Provisioner', function(done) {
    provisionerMicroservice.use(provisionerMicroservicePlugin);
    provisionerMicroservice.use('redis-transport');
    provisionerMicroservice.listen({type:'redis',pin:'role:tournament,cmd:queue'});
    provisionerMicroservice.ready(function() {
      done();
    });
  });

  it('Setup Provisioner Client', function(done) {
    var gameIdReceived = false;
    var queued = false;

    playerMiddlewareMicroservice.add('role:tournament,tournamentId:'+tournamentId+',username:'+playerUsername, function(msg, response) {
      msg.should.have.property('gameId');
      gameIdReceived = true;
      console.log('GAMEID: ' + msg.gameId);
      if(queued) { return done(); }
    });
    playerMiddlewareMicroservice.use('redis-transport');
    playerMiddlewareMicroservice.listen({type:'redis',pin:'role:tournament,tournamentId:'+tournamentId+',username:'+playerUsername});

    provisionerClientMicroservice.use('redis-transport');
    provisionerClientMicroservice.client({type:'redis', pin: 'role:tournament,cmd:queue'});
    provisionerClientMicroservice.ready(function() {
      provisionerClientMicroservice.act('role:tournament,cmd:queue,tournamentId:' + tournamentId + ',username:' + playerUsername, function(err, response) {
        if(err) { return done(err); }
        response.should.have.property('message');
        response.message.should.be.exactly('queued');
        queued = true;
        if(gameIdReceived) { return done(); }
      });
    });
  });
});

function provisionerMicroservicePlugin() {
  var self = this;

  self.sendGameIdToPlayer = function(tournamentId,gameId,username) {
    const sendMicroservice = seneca();
    sendMicroservice.use('redis-transport');
    sendMicroservice.client({type:'redis',pin:'role:tournament,tournamentId:'+tournamentId+',username:'+username});
    sendMicroservice.ready(function() {
      var count = 0;
      var interval = setInterval(function() {

        var selfDestructSendGameMicroservice = function() {
          clearInterval(interval);
          sendMicroservice.close();
        };

        sendMicroservice.act('role:tournament,tournamentId:'+tournamentId+',username:'+username+',gameId:'+gameId, function(err, response) {
          if(err) { return done(err); }
          selfDestructSendGameMicroservice();
        });

      },1000);
    });
  };

  self.add('role:tournament,cmd:queue', function(msg, respond) {
    self.sendGameIdToPlayer(msg.tournamentId,Math.random()*4838281,msg.username);

    return respond(null,{message: 'queued'});
  });
};
