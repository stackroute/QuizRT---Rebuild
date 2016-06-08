var provisionerClient = require('seneca')();
provisionerClient.use('redis-transport');
provisionerClient.client({type:'redis',pin:'role:provisioner,action:queue'})

var gameInitiateClient  = require('seneca')();
gameInitiateClient.use('redis-transport');

var gameBroadcastListener  = require('seneca')();
gameBroadcastListener.use('redis-transport');

var gamePingClient = require('seneca')();
gamePingClient.use('redis-transport');



module.exports = function gamePlayMiddleware(options){
  var self = this;
  var queuedUsers = [];
  var user ={};
  var gameId;

  var id = Math.ceil(Math.random()*2343242);
  self.username = options.username;
  self.tournamentId = options.tournamentId;
  self.socket = options.socket;


    this.add('role:tournament,id:'+self.tournamentId+',username:'+self.username,function(msg,respond){
      respond(null,{gameIdReceived:true});
    })


  this.add('role:tournament,cmd:queue',function(msg,respond){

    console.log('\n Inside gameplay middleware. Calling provisioner using provisionerClient.\n');

    provisionerClient.act('role:provisioner,action:queue',{username:self.username,tournamentId:self.tournamentId},function(err,response){
      if(err)
        respond(err);

      respond(null,{answer:'queued'});
      self.socket.emit('tournamentQueue',{msg:'queued'});
    })
  })

  // Receive game id
  gameInitiateClient.add('role:'+self.username+',action:gameInitiated',function(msg,respond){
    gameId = msg.gameId;
    respond(null,{answer:'setup'})


    //Create broadcast listener
    console.log('\n Creating broadcast listener \n');

    var pin = 'action:broadcast,gameId:'+msg.gameId;

    gameBroadcastListener.add('role:'+self.username+',action:broadcast,gameId:'+msg.gameId,function(msg,respond){
      console.log("==========================BROADCAST RECEIVED: ",msg);
      console.log('\n Got broadcast as: '+msg.answer+' \n');
      respond(null,{user:self.username});
    })
    .listen({type:'redis',pin:pin})
    .ready(function(){
      console.log('\n==========================READY TO RECEIVE: ' + pin);
      console.log('\n Pinging game manager now \n');
      gamePingClient.client({type:'redis',pin:'role:'+self.username+',gameId:'+gameId})
      gamePingClient.act('role:'+self.username+',gameId:'+gameId+',action:ping',function(err,response){
      console.log('\n Response after pinging is :'+response.msg+'\n');

       })

    })


     //Pinging the game manager


  })

  .listen({type:'redis',pin:'role:'+self.username+',action:gameInitiated'});



  //
  // this.add('role:broadcast,action:creator',function(msg,respond){
  //
  //
  //   respond(null,{user:self.username})
  // })




  // this.add('role:'+self.username+',action:responseChannel,gameId:'+gameId,function(msg,respond){
  //   respond(null,{channel:'Created'});
  // })
  // .use('redis-transport')
  // .listen({type:'redis',pin:'role:'+self.username+',action:responseChannel,gameId:'+gameId});
  // .ready(function(){
  //
  // })

  //Create a broadcast listener.




}
