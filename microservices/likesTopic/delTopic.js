module.exports = function(){
  this.add('role:topic,action:delete',function(msg,result){
    this.make('userTopic').remove$(msg.id,function(err,del){
      console.log(del+'ho yai hai -----------------');
      result(del);
    });
  })
}
