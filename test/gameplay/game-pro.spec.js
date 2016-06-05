var should = require('should');
var seneca = require('seneca');

var tournamentId = Math.random()*2342;

describe('GamePlay Provisioner API',function(){

  var p1Username = Math.ceil(Math.random()*2312);

  var p1SocketMock={};

   var p1Middleware,isSocketEmitted=false,isQueued=false;

  it('Setup Gameplay Provisioner',function(done){
    this.timeout(10000);
    var gameplayProvisioner = seneca();
    gameplayProvisioner.use('redis-transport')
    gameplayProvisioner.use('../.././microservices/gameplay1/gameplayProvisionerPlugin');

    gameplayProvisioner.listen({type:'redis',pin:'role:provisioner,action:queue'});
    gameplayProvisioner.ready(done);
  })

  it('Setup Client Midddleware',function(done){
  this.timeout(50000);


  p1SocketMock.emit = function socket(msgKey,obj){
    msgKey.should.be.exactly('tournamentQueue');
    obj.should.have.property('msg');
    obj.msg.should.be.exactly('queued');
    isSocketEmitted=true;
    if(isSocketEmitted && isQueued)
    {
      setTimeout(function(){
        done();
      },10000)
    }

  }

  p1Middleware = seneca();

  p1Middleware.use('../.././microservices/gameplay1/gameplayMiddlewarePlugin',
                      {
                        username: p1Username,
                        tournamentId: tournamentId,
                        socket: p1SocketMock
                      }
                  );

  p1Middleware.act('role:tournament,cmd:queue',function(err,response){

      if(err) return done(err);

      response.should.have.property('answer');

      response.answer.should.be.exactly('queued');
      isQueued=true;
      if(isQueued && isSocketEmitted)
      {
        setTimeout(function(){
          done();
        },100000)
      }


  })
  })
});

// describe('Setup Game Manager',function(){
//   it('Creating game and setting up broadcast channel',function(done){
//     this.timeout(5000);
//     var gameManagerService = seneca();
//     gameManagerService.use('redis-transport')
//     gameManagerService.use('../.././microservices/gameplay/gameManagerPlugin',{id:23432,users:['abc','efg']});
//     gameManagerService.listen({type:'redis',pin:'role:gameManager,action:serve'});
//     gameManagerService.ready(done);
//   })
//
// })
