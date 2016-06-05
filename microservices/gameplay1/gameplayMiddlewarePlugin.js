module.exports = function(options){

  var self = this;
  self.username = options.username;
  self.tournamentId = options.tournamentId;
  self.socket = options.socket;

  var broadcastListener = require('seneca')();
  broadcastListener.use('redis-transport');

  var gameInitiateClient = require('seneca')();
  gameInitiateClient.use('redis-transport');

  var provisionerClient = require('seneca')();
  provisionerClient.use('redis-transport');

  var gamePingClient = require('seneca')();
  gamePingClient.use('redis-transport');


  this.add('role:tournament,cmd:queue',function(msg,respond){


    console.log('\n Sending request to provisioner to queue the player. \n')

    provisionerClient.client({type:'redis',pin:'role:provisioner,action:queue'})
                     .act('role:provisioner,action:queue',{username:self.username,tournamentId:self.tournamentId},function(err,response){

                        console.log('\n Provisioner responded with '+response.answer+'\n')

                     })
                     .ready(function(){
                        self.socket.emit('tournamentQueue',{msg:'queued'});
                       respond(null,{answer:'queued'});
                     })

  });

  //Receive game Id.

  gameInitiateClient.add('role:'+self.username+',action:gameInitiated',function(msg,respond){

    console.log('\n Received game id as :'+msg.gameId+'\n');
    var gameId = msg.gameId;




    //Create a broadcast listener for this game.
    console.log('\n Creating broadcast listener for :' +self.username+'\n');

    broadcastListener.add('gameId:'+gameId+',action:broadcast,role:'+self.username,function(msg,respond){
        console.log('\n Players receiving broadcast \n');
        respond(null,{answer:'listeningToBroadcast'});
    })
    .listen({type:'redis',pin:'gameId:'+gameId+',action:broadcast,role:'+self.username});


    //Ping the game manager.
    console.log('\n Pinging the game manager now.\n')
    gamePingClient.client({type:'redis',pin:'gameId:'+gameId+',action:ping'})
                  .act('role:'+self.username+',gameId:'+gameId+',action:ping',function(err,response){
                    console.log('\n Received pong from game manager.\n');
                    respond(null,{answer:'receivedGameId'})
                  })
  })
  .listen({type:'redis',pin:'role:'+self.username+',action:gameInitiated'});

}
