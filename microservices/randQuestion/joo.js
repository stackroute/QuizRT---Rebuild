require('seneca')()
  // this service handles bar:1 messages
  // .use('')
  // .options({timeout: 1000000})
  .use('entity')
  .use('mesh', { auto:true})
  .act('role:question,action:all',function(err,res){
      if(err) return err;
      console.log("restult hai "+res+" done");
    });
