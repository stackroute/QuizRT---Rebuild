function authAPI(options){

  this.add('role:authentication,action:authenticate',function(msg,respond){
    console.log('Inside auth api');
    respond("You are authenticated");
  })



}

module.exports = authAPI;
