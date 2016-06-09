var seneca = require('seneca')();

seneca.use('mongo-store',{
  name: 'quizRT4',
  host: '127.0.0.1',
  port: 27017
})
	.use('entity')
	.use('./likesTopic')
	.use('mesh',{auto:true,pin:'role:topic,action:like'});
  //
  // var test = {
  //   id:"1Basketball Players",
  //   incre:false
  // }
  // seneca.act('role:topic,action:like',{data:test},console.log);
