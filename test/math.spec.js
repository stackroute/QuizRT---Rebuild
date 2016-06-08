//var should = require('should');
describe('check math plugin',function(){
  it('check microsecvice for sum microservices',function(done){
    require('seneca')()
    .use('../microservices/mathplugin')
    .act('role:math,cmd:sum,left:2,right:21',function(err,res){

    //console.log(res)
    });
    done();
  })
})
