<<<<<<< HEAD

    module.exports = function(options){



      var currentQuestion;
      var questionFetcherClient = require('seneca')();

=======
    module.exports = function(options){
      var currentQuestion;
      var questionFetcherClient = require('seneca')();
>>>>>>> 7b11cdf1814fe3394ecc0b2834bd57d2090f695a
      var leaderboardClient = require('seneca')();
      leaderboardClient.use('entity')
                        .use('redis-store',{
                          uri:'redis://localhost:6379'
                        })
      questionFetcherClient.use('mesh',{auto:true,pin:'role:question,action:fetch'})

      // console.log('\n======================= Users are: '+options.users+'\n')

      var self = this;
      var userCount = options.users.length;
      self.gameId = options.gameId;
      var leaderboardId = Math.random()*300;
      var leaderboard = leaderboardClient.make('leaderboard'+leaderboardId);

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
                respond(null,{answer:checkAnswerAndCalculateScore(user,msg.answer)});
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
        var answerObj ={};
        answerObj.answerOfQuestion = currentAnswer;
        if(currentAnswer.indexOf(answer)>-1)
          {

            leaderboard[user] += 10;
            leaderboard.save$(function(err,leaderboard){
              console.log('\n================Saved the leaderboard in redis=========\n');
            })
          }
         return answerObj;
      }

      function startGame() {
        questionFetcherClient.act('role:question,action:random',{topicId:'Sports',noOfQuestions:5},function(err,response){
          if(err) return console.log(err);
          var questionCount = response.questions.length-1;
          var questions = response.questions
          var questionSender;
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
            questionCount--;
            if(questionCount===0)
            {
              clearInterval(questionSender);
              console.log('\n==== Game has ended sending the leaderboard\n');
              var loadedLeaderboard = leaderboard.list$({},function(err,response){
                console.log('\n========Loaded the leaderboard, sending it to users=====\n')
              })

              self.broadcast.act('gameId:'+self.gameId+',role:broadcast,action:leaderboard',{leaderboard:loadedLeaderboard},function(err,response){
                if(err) return console.log(err);
                console.log('\n Received response for leaderboard \n');
              }).close();

            }
            else{
            currentQuestion = questions[questionCount];
            console.log('\n ============Sending current question as: '+currentQuestion.question+'\n');
            var questionObject ={

              question: questions[questionCount].question,
              options: questions[questionCount].options
            }
<<<<<<< HEAD
              self.broadcast.act('gameId:'+self.gameId+',role:broadcast,action:newQuestion',{question:questionObject},function(err,response){
                if(err) return console.log(err);
            });
=======
            self.broadcast.act('gameId:'+self.gameId+',role:broadcast,action:gameStarting',function(err,response){
              if(err) return console.log(err);
              setTimeout(function(){
                self.broadcast.act('gameId:'+self.gameId+',role:broadcast,action:newQuestion',{question:questionObject},function(err,response){
                  if(err) return console.log(err);
                }); 
              },5000)
            })

>>>>>>> 7b11cdf1814fe3394ecc0b2834bd57d2090f695a
          }
        },10050)

        });
      };
    }
