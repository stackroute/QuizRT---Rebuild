var should = require ('should');
var seneca = require ('seneca')();
seneca.use('../microservices/registeruser/registeruser.js');
seneca.use('entity');

// Uncomment this code to store data in mongodb.
// seneca.use('mongo-store', {
//   name: 'quizart',
//   host: '127.0.0.1',
//   port: 27017
// });
//Test cases...........
describe('Check User Creation updaion deactivation',function(){
  var id;
  var newUser = {
      firstname : 'firstname',
      lastname : 'lastname',
      username : 'username',
      email : 'email',
      mobile : 'mobile',
      secret : 'secret',
      gender : 'gender',
      role : 'role',
      avatar : './img/avatar',
      isActive:true,
      creationdate: Date.now()
    }
    // Test case for user creation

  it('Creation of user in Database',function(done){
    seneca.act('role:user,action:add', {data:newUser}, function(err,saved_user){
      if(err) done(err)
      else{
        console.log("Hi welcome to my world");
        id = saved_user.id;
        console.log(id);
      saved_user.firstname.should.not.be.empty;
      saved_user.should.have.property('firstname',saved_user.firstname);
      saved_user.lastname.should.not.be.empty;
      saved_user.should.have.property('lastname',saved_user.lastname);
      saved_user.username.should.not.be.empty;
      saved_user.should.have.property('username',saved_user.username);
      saved_user.email.should.not.be.empty;
      saved_user.should.have.property('email',saved_user.email);
      saved_user.mobile.should.not.be.empty;
      saved_user.should.have.property('mobile',saved_user.mobile);
      saved_user.role.should.not.be.empty;
      saved_user.should.have.property('role',saved_user.role);
      saved_user.secret.should.not.be.empty;
      saved_user.should.have.property('secret',saved_user.secret);
      saved_user.creationdate.should.not.be.empty;
      saved_user.should.have.property('creationdate',saved_user.creationdate);
      saved_user.avatar.should.not.be.empty;
      saved_user.should.have.property('avatar',saved_user.avatar);
      saved_user.gender.should.not.be.empty;
      saved_user.should.have.property('gender',saved_user.gender);
      saved_user.isActive.should.not.be.empty;
      saved_user.should.have.property('isActive',true)
      saved_user.id.should.not.be.empty;
      saved_user.should.have.property('id',saved_user.id);
      done();
    }
  });
});//end of user creation test case

//test case for retrieving data of a user
it('getting data from database',function(done){
  seneca.act('role:user,action:get',{id:'5743ee5878157c3006221bb5'},function(err,loaded_user){
    if(err) done(err);
      loaded_user.should.have.property('firstname',loaded_user.firstname);
      loaded_user.firstname.should.not.be.empty;
      loaded_user.should.have.property('lastname',loaded_user.lastname);
      loaded_user.lastname.should.not.be.empty;
      loaded_user.should.have.property('id',loaded_user.id);
      loaded_user.id.should.not.be.empty;
      loaded_user.should.have.property('username',loaded_user.username);
      loaded_user.username.should.not.be.empty;
      loaded_user.should.have.property('mobile',loaded_user.mobile);
      loaded_user.mobile.should.not.be.empty;
      loaded_user.should.have.property('email',loaded_user.email);
      loaded_user.email.should.not.be.empty;
      loaded_user.should.have.property('gender',loaded_user.gender);
      loaded_user.gender.should.not.be.empty;
      loaded_user.should.have.property('avatar',loaded_user.avatar);
      loaded_user.avatar.should.not.be.empty;
      loaded_user.should.have.property('secret',loaded_user.secret);
      loaded_user.secret.should.not.be.empty;
      loaded_user.should.have.property('role',loaded_user.role);
      loaded_user.role.should.not.be.empty;
      loaded_user.should.have.property('isActive',loaded_user.isActive);
      loaded_user.isActive.should.not.be.empty;
      loaded_user.should.have.property('creationdate',loaded_user.creationdate);
      loaded_user.creationdate.should.not.be.empty;
    done();
  });
});// end of retrieving user test case

//Test case for user updation
// it('update user into Database',function(done){
//   var updateUser = {
//       firstname : 'updatename',
//       lastname : 'updatelastname',
//       username : 'username',
//       email : 'updatemail',
//       mobile : 'updatemobile',
//       secret : 'updatesecret',
//       gender : 'gender',
//       role : 'updaterole',
//       avatar : './img/avatar',
//       isActive : true
// }
//   seneca.act('role:user,action:update',{id:'5743ee04a6b5923412aaf9d1',data:updateUser},function(err,res){
//     if(err) done(err);
//     res.should.have.property('firstname',res.firstname);
//     res.firstname.should.be.exactly(updateUser.firstname);
//     res.firstname.should.not.be.empty;
//     res.should.have.property('lastname',res.lastname);
//     res.lastname.should.be.exactly(updateUser.lastname);
//     res.lastname.should.not.be.empty;
//
//     res.should.have.property('username',res.username);
//     res.username.should.be.exactly(updateUser.username);
//     res.username.should.not.be.empty;
//
//     res.should.have.property('email',res.email);
//     res.email.should.be.exactly(updateUser.email);
//     res.email.should.not.be.empty;
//
//     res.should.have.property('mobile',res.mobile);
//     res.mobile.should.be.exactly(updateUser.mobile);
//     res.mobile.should.not.be.empty;
//
//     res.should.have.property('secret',res.secret);
//     res.secret.should.be.exactly(updateUser.secret);
//     res.secret.should.not.be.empty;
//
//     res.should.have.property('gender',res.gender);
//     res.gender.should.be.exactly(updateUser.gender);
//     res.gender.should.not.be.empty;
//
//     res.should.have.property('role',res.role);
//     res.role.should.be.exactly(updateUser.role);
//     res.role.should.not.be.empty;
//
//     res.should.have.property('avatar',res.avatar);
//     res.avatar.should.be.exactly(updateUser.avatar);
//     res.avatar.should.not.be.empty;
//
//     res.should.have.property('isActive',res.isActive);
//     res.isActive.should.be.exactly(updateUser.isActive);
//     res.isActive.should.not.be.empty;
//     // res.creationdate.should.be.exactly(updateUser.creationdate);
//     done();
//     });
//   });//end of user updation

//Test case for deletion of user
// it('delete user from Database',function(done){
//   seneca.act('role:user,action:delete',{id:'573d5737dd80ba0c13460c0a'},function(err,res){
//     if (err) done(err);
//     console.log("user deleted");
//     done();
//   });
// });

 });//end for describe
