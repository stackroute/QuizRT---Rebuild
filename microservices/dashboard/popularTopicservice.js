var seneca = require('seneca')();

  seneca
  .use('entity')
  .use('mongo-store',{
    name: "quizRT4",
    host: "127.0.0.1",
    port: 27017
  })
  .use('./randomTopic')
  .use('mesh', { auto:true, pin:'role:popularTopics' })
