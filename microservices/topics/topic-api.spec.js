var should = require('should');
var seneca = require('seneca')()
              .use('topic-api')
              .use('entity')
              .use('mongo-store',{
                name:'quizart',
                host:'127.0.0.1',
                port:27017
              });

describe('Check for the CRUD',function(){
  var id;
  var topic = {
     name:"Sports",
     desc:"This is a sports quiz",
     category:"Sports",
     userPlayed:[1,2],
     followers:2,
     numberOftimePlayed:2,
     creationTimeStamp:"13/4/2016",
     mostPopular:false,
     archive:false,
     archiveBy:"",
     archiveTimeStamp:"",
     maxScoreAchieved:100,
     maxScoreAchievedBy:"",
     minScoreAchieved:0,
     minScoreAchievedBy:"",
     hashTags:[]
   }
   var updateTopic = {
     name:"politics",
     desc:"newDesc"
   }
   it('Add the topic',function(done){
     seneca.act('role:topic,action:add',{data:topic},function(err,saved_topic){
       if(err) done(err)
       id = saved_topic.id;
       saved_topic.name.should.be.exactly(topic.name);
       done();
     })
   })
  it('retrieve topic by id',function(done){
      seneca.act('role:topic,action:get,criteria:byId',{id:id},function(err,result){
        if(err) done(err);
        else{
          result.name.should.be.exactly(topic.name);
          done();
        }
      })
  })
  it('Update the topic by id',function(done){
    seneca.act('role:topic,action:update',{id:id,data:updateTopic},function(err,result){
      if(err) done(err)
      result.name.should.be.exactly(updateTopic.name);
      done();
    })
  })
})
