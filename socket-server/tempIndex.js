var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var questions;
var seneca = require('seneca')()
            .use('entity')
            .use('mesh',{auto:true});
server.listen(8080,function(){
  console.log('Server is running at the port 8080');
})
app.use(express.static(__dirname+'/common-ui'));
seneca.act('role:question,action:all',function(err,result){
  questions = result;
}).ready(function(){
  var count =0;
  io.on('connection',function(socket){
   socket.emit('new question',questions[0]);
   socket.on('give new question',function(){
     if(count==questions.length){
       socket.emit('end quiz',"The quiz has ended. Thank you for playing");
       // count=0;
       // socket.emit('new question');
     }
     else{
       // random = Math.floor(Math.random() * questions.length);
       // console.log(random);
     socket.emit('new question',questions[count]);
     count++;
   }
 })
})
})
app.get('/',function(req,res){

  console.log('from quiz');
})
