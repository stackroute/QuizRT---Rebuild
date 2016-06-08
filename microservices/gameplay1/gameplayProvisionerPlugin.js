var globalQueue ={};

module.exports = function(options){

  var self= this;



  self.add('role:provisioner,action:queue',function(msg,respond){
   var provisionerResponseChannelMicroservice = require('seneca')()
                      .use('redis-transport')
                      .client({type:'redis',pin:'role:'+msg.username+',action:gameInitiated'});
    // console.log('\n ==========Game Provisioner Initialized=========== \n')
    var tournamentId = msg.tournamentId;

    //add the users to a global queue with tournament id

    if(!globalQueue[tournamentId])
    {
      globalQueue[tournamentId] = [msg.username]
    }
    else{
      globalQueue[tournamentId].push(msg.username);
    }
    // console.log('\n Tournament Id : '+msg.tournamentId+'\n');
    // console.log('\n Users are : '+globalQueue[msg.tournamentId]+'\n')
    //If found x or more members
    if(globalQueue[tournamentId].length>=1){
      var gameManager = require('seneca')();
      var gameId = Math.ceil(Math.random()*1231);
      // console.log(' \n Since players are more than 2, spawning game manager.')
      respond(null,{answer:'gameInitiated'});
      gameManager.use(require('./gameManagerPlugin'),
                                {
                                  gameId: gameId,
                                  users: globalQueue[msg.tournamentId],
                                  tournamentId: msg.tournamentId,
                                  callback: gameManagerReady
                                }
                    );
    }
    else{
      respond(null,{answer:'queued'})
    }

         function gameManagerReady(){

            //Send ids back to players.
            var count=0;

            // console.log('\n====GLOBAL QUEUE '+JSON.stringify(globalQueue)+'\n')

            // console.log('\n==========GLOBAL QUEUE CONTAINS: '+globalQueue[msg.tournamentId]+'\n')
            for(var user of globalQueue[msg.tournamentId]){
              // console.log('\n===Count before sending the game id '+(++count)+'\n')
              provisionerResponseChannelMicroservice.act('role:'+user+',action:gameInitiated',{gameId:gameId},function(err,response){
                // console.log('\n===Count after sending the game id'+(count)+'\n')
                // console.log('\n Game set up for user '+user+'\n');
              })
            }

            delete globalQueue[msg.tournamentId];
            // console.log('\n Global queue with the topic is now: '+globalQueue[msg.tournamentId]+'\n')
            // console.log('\n Game Manager is ready now. \n');

        }
  })










}
