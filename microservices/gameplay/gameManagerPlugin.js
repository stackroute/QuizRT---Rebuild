module.exports = function(options){
     var currentQuestion;
     var questionFetcherClient = require('seneca')();
     var leaderboardClient = require('seneca')();
     leaderboardClient.use('entity')
                       .use('redis-store',{
                         // uri:'redis://localhost:6379'
                         uri:'redis://'+process.env.REDIS_URL+':'+process.env.REDIS_PORT
                       })
     questionFetcherClient.use('mesh',{auto:true,pin:'role:question,action:fetch'})

     // console.log('\n======================= Users are: '+options.users+'\n')

     var self = this;
     var userCount = options.users.length;
     self.gameId = options.gameId;
     var gameStarted = false;
     var leaderboardId = Math.random()*300;

     var leaderboard = {}//leaderboardClient.make('leaderboard'+leaderboardId);
     leaderboard["gameId"] = self.gameId;
     self.broadcast = require('seneca')()
     .use('redis-transport');
     self.broadcast.client({type:'redis',pin:'gameId:'+self.gameId+',role:broadcast,action:*'})
       .ready(function() {
         var pingCount = options.users.length;

         self.users = options.users.map(function(user){

           var userMicroservice = require('seneca')();
           userMicroservice.use('redis-transport');
           var count=0;
           leaderboard[user] =0;
           // console.log('\n=======User microservice added '+(++count)+' times ====\n')
           userMicroservice.add('role:'+user+',gameId:'+self.gameId+',action:ping',function(msg,respond){
             // console.log('\n=====RECEIVED PING========\n')
             pingCount--;
             respond(null,{answer:'pong'});
             if(pingCount===0) {
               startGame();
             }
           })
           .add('role:'+user+',gameId:'+self.gameId+',action:answer',function(msg,respond){
             console.log('\n=============Inside game manager answer instance with answer as '+msg.answer+'\n');
             console.log('\n======current question is: '+currentQuestion.question+'\n');
               var respondToQuestion ={
                answerOfQuestion : checkAnswerAndCalculateScore(user,msg.answer),
                leaderboard: leaderboard
               }
               console.log('\n=====SEnding resposne as ====='+JSON.stringify(respondToQuestion)+'===\n');
               respond(null,{respondToQuestion:respondToQuestion});
           })
           .listen({type:'redis',pin:'role:'+user+',gameId:'+self.gameId+',action:*'})
           .ready(function() {
             userCount--;

             if(userCount===0){
               // console.log('\n User Response Channel for ' + user + ' ready. '+Date.now()+'\n');
               // console.log('\n======PIN is: role:'+user+',gameId:'+self.gameId+'\n');

               options.callback();
             }

           });

           console.log('\n=======Users in Leaderboard : '+Object.keys(leaderboard)+'===\n\n')
           return userMicroservice;
         });


     });

     function checkAnswerAndCalculateScore(user,answer){
       console.log('\n===========Current  question is: '+currentQuestion.correctIndex+'\n');
       var currentAnswer = currentQuestion.options[currentQuestion.correctIndex];

       console.log('\n==== Answer by  player is:  '+ answer+'======\n');
       console.log('\n==== Correct answer  is:  '+ currentAnswer+'======\n');
       if(currentAnswer.indexOf(answer)>-1)
         {

           leaderboard[user] += 10;
           // finalLeaderboard = changeLeaderboardFormat(leaderboard)
           // console.log('\n============================Leaderboard is: '+ leaderboard+ '=======\n')
           // console.log('\n============================ Final Leaderboard is: '+ finalLeaderboard+ '=======\n')
           // // leaderboard.save$(function(err,leaderboard){
           // //   console.log('\n================Saved the leaderboard in redis=========\n');
           // // })
         }
        return currentAnswer;
     }

     // function changeLeaderboardFormat(leaderboard){
     //   var username, score, changedLeaderboard;
     //   console.log('\n=======Leader board in changeLeaderboardFormat is: ======'+leaderboard+'====\n');
     //  for ( var player of leaderboard){
     //    username = player;
     //    score = leaderboard[player];
     //    changedLeaderboard["scores"].push({username:username,
     //                                        score:score});
     //  }
     //  changedLeaderboard["gameId"] = self.gameId;
     //  return changedLeaderboard;
     // }

     function startGame() {
       questionFetcherClient.act('role:question,action:random',{topicId:'T1',noOfQuestions:5},function(err,response){
         if(err) return console.log(err);
         var questionCount = response.questions.length-1;
         var questions = response.questions
         var questionSender;
         console.log('\n===========Questions are :'+questions+'================\n')
         // var firstQuestion ={
         //
         //   question: questions[questionCount].question,
         //   options: questions[questionCount].options
         // }
         // currentQuestion = firstQuestion;
       //   self.broadcast.act('gameId:'+self.gameId+',role:broadcast,action:newQuestion',{question:firstQuestion},function(err,response){
        //
       //  });
         // console.log('\n=====Questions retrieved: '+questions.length+'=====\n')
       var questionSender =  setInterval(function(){

           if(questionCount===-1)
           {
             clearInterval(questionSender);
             console.log('\n==== Game has ended sending the leaderboard\n');
             // var loadedLeaderboard = leaderboard.list$({},function(err,response){
             //   console.log('\n========Loaded the leaderboard, sending it to users=====\n')
             // })
                console.log('\n==============Sending final leaderboard as: '+JSON.stringify(leaderboard)+'===================\n');
                 self.broadcast.act('gameId:'+self.gameId+',role:broadcast,action:leaderboard',{leaderboard:leaderboard},function(err,response){
               if(err) return console.log(err);
               console.log('\n Received response for leaderboard \n');

             })

             self.close();


           }
           else{
           currentQuestion = questions[questionCount];

           var questionObject ={

             question: questions[questionCount].question,
             options: questions[questionCount].options,
             image: questions[questionCount].image
           }
           if(!gameStarted){
           self.broadcast.act('gameId:'+self.gameId+',role:broadcast,action:gameStarting',function(err,response){
             console.log('\n======================== Sending game starting broadcast =======\n')
             if(err) return console.log(err);
             setTimeout(function(){
               gameStarted = true;
             },1000)

           });
         }

              if(gameStarted){
                 self.broadcast.act('gameId:'+self.gameId+',role:broadcast,action:newQuestion',{question:questionObject},function(err,response){
                  console.log('\n======================== Question sent =======\n')
                  questionCount--;
                 if(err) return console.log(err);
                });
             }


         }
       },10050)

       });
     };
   }
