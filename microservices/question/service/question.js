
function questionPlugin(options){

  this.add({role:'question',action:'all'},function(msg,respond){
   this.make$('questions').list$({},respond);
  })

  this.add({role:'question',action:'add'},function(msg,respond){
    this.make$('questions').save$(msg.data,respond);
  })


}
module.exports = questionPlugin;
