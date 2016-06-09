module.exports = function(options){

      var questionFetcherClient = require('seneca')();
      questionFetcherClient.use('mesh',{auto:true,pin:'role:question,action:fetch'})

      // console.log('\n======================= Users are: '+options.users+'\n')

      var self = this;
      var userCount = options.users.length;
      self.gameId = options.gameId;

      self.broadcast = require('seneca')()
      .use('redis-transport');
      self.broadcast.client({type:'redis',pin:'gameId:'+self.gameId+',role:broadcast,action:*'})
        .ready(function() {
          var pingCount = options.users.length;
          self.users = options.users.map(function(user){
            var userMicroservice = require('seneca')();
            userMicroservice.use('redis-transport');
            var count=0;
            // console.log('\n=======User microservice added '+(++count)+' times ====\n')
            userMicroservice.add('role:'+user+',gameId:'+self.gameId+',action:ping',function(msg,respond){
              // console.log('\n=====RECEIVED PING========\n')
              pingCount--;
              respond(null,{answer:'pong'});
              if(pingCount===0) {
                startGame();
              }
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
            return userMicroservice;
          });
      });

      function startGame() {
        questionFetcherClient.act('role:question,action:random',{topicId:'Sports',noOfQuestions:5},function(err,response){

          var questionCount = response.questions.length-1;
          var questions = response.questions
          var questionSender;
          var firstQuestion ={

            question: questions[questionCount].question,
            options: questions[questionCount].options
          }
          self.broadcast.act('gameId:'+self.gameId+',role:broadcast,action:newQuestion',{question:firstQuestion},function(err,response){

         });
          // console.log('\n=====Questions retrieved: '+questions.length+'=====\n')
          var questionSender = setInterval(function(){
            if(questionCount===0)
            {
              clearInterval(questionSender);
            }
            questionCount--;
            var questionObject ={
              timer: 10
              question: questions[questionCount].question,
              options: questions[questionCount].options
            }
              self.broadcast.act('gameId:'+self.gameId+',role:broadcast,action:newQuestion',{question:questionObject},function(err,response){
            });
          },10500)

        });
      };
    }
