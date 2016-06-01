var should = require('should');
var seneca = require('seneca');

var tournamentId = Math.random()*1378481293;

describe('Gameplay Socket Middleware Setup', function() {
  var gameplayProvisioner;

  var p1Username = Math.random()*118238,p1Middleware,p1Socket;

  it('Setup Gameplay Provisioner', function(done) {
    gameplayProvisioner = seneca();
    gameplayProvisioner.use('redis-transport')
    gameplayProvisioner.use('gameplayProvisionerPlugin');
    gameplayProvisioner.listen({type:'redis',pin:'role:join,type:tournament'});
    gameplayProvisioner.ready(done);
  });



  it('Setup Client Middleware for P1', function(done) {
    var count = 0;

    var p1SocketMock = {};
    p1SocketMock.emit = function(msgKey,obj) {
      msgKey.should.be.exactly('tournamentQueue');
      obj.should.have.property('msg');
      obj.msg.should.be.exactly('wait');
      count.should.be.exactly(1);
      done();
    };

    p1Middleware = seneca();
    p1Middleware.use('gameplayMiddlewarePlugin',{username:p1Username,tournamentId:tournamentId,socket:p1SocketMock});
    p1Middleware.act('cmd:joinTournament', function(err, response) {
      response.should.have.property('answer');
      response.answer.should.be.exactly('queued');
      count++;
    });
  });

  it('Setup Consumer to Provisioner', function(done) {
    p1Middleware.use('redis-transport');
    p1Middleware.client({type:'redis',pin:'role:join,type:tournament'});

    p1Middleware.ready(function() {
      p1Middleware.act('role:join,type:tournament,username:'+p1Username+'tournamentId:' + tournamentId, function(err, response) {
        response.should.have.property('answer');
        response.answer.should.be.exactly('queued');
        done();
      });
    });
  });
});
