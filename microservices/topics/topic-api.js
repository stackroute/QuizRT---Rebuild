module.exports = function topic(options){



  // add the topic
  this.add('role:topic,action:add',function(msg,respond){
    this.make('topic').data$(msg.data).save$(respond)
  })
  // get topic by id
  this.add('role:topic,action:get,criteria:byId',function(msg,respond){
    this.make('topic').load$(msg.id,respond)
  });
  // update the name
  this.add('role:topic,action:update',function(msg,respond){
    this.act('role:topic,action:get,criteria:byId',{id:msg.id},function(err,result){
      result.data$(msg.data)
      result.save$(respond);

    })
  })
  this.add('role:topic,action:remove',function(msg,result){
    this.make('profile').remove$(msg.id,function(err){
      result(err,null);
    });
  })
}
