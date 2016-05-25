var express = require('express');
var app = express();
var seneca = require('seneca')()
            .use('microservices/micro/data')
            .use('microservices/ques')
            .use('entity')
            .use('mongo-store',{
              name:'quizRT4',
              host:'127.0.0.1',
              port:27017
            });
app.listen(3000,function(){
  console.log('Server is running at the port 3000');
})
app.use(express.static(__dirname+'/common-ui'));

app.post('/signup',function(req,res){
  console.log('post request');
  res.send('dlsf')
})
app.get('/eachtopic',function(req,res){
  console.log('got topics request');
  seneca.act('role:topics,action:retrieve',function(err,result){
    res.send(result)
  })
  console.log('call done');
})
app.get('/quiz',function(req,res){
  seneca.act('role:ques,action:retrieve',function(err,result){
    res.send(result)
  })
})
