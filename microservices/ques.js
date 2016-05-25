module.exports = function(){
  this.add('role:ques,action:retrieve',function(msg,respond){
    this.make$('questionBank').list$({},function(err,result){
      respond(null,result)
    })
  })
}
