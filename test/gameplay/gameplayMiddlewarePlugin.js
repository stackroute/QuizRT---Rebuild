module.exports = function gamePlayMiddleware(options){

  this.add('role:joinTournament',function(msg,respond){
    options.socket.emit('tournamentQueue',{msg:'wait'});
    respond(null,{answer:'success'});
  })
}
