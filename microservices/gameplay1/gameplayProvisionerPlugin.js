var globalQueue ={};

module.exports = function(options){

  var self= this;

  var gameId = Math.ceil(Math.random()*1231);

  self.add('role:provisioner,action:queue',function(msg,respond){

    var tournamentId = msg.tournamentId;

    //add the users to a global queue with tournament id

    if(!globalQueue[tournamentId])
    {
      globalQueue[tournamentId] = [msg.username]
    }
    else{
      globalQueue[tournamentId].push(msg.username);
    }
    console.log('\n Tournament Id : '+msg.tournamentId+'\n');
    console.log('\n Users are : '+globalQueue[msg.tournamentId]+'\n')
    //If found x or more members
    if(globalQueue[tournamentId].length>=1){
      self.act('role:provisioner,action:initiateGame',{users:globalQueue[tournamentId],tournamentId:tournamentId},function(err,response){
          respond(null,{answer:'game Initiating'});
      })
    }
    else{
      respond(null,{answer:'queued'})
    }

  })


  self.add('role:provisioner,action:initiateGame',function(msg,respond){
    var gameManager = require('seneca')();
    console.log(' \n Since players are more than 2, spawning game manager.')
    respond(null,{answer:'gameInitiated'});
    gameManager.use(require('./gameManagerPlugin'),
                              {
                                gameId: gameId,
                                users: globalQueue[msg.tournamentId],
                                tournamentId: msg.tournamentId
                              }
                  );

    gameManager.ready(function(){

        console.log('\n Game Manager is ready now. \n');

        //Send ids back to players.
        var provisioner = require('seneca')()
                          .use('redis-transport')
                          .client({type:'redis',pin:'role:*,action:gameInitiated'});

        // Iterate for each players
        for(var user of globalQueue[msg.tournamentId]){
          provisioner.act('role:'+user+',action:gameInitiated',{gameId:gameId},function(err,response){
            console.log('\n Game set up for user '+user+'\n');
          })
        }

    })

  })

}
