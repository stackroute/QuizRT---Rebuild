function authAPI(options){

  this.add('role:authentication,action:authenticate',function(msg,respond){
    console.log('Inside auth api');
    respond(null,{message:5});
  })
  
}

module.exports = authAPI;
