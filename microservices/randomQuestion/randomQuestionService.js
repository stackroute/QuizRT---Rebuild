var seneca = require('seneca');
var randomQuestionService = seneca();
randomQuestionService.use('entity');

// console.log('MONGO_DB_NAME: ' + process.env.MONGO_DB_NAME);
// console.log('MONGO_HOST: ' + process.env.MONGO_HOST);
// console.log('MONGO_PORT: ' + process.env.MONGO_PORT);

randomQuestionService.use('mongo-store',{
  // name:process.env.MONGO_DB_NAME,
  // host:process.env.MONGO_HOST,
  // port:process.env.MONGO_PORT
  name:'quizRT4',
  host:'127.0.0.1',
  port:27017
});

randomQuestionService.use('./randomQuestionPlugin');
randomQuestionService.use('mesh',{auto:true,pin:'role:question,action:random'})
