module.exports = function gamePlayMiddleware(options){
  var self = this;
  var id = Math.random()*2343242;
  self.username = options.username;
  self.tournamentId = options.tournamentId;
  self.socket = options.socket;

  setTimeout(function(){
    self.act({role:'tournament',id:self.tournamentId,username:self.username,gameId:id},function(err,response){

    })
  },1000)


  this.add('role:tournament,cmd:queue',function(msg,respond){

    respond(null,{answer:'queued'});
    self.socket.emit('tournamentQueue',{msg:'queued'});
  });



}
