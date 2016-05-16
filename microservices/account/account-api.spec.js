var should = require ('should');
var seneca = require ('seneca')();
seneca.use('account-api');
seneca.use('entity');
seneca.use('mongo-store', {
  name: 'quizart',
  host: '127.0.0.1',
  port: 27017
});

describe('Check User CRUD',function(){
  it('Check user add and retrieve',function(done){
    seneca.act('role:user,add:user, data:{username:Anshul}', function(err,saved_user){
      if(err) done(err)
      else{
      this.act('role:user,get:user',{id:saved_user.id},function(err,loaded_user){
        if(err) done(err);

        loaded_user.id.should.be.exactly(saved_user.id);
        done();
      })
    }
    })
  })
})
