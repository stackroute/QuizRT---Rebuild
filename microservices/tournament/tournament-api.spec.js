var should = require ('should');
var seneca = require ('seneca')();
seneca.use('tournament-api');
seneca.use('entity');
// seneca.use('mongo-store', {
//   name: 'quizart',
//   host: '127.0.0.1',
//   port: 27017
// });


describe('Check Tournament Crud',function(){
  var createdTournamentId;
  var updatedTournament = {
    name: 'Hockey',
    desc: 'Dummy Desc',
    rules: 'dummy rules',
    prizes: 'We are not gonna give',
    startDateTime: Date.now(),
    endDateTime: Date.now(),
    registeredUsers : [192,132,2345],
    usersPlayed: [192,132],
    category: 'Sports',
    hashtags: ["#Dhyanchand","Hockey"],
    maxLevel: 4,
    minLevel: 9,
    imageUrl: 'someUrl',
    avatarUrl: 'someAvatarUrl'
  }
  var newTournament ={
    name: 'Cricket',
    desc: 'Dummy Desc',
    rules: 'dummy rules',
    prizes: 'We are not gonna give',
    startDateTime: Date.now(),
    endDateTime: Date.now(),
    registeredUsers : [192,132,2345],
    usersPlayed: [192,132],
    category: 'Sports',
    hashtags: ["#Sachin","Cricket","#Kohli"],
    maxLevel: 4,
    minLevel: 9,
    imageUrl: 'someUrl',
    avatarUrl: 'someAvatarUrl'
  }
  it('Check Tournament Add',function(done){

    seneca.act('role:tournament,action:add',{data:newTournament},function(err,saved_tournament){
      if(err) done(err);
      else {
        this.act('role:tournament,action:get',{id:saved_tournament.id},function(err,loaded_tournament){
          if(err) done(err)
          loaded_tournament.id.should.be.exactly(saved_tournament.id);
          loaded_tournament.id.should.be.instanceOf(String);
          loaded_tournament.name.should.be.exactly(saved_tournament.name);
          createdTournamentId= loaded_tournament.id;
          console.log(createdTournamentId);
          done();
        })

      }
   })
  })

   

  // it('Check Tournament update',function(done){
  //   seneca.act('role:tournament,action:get',{id:createdTournamentId},function(err,loaded_tournament){
  //     this.act('role:tournament,action:update',{data:updatedTournament},function(err,updated_tournament){
  //       if(err) done(err)
  //       loaded_tournament.id.should.be.exactly(updated_tournament.id);
  //       updated_tournament.name.should.be.exactly(updatedTournament.name);
  //       done();
  //     })
  //   })
  // })
})
