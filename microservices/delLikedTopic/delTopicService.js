var seneca = require('seneca')();

seneca.use('mongo-store',{
  name: 'quizRT4',
  host: '127.0.0.1',
  port: 27017
})
	.use('entity')
  .use('./delTopic')
	.use('mesh',{auto:true,pin:'role:topic'});

  // var test = {
  //   id:"Basketball-Players",
  //   incre:false
  // }
  // seneca.act('role:topic,action:delete',{data:test},console.log);
