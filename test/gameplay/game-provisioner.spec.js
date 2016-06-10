var should = require('should');
var seneca = require('seneca');

var tournamentId = Math.random()*1378481293;


describe('Gameplay Middleware API', function() {
  this.timeout(10000);
  var topicCreator;

  var p1Username = Math.random()*118238,p1Middleware,p1Socket;

  it('Setup Client Middleware for P1', function(done) {
    var count = 0;

    var p1SocketMock = {};
    p1SocketMock.emit = function(msgKey,obj) {
      msgKey.should.be.exactly('tournamentQueue');
      obj.should.have.property('msg');
      obj.msg.should.be.exactly('queued');
      count.should.be.exactly(1);
      done();
    };

    p1Middleware = seneca();
    p1Middleware.use('../.././microservices/gameplay/gameplayMiddlewarePlugin',{username:p1Username,tournamentId:tournamentId,socket:p1SocketMock});
    p1Middleware.act('role:tournament,cmd:queue', function(err, response) {

      response.should.have.property('answer');
      response.answer.should.have.lengthOf(1);
      count++;
    });
  });
});

describe('Gameplay Provisioner API', function() {
  var gameplayProvisioner;

  var p1Username = Math.random()*118238,p1Middleware,p1Socket;

  it('Setup Gameplay Provisioner', function(done) {
    gameplayProvisioner = seneca();
    gameplayProvisioner.use('redis-transport')
    gameplayProvisioner.use('../.././microservices/gameplay/gameplayProvisionerPlugin');
    gameplayProvisioner.listen({type:'redis',pin:'role:tournament,cmd:queue'});
    gameplayProvisioner.ready(done);
  });

  it('Setup Consumer to Provisioner', function(done) {
    this.timeout(10000);
    var isGameIdReceived = false,isPlayerQueued=false;;
    var p1SocketMock = {};
    p1SocketMock.emit = function(msgKey,obj) {

    };

    p1Middleware = seneca();
    p1Middleware.use('redis-transport');
    p1Middleware.use('../.././microservices/gameplay/gameplayMiddlewarePlugin',{username:p1Username,tournamentId:tournamentId,socket:p1SocketMock});
    p1Middleware.client({type:'redis',pin:'role:tournament,cmd:queue'});


      p1Middleware.add('role:tournament,id:' + tournamentId + ',username:' + p1Username, function(msg, respond) {
        msg.should.have.property('gameId');
         isGameIdReceived=true;
         console.log("\n Game Id is Received "+ isGameIdReceived+" \n");
         if(isPlayerQueued && isGameIdReceived)
         {
           done();
         }
      });



    p1Middleware.listen({type:'redis', pin:'role:tournament,id:' + tournamentId});



      p1Middleware.act('role:tournament,cmd:queue,username:'+p1Username+',tournamentId:' + tournamentId, function(err, response) {

        response.should.have.property('answer');
        response.answer.should.be.exact;
        isPlayerQueued=true;
        console.log("\n Player is queued "+ isPlayerQueued+" \n");
        if(isPlayerQueued)
        {
          done();
        }

      });


  });
});
