var should = require ('should');
var seneca = require ('seneca')();
seneca.use('account-api');
seneca.use('entity');

// Uncomment this code to store data in mongodb.
// seneca.use('mongo-store', {
//   name: 'quizart',
//   host: '127.0.0.1',
//   port: 27017
// });

describe('Check User CRUD',function(){
  it('Check user add and retrieve',function(done){
    var newUser = {
      username:'Anshul',
      secret:'somesecret',
      role:'admin',
      isActive:true,
      createdOn: Date.now()
    }
    seneca.act('role:user,action:add', {data:newUser}, function(err,saved_user){
      if(err) done(err)
      else{
      this.act('role:user,action:get',{id:saved_user.id},function(err,loaded_user){
        if(err) done(err);

        loaded_user.id.should.be.exactly(saved_user.id);
        loaded_user.username.should.be.exactly(saved_user.username);
        loaded_user.secret.should.be.exactly(saved_user.secret);
        loaded_user.role.should.be.exactly(saved_user.role);
        loaded_user.createdOn.should.be.exactly(saved_user.createdOn);
        done();
      });

    }
  });
});


});
