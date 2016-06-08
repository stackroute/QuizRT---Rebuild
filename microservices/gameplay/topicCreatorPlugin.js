module.exports = function(options){

  var id = Math.random()*342323;
  var self = this;
  self.id = options.id;
  self.username = options.username;

  this.add({role:'tournament',id:self.id,username:self.username,gameId:id},function(msg,respond){

    respond(null,{answer:'player publishing to gameplay with gameID: '+id});
  })
}
