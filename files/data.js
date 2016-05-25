module.exports = function(){
  this.add('role:topics,action:retrieve',function(msg,respond){
    this.make$('topics_collection').list$({"_id":"Animals"},function(err,result){
      respond(null,result)
    })
  })
}
