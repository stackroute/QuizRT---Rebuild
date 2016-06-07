describe('Check microservice plugin',function(){
  it('Check microsecvice for product',function(done){
    require('seneca')()
    .use('../microservices/microserviceplugin')
    .act({role: 'math', cmd: 'product', left: 1, right: 2},function(err,res){

    });
    done();
  })
})
