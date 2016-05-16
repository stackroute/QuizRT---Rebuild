var userAccounts = function(options){
  //load a user from database based on id.
  this.add({role:'user',action:'get'},function(msg,respond){
    this.make('user').load$(msg.id,respond);
  });

  //create a new user in the database.

  this.add({role:'user',action:'add'},function(msg,respond){
    this.make('user').data$(msg.data).save$(respond);
  });

 

}
module.exports = userAccounts;
