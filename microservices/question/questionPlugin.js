module.exports = function() {
  this.add('role:question,action:all', function(msg, respond) {
    this.make$('question').list$({}, respond);
  });

  this.add('role:question,action:add',function(msg,respond){
    this.make$('question').save$(msg.data,respond);
  })

 

};
