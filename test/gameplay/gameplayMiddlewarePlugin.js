module.exports = function gamePlayMiddleware(options){
  var self = this;

  self.username = options.username;
  self.tournamentId = options.tournamentId;
  self.socket = options.socket;

  this.add('cmd:joinTournament',function(msg,respond){
    respond(null,{answer:'success'});
    self.socket.emit('tournamentQueue',{msg:'wait'});
  })
}
