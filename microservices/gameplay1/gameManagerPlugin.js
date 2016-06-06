    module.exports = function(options){

      var questionFetcherClient = require('seneca')();
      questionFetcherClient.use('mesh',{auto:true,pin:'role:question,action:fetch'})


      var self = this;
      self.gameId = options.gameId;
      self.broadcast = require('seneca')()
      .use('redis-transport');

      self.users = options.users.map(function(user){

        //Create channels for users on which they will send response to game manager.


        var userMicroservice = require('seneca')();
        userMicroservice.use('redis-transport');
        userMicroservice.add('role:'+user+',gameId:'+self.gameId,function(msg,respond){
          console.log('\n Creating response channel for user : '+user+'\n')
          respond(null,{answer:'listening to broadcast'});
        })
        .listen({type:'redis',pin:'role:'+user+',gameId:'+self.gameId});

      })

      var pingCount = options.users.length;
      self.ping = require('seneca')()
      .use('redis-transport')
      .add('role:gameManager,action:ping,gameId:'+self.gameId,function(msg,respond){
        console.log('\n Game manager is receiving ping from : '+msg.user+'\n')
        if(pingCount>0){
          pingCount--;

        }
        if(pingCount==0){
          console.log('\n Game Manager is broadcasting now. \n');

          questionFetcherClient.ready(function(){

              questionFetcherClient.act('role:question,action:random',{topicId:'Sports',noOfQuestions:5},function(err,response){
                var questions = response.questions;
                console.log('\n Questions are : '+questions+'\n')
              self.broadcast.client({type:'redis',pin:'gameId:'+self.gameId+',action:broadcast'});
                self.broadcast.ready(function(){
                  self.broadcast.act('gameId:'+self.gameId+',action:broadcast',{question:questions[0].question},function(err,response){
                      console.log('\n Sent the first question \n');
                  })
                })
               })



          })

        }
        respond(null,{answer:'anshul'});
      })
      .listen({type:'redis',pin:'role:gameManager,action:ping,gameId:'+self.gameId});

    }
