 var provisioner = require('seneca')()
 provisioner.use(require('./gameplayProvisionerPlugin'))
 module.exports = function(options){

  this.add('role:provisionerClient,action:queue',function(msg,respond){
    console.log('\n Provisioner client calling provisioner\n');
    provisioner.act('role:provisioner,action:queue',{username:msg.username,id:msg.id},function(err,response){
      respond(null,response);
    })
  })

}
