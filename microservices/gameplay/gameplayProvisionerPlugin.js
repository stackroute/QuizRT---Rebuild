var globalQueue = {};


module.exports = function(options){


var id = Math.ceil(Math.random()*23423);

  //Middleware comes and sits in the queue.
  this.add('role:provisioner,action:queue',function(msg,respond){
    var key = msg.tournamentId;
    var users =[];


    //add the users to a global queue with the game or tournament as key.

     if(!globalQueue[msg.tournamentId]){
       globalQueue[msg.tournamentId] = [msg.username];
     }

     //globalQueue[msg.tournamentId].push('anshul');

      console.log("\n Key is "+ msg.tournamentId);

      console.log("\n Users in Queue are: +"+globalQueue[msg.tournamentId]+"\n");




    if(globalQueue[msg.tournamentId].length>=1)
    {

      this.act('role:provisioner,action:initiateGame',{users:users,tournamentId:msg.tournamentId},function(err,response){
        // console.log('\n Gameplay provisioner responding now  with game id\n');
        respond(null,response);
      })
    }
    else {
      //console.log('\n Gameplay provisioner responding now \n');
      respond(null,{answer:'queuedInProvisioner'}) ;
    }
  })

  // Tells the game manager to initiate a game.
  // Passes id and users in option thus makes a unique game manager for each game.
  this.add('role:provisioner,action:initiateGame',function(msg,respond){

    var gameManager = require('seneca')();
    console.log(' \n Since players are more than 2, spawning game manager.')
    gameManager.use(require('./gameManagerPlugin'),
                              {
                                id: id,
                                users: globalQueue[msg.tournamentId],
                                tournamentId: msg.tournamentId
                              }
                  );
                  //When game manager is ready send the gameId back to middleware.
                  gameManager.ready(function() {
                      console.log('\n Game manager is ready now \n');
                    var provisioner = require('seneca')()
                                      .use('redis-transport')
                                      .client({type:'redis',pin:'role:*,action:gameInitiated'});
                    for(var user of globalQueue[msg.tournamentId])
                    {

                      console.log('\n Sending game id to users \n')
                      provisioner.act('role:'+user+',action:gameInitiated,'+'gameId:'+id,function(err,response){
                        console.log('\n '+response.answer+' \n');
                      })
                    }
                  });
  })
}
