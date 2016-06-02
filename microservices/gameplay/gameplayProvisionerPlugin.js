module.exports = function(options){

  this.add('role:join,type:tournament',function(msg,respond){
    console.log('Username is : '+ msg.username);
    console.log('Tournament is: '+ msg.tournamentId);
    respond(null,{answer:'queued'});
  })



}
