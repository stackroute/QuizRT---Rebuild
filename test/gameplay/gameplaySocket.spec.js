var should = require('should');
var seneca = require('seneca');

var tournamentId = Math.ceil(Math.random()*11111);
 
describe('Testing gameplay over sockets',function(){

  it('Setup Provisioner',function(done){
    this.timeout(4000);
    var provisioner = seneca();
    provisioner.use('../.././microservices/gameplay1/gameplayProvisionerPlugin');
    provisioner.use('redis-transport');
    provisioner.listen({type:'redis',pin:'role:provisioner,action:queue'});
    provisioner.ready(done);
  })

  it('Bootstrap Middleware and receive sockets',function(done){
    this.timeout(50000);
    var player1Socket = {};
    var isQuesReceived = false, isQueued = true;
    var player1MiddleWare = seneca();
    var player1Username = Math.ceil(Math.random()*2332);


    player1Socket.emit = function(msgKey,object){
      if(msgKey.indexOf('queued')>-1){
        console.log('\n Socket is queued. \n')
         isQueued = true;
      }

      if(msgKey.indexOf('newQuestion')>-1){
        isQuesReceived = true;
        console.log('\n Receiving new question \n')
        if(isQuesReceived && isQueued)
        done();
      }
    }
    player1MiddleWare.use('../.././microservices/gameplay1/gameplayMiddlewarePlugin',
                        {
                          username: player1Username,
                          tournamentId: tournamentId,
                          socket: player1Socket
                        }
                    );
    player1MiddleWare.act('role:tournament,cmd:queue',function(err,response){
      response.should.have.property('answer');
      response.answer.should.be.exactly('queued');
    })

  })

})
