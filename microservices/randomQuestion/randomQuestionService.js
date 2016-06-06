var seneca = require('seneca');
var randomQuestionService = seneca();
randomQuestionService.use('entity');
randomQuestionService.use('mongo-store',{
  name:"quizRT4",
  host:"127.0.0.1",
  port:"27017"
})
randomQuestionService.use('./randomQuestionPlugin');
randomQuestionService.use('mesh',{auto:true,pin:'role:question,action:random'})
