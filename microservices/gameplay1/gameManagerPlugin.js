module.exports = function(options){

  var self = this;
  self.gameId = options.gameId;
  self.broadcast = require('seneca')()
                    .use('redis-transport')
                    .client({type:'redis',pin:'gameId:'+self.gameId+'action:broadcast,role:*'});
  self.users = options.users.map(function(user){

    //Create channels for users on which they will send response to game manager.


    var userMicroservice = require('seneca')();
    userMicroservice.use('redis-transport');
    userMicroservice.add('role:'+user+',gameId:'+self.gameId,function(msg,respond){
                  console.log('\n Creating response channel for user : '+user+'\n')
                  respond(null,{answer:'listening to broadcast'});
                })
                .listen({type:'redis',pin:'role:'+user+',gameId:'+self.gameId});

  })

  var pingCount = options.users.length;
  self.ping = require('seneca')()
              .use('redis-transport')
              .add('role:gameManager,action:ping',function(msg,respond){
                console.log('\n Game manager is receiving ping : '+user+'\n')
                if(pingCount>0){
                  pingCount--;
                  respond(null,{answer:'pong'});
                }
                if(pingCount==0){
                    console.log('\n Game Manager is broadcasting now. \n');
                    self.broadcast.act('gameId:'+self.gameId+',action:broadcast,role:*',function(err,response){
                      respond(null,{answer:response.answer});
                    })
                }
              })







}
