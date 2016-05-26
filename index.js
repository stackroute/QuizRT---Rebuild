var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var questions;
var seneca = require('seneca')()
            .use('microservices/micro/data')
            .use('microservices/ques')
            .use('entity')
            .use('mongo-store',{
              name:'quizRT4',
              host:'127.0.0.1',
              port:27017
            })

server.listen(3000,function(){
  console.log('Server is running at the port 3000');
})
app.use(express.static(__dirname+'/common-ui'));
seneca.ready(function(){
    seneca.act('role:question,action:all',function(err,result){
     questions = result;

   io.on('connection',function(socket){
     socket.emit('new question',questions[0]);
   });
   
   });
  });
// app.post('/signup',function(req,res){
//   console.log('post request');
//   res.send('dlsf')
// })
// app.get('/eachtopic',function(req,res){
//   console.log('got topics request');
//   seneca.act('role:topics,action:retrieve',function(err,result){
//     res.send(result)
//   })
//   console.log('call done');
// })
app.get('/',function(req,res){

  console.log('from quiz');
})
