var userAccounts = function(options){
  //load a user from database based on id.
  this.add({role:'user',get:'user'},function(msg,respond){
    this.make('user').load$(msg.id,respond);
  });

  //create a new user in the database.

  this.add({role:'user',add:'user'},function(msg,respond){
    this.make('user').data$(msg.data).save$(respond);
  });
}
module.exports = userAccounts;
