var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);
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
  var count,seconds,timer,connectCounter=0;
  io.on('connection',function(socket){
    connectCounter++;
    console.log("number of connections -------------"+connectCounter+"-----------------------------");
    count=0;
    seconds= 10;
    socket.on('send first question',function(){
      socket.emit('new question',questions[0]);
      // socket.emit('timer',seconds);
        // timer=  setInterval(function(){
        //    socket.emit('timer',seconds);
        //    seconds--;
        //    if(seconds>=10){
        //      seconds = 10;
        //      clearInterval(timer);
        //    }
        //  },1000);
    var questionSender =setInterval(function(){
      console.log('count is ' + count++);
      if(count>=questions.length)
      {
          clearInterval(questionSender);
          clearInterval(timer);
          socket.emit('end timer',"thanks");
          socket.emit('end quiz',"thank you");
      }
      else{
      socket.emit('new question',questions[count]);
    }
  },10000);
  socket.on('disconnect', function() {
     connectCounter--;

     console.log("number of user disconnected 1");
     console.log("now total connected-------"+connectCounter);
   });

  //  socket.emit('new question',questions[count]);
   socket.on('my answer',function(msg){
    console.log('user answered '+ msg);
    console.log(questions[count].correct.indexOf(msg));
    if(questions[count].correct.indexOf(msg)>-1)
      {
        console.log('Correct answer is '+ questions[count].correct);

      }
    else{
        socket.emit('incorrect','You answered incorrectly');
    }
  })
})
});
});

app.get('/',function(req,res){
  console.log('from quiz');
  res.send(obj)
})
