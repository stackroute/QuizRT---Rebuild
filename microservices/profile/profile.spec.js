var should = require('should');
var seneca = require('seneca')()
              .use('profile')
              .use('entity')
              .use('mongo-store',{
                name:'quizart',
                host:'127.0.0.1',
                port:27017
              });

describe('Check for CRUD',function(){
  var id;
  var profile = {
    username:'anshul',
    topicPlayed:[1,3],
    tournamentPlayed:[2,6],
    currentLevel:'beginer',
    lastActivity:'',
    rank:4,
    expPoint:12,
    fbLink:'',
    googleLink:'',
    twitterLink:'',
    favTopics:[],
    badges:[2,4],
    wrongAnswer:0,
    rightAnswer:10,
    friends:[]
    }
    var updateProfile = {
      username:"Rohit"
    }
  it('Add the profile',function(done){
    seneca.act('role:profile,action:add',{data:profile},function(err,result){
      if(err) done(err);
      id = result.id;
      result.id.should.be.exactly(id);
      done();
    })
  })
  it('Get the profile by Id',function(done){
    seneca.act('role:profile,action:get',{id:id},function(err,result){
      if(err) done(err);
      result.id.should.be.exactly(id);

      done();
    })
  })
  it('Remove the profile by Id',function(done){
    seneca.act('role:profile,action:remove',{id:profile.id},function(err,result){
      if(err) done(err);
      console.log(result);
      done();
    })
  })
  it('Update the profile by Id',function(done){
    seneca.act('role:profile,action:update',{id:id,data:updateProfile},function(err,result){
      if(err) done(err);
      result.username.should.be.exactly(updateProfile.username)
      done();
    })
  })
})
