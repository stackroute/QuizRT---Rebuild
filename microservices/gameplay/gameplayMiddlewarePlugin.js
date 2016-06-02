module.exports = function gamePlayMiddleware(options){
  var self = this;

  self.username = options.username;
  self.tournamentId = options.tournamentId;
  self.socket = options.socket;

  this.add('role:tournament,cmd:queue',function(msg,respond){
    respond(null,{answer:'queued'});
    self.socket.emit('tournamentQueue',{msg:'queued'});
  });
}
