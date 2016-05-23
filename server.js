var app = require('express')();
var http = require('http').Server(app);

var io = require('socket.io')(http);
var seneca = require('seneca')();

var questions;


io.on('connection',function(socket){
    // app.get('/api/questions/all',function(req,res){
    //     res.io =io;
         seneca 
                    .use('mesh',{auto:true,pin:'role:question'})
                    .ready(function(){
                     seneca.act('role:question,action:all',function(err,result){

                        console.log(result);

                    })
                  });

    // });
});
app.use(seneca.export('web'));



app.use(require("body-parser").json());

app.get('/', function(req, res){
  res.sendFile(__dirname + '/quiz.html');

});

// var questions; //holds the question array.
// io.on('connection', function(socket){
//   console.log('connection establisthed');
//
//   })
//
//   var questionNumber = (Math.random() * questions.count()) -1;
//   socket.on('give new question',function(id){
//     console.log('have to send new question');
//     socket.emit('new question', questions[questionNumber]);
//
//   })
//   });
//
//   // function sendNewQuestion(socket,id){
//   //   request('http://localhost:3000/questionBank/'+id,function(req,res){
//   //
//   //     socket.emit('new question', res.body);
//   //   });
//   // }

http.listen(8080, function(){
  console.log('listening on *:8080');
});
