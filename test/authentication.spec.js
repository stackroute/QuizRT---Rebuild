var should = require('should')
var seneca = require('seneca');
var baseMicroService,authConsumerService,consumerAuthMicroService

describe('Checking the authentication api',function(){

  // it('Setup the mesh',function(done){
  //   baseMicroService= seneca();
  //   baseMicroService.use('mesh',{base:true});
  //   baseMicroService.ready(done);
  // })

  it('Setup authentication service',function(done){
    this.timeout(5000);
      var authConsumerService = seneca();
      // authConsumerService.use('../microservices/authentication/auth-plugin');
      authConsumerService.use('mesh',{auto:true})
      authConsumerService.act('role:authentication,action:authenticate',function(err,response){
        if(err){
          return done(err);
        }
        console.log("From auth consumer service: "+ response.message);
        return done();
      })
  })
})
