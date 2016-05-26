module.exports = function() {
  this.add('role:question,action:all', function(msg, respond) {
    this.make$('questionBank').list$({},function(err,result){
      respond(null,result)
    });
  });

  // this.add('role:question,action:add',function(msg,respond){
  //   this.make$('question').save$(msg.data,respond);
  // })
};
