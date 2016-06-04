module.exports = function(options){
  var self = this;
  var broadcastPin = 'action:broadcast,gameId:'+options.id;
  self.gameId = options.id
  self.broadcast = require('seneca')()
                   .use('redis-transport')
                   .client({type:'redis',pin:broadcastPin})
                   .ready(function() {
                     console.log('==========================READY TO SEND OVER PIN: ' + broadcastPin);
                   });
var pingCount = options.users.length;
  // Create  response channels on which game manager will listen.
  self.users = options.users.map(function(user) {
    var userMicroservice = require('seneca')();

        userMicroservice.use('redis-transport');
        console.log('\n \n Setting up microservice for: '+ user);
        userMicroservice.add('role:'+user+',gameId:'+self.gameId,function(msg,respond){

          respond(null,{answer:'listening to game'});
        });


        userMicroservice.add('role:' + user + ',gameId:' + self.gameId+',action:ping', function(msg,respond) {
          respond(null,{msg:'pong'});
          console.log('\n Ping received at server sending pong \n');


          if(pingCount>0){
            pingCount--;

          }
          if(pingCount==0){

            console.log('\n Sending broadcast pingcount is 0\n');

             var pin = 'action:broadcast,gameId:'+self.gameId;
             //self.broadcast
            var msg = 'action:broadcast,gameId:'+self.gameId+',answer:Starting'
            console.log('\n==========================SENDING OVER MSG: ',msg);
            self.broadcast.act(msg,function(err,response){
                             console.log('\n'+response.user+ ' is listening to this broadcast');
                           });
          }


        });

        userMicroservice.listen({type:'redis',pin:'role:'+user+',gameId:'+self.gameId});

    return userMicroservice;
  });

  //Broadcast on pin 'gameId:<gameId>,role:*'








  // Broadcast service.
  // self.broadcast = require('seneca')();
  // console.log('\n Broadcasting ');
  // self.broadcast.add('role:gameManager,action:broadcast,gameId:'+self.gameId,function(msg,respond){
  //
  //   respond(null,{answer:'broadcasting'});
  // })
  // self.broadcast.use('redis-transport');
  // self.broadcast.listen({type:'redis',pin:'role:gameManager,action:broadcast,gameId:'+self.gameId});


}
