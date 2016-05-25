module.exports = function(){
  this.add('role:profile,action:add',function(msg,result){
    this.make('profile').data$(msg.data).save$(result);
  })
  this.add('role:profile,action:get',function(msg,result){
    this.make('profile').load$(msg.id,result);
  })
  this.add('role:profile,action:remove',function(msg,result){
    this.make('profile').remove$(msg.id,function(err){
      result(err,null);
    });
  })
  this.add('role:profile,action:update',function(msg,result){
    this.act('role:profile,action:get',{id:msg.id},function(err,res){
      res.data$({
        id:msg.id,
        username:msg.data.username
      }).save$(result)
    })
  })

}
