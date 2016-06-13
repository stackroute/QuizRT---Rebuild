var should = require('should');
var seneca = require('seneca');

describe('Testing entity functions without wrappers',function(){
var entityCheckService;
  it('Setup redis store microservice',function(done){
    this.timeout(10000);
     entityCheckService = seneca();
    entityCheckService.use('mongo-store',{
      name:'quizart',
      host:'127.0.0.1',
      port:27017
    }).ready(done);
  })

  it('Creating an entity with pattern ',function(done){


      entityCheckService.act('role:entity,cmd:save,name:leaderboard',{ent:{data:{anshul:'hello'}}},function(err,response){
        if (err) return done(err);
        // response.should.have.property('id');
        console.log(response);
        done();
      })

  })

})
