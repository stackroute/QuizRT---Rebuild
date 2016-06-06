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
                        respond(null,{answer:'queued'});
                        self.socket.emit('queued','you are queued');
                     })

  });

  //Receive game Id.

  gameInitiateClient.add('role:'+self.username+',action:gameInitiated',function(msg,respond){

    console.log('\n Received game id as :'+msg.gameId+'\n');
    var gameId = msg.gameId;

    respond(null,{answer:'listeningToBroadcast'});

    //Create a broadcast listener for this game.
    console.log('\n Creating broadcast listener for :' +self.username+'\n');


      broadcastListener.add('gameId:'+gameId+',action:broadcast',function(msg,done){
          console.log('\n Broadcast listener received question as : '+ msg.question+ ' \n');
          self.socket.emit('newQuestion',{msg:msg.question});
          done(null,{answer:'QuestionReceived'})


      })
     .listen({type:'redis',pin:'gameId:'+gameId+',action:broadcast'})
     .ready(function(){

       //Ping the game manager.
       console.log('\n Pinging the game manager now.\n')

       gamePingClient.client({type:'redis',pin:'role:gameManager,action:ping,gameId:'+gameId})
                     .ready(function(){
                       gamePingClient.act('role:gameManager,action:ping,gameId:'+gameId,{user:self.username},function(err,response){
                         console.log('\n Received '+response.answer+' from game manager.\n');

                       })
                     })
     })

  })
  .listen({type:'redis',pin:'role:'+self.username+',action:gameInitiated'});

}
