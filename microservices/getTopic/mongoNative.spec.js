var should = require('should');
var seneca = require('seneca')()
              .use('entity')
              .use('getAllTopic')
              .use('mongo-store',{
                name: "quizRT4",
                host: "127.0.0.1",
                port: 27017
              })


describe('Mongo Native test cases',function(){
  it('Mongo native test cases for to get collection names',function(done){
    seneca.act('role:topic,action:allTopic',function(err,result){
      if(err) return done(err);
      console.log("found records\n----------"+result+"\n----------");
      done();
    })
  })
})
