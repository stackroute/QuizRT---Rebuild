var should = require('should');
var seneca = require('seneca');

describe('Spawn Game Manager',function(){
  var tournamentId =  Math.random()*323423;

  //Players with tournament ID.
  var player1={
    username: 'player1',
    tournamentId: tournamentId
  },
    player2 = {
      username: 'player2',
      tournamentId: tournamentId
    },
    player3 = {
      username: 'player3',
      tournamentId: tournamentId
    }


  it('Create Game and get Game ID',function(done){
    this.timeout(100000);
    var gameConsumer = seneca();
    gameConsumer.use('../.././microservices/gameplay/gameManagerPlugin',{player1:player1,player2:player2,player3:player3});
    gameConsumer.act('role:gameManager,action:create'},function(err,response){
      if(err) return done(err);
      response.should.have.property('gameId');
      done();
    })
  })


})
