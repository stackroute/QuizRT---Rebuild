var should = require('should');
var seneca = require('seneca');

var tournamentId = Math.random()*1378481293;
var requiredPlayers = 3;

describe('Gameplay Socket Middleware Setup', function() {
  this.timeout(500000);
  var gameplayProvisioner, topicCreator;

  var p1Username = Math.random()*118238,p1Middleware,p1Socket;
  // var p2Username = Math.random()*118238,p2Middleware,p1Socket;
  // var p3Username = Math.random()*118238,p3Middleware,p1Socket;

  it('Setup Gameplay Provisioner', function(done) {
    gameplayProvisioner = seneca();
    gameplayProvisioner.use('redis-transport')
    gameplayProvisioner.use('../.././microservices/gameplay/gameplayProvisionerPlugin');
    gameplayProvisioner.listen({type:'redis',pin:'role:join,type:tournament'});
    gameplayProvisioner.ready(done);
  });

  it('Setup Topic Creator for Players',function(done){
    topicCreator = seneca();
    topicCreator.use('redis-transport')
    topicCreator.use('../.././microservices/gameplay/topicCreatorPlugin');
    topicCreator.listen({type:'redis',pin:'role:playerChannel,action:create'});
    topicCreator.ready(done);
  })


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
    p1Middleware.use('../.././microservices/gameplay/gameplayMiddlewarePlugin',{username:p1Username,tournamentId:tournamentId,socket:p1SocketMock});
    p1Middleware.act('cmd:joinTournament', function(err, response) {

      response.should.have.property('answer');
      response.answer.should.be.exactly('queued');
      count++;
    });
  });

  it('Setup Consumer to Provisioner', function(done) {
    this.timeout(10000);
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

 it('Create pub sub topic for P1',function(done){
   this.timeout(10000);
   gameplayProvisioner.client({type:'redis',pin:'role:playerChannel,action:create'});
   gameplayProvisioner.ready(function(){
     requiredPlayers--;
     gameplayProvisioner.act('role:playerChannel,action:create,username:'+p1Username+'tournamentId:'+tournamentId+'reqPlayers:'+requiredPlayers,function(err,response){
       response.should.have.property('answer');
       response.answer.should.be.exactly('player publishing to gameplay');
       done();
     })
   })
 })


});
