module.exports = function(options){
  var self = this;
  self.username = options.username;
  self.tournamentId = options.tournamentId;
  self.socket = options.socket;

  var broadcastListener = require('seneca')();
  broadcastListener.use('redis-transport');

  var provisionerClient = require('seneca')();
  provisionerClient.use('redis-transport');

  var responseClient = require('seneca')();
  responseClient.use('redis-transport');

  var readyCount=0;
  var requestProvisioner=0;

   var provisonerCalledByClient =0;
  provisionerClient.client({type:'redis',pin:'role:provisioner,action:queue'})
    .act('role:provisioner,action:queue',{username:self.username,tournamentId:self.tournamentId},function(err,response){
        self.socket.emit('queued',{answer:++provisonerCalledByClient});
  })
    .close();



  // console.log('\n Initialized count to 0 for socket id'+options.socket.id+'\n')
  var count =0;

  self.add('role:'+self.username+',action:gameInitiated',function(msg,respond){
    // // console.log('\n========Calling the provisioner '+(++count)+' times ==========\n')
    var gameId = msg.gameId;

    // // console.log('\n=====RECEIVED GAME ID: '+gameId+'====\n');

    respond(null,{answer:'received'});

    //Create a broadcast listener for this game.
    broadcastListener.add('gameId:'+gameId+',role:broadcast,action:newQuestion',function(msg,done){
      // // console.log('\n=====RECEIVED QUESTION: '+ msg.question + ' with game id: '+gameId+'=====\n');
      self.socket.emit('newQuestion',{msg:msg.question});
      done(null,{answer:'QuestionReceived'})
    })
    .listen({type:'redis',pin:'gameId:'+gameId+',role:broadcast,action:*'})
    .ready(function(){
       //Ping the game manager.
       // console.log('\n========INSIDE READY BEFORE PINGING '+(++readyCount)+' times=====\n')
       responseClient.client({type:'redis',pin:'role:'+self.username+',gameId:'+gameId+',action:*'})
         .ready(function() {
           // console.log('\n=====Sending the ping at '+ Date.now() +'=======\n');
           responseClient.act('role:'+self.username+',gameId:'+gameId+',action:ping',function(err,response){
             if(err) return // console.log(err);
             // console.log('\n Received '+response.answer+' from game manager.\n');

           })
         });
     });

  })
  .listen({type:'redis',pin:'role:'+self.username+',action:gameInitiated'});

}
