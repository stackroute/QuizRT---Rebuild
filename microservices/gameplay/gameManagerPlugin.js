module.exports = function(options){
  var id = Math.random() * 233421124;
  this.add('role:gameManager,action:create',function(err,response){
        respond(null,{gameId:id})
  })
}
