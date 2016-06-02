module.exports = function(options){
  this.add('role:playerChannel,action:create',function(msg,respond){
    console.log(msg.username);
    console.log(msg.tournamentId);
    respond(null,{answer:'player publishing to gameplay'});
  })
}
