module.exports = function(){
  this.add('role:topic,action:create',function(msg,result){
    this.make('userTopic').data$(msg.data).save$(result);
  })

}
