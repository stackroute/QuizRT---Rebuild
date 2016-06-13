module.exports = function(){
  this.add('role:accountInfo,action:add',function(msg,result){
    this.make('account_info').data$(msg.data).save$(result);
  })
  this.add('role:accountInfo,action:get',function(msg,result){
    this.make('account_info').load$({email:msg.email},result);
  })
  this.add('role:accountInfo,action:getId',function(msg,result){
    this.make('account_info').load$({id:msg.id},result);
  })
  this.add('role:accountInfo,action:remove',function(msg,result){
    this.make('account_info').remove$(msg.id,function(err){
      result(err,null);
    })
  })
  this.add('role:accountInfo,action:update',function(msg,result){
    this.act('role:accountInfo,action:getId',{id:msg.id},function(err,res){
      res.data$(msg.data).save$(result)
    })
  })

}
