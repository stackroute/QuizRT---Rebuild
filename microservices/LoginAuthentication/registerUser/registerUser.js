module.exports = function register(options){

  //load an Users based on id.
    this.add({role:'user',action:'get'},function(msg,respond){
      this.make('newUser').load$({name:msg.data},respond);
    });
    //create a new user
    this.add({role:'user',action:'add'},function(msg,respond){
      this.make('newUser').data$(msg.data).save$(respond);
    });

    //update an user
    this.add('role:user,action:update',function(msg,respond){
      this.act('role:user, action:get',{id:msg.id},function(err,loaded_user){
        loaded_user.data$(msg.data).save$(respond);
      })
    });

    //delete an user
    this.add('role:user,action:delete',function(msg,respond){
      this.make('newUser').remove$(msg.id,respond);
    });
}