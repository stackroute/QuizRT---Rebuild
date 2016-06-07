var seneca = require('seneca')();

seneca.use('mongo-store',{
  name: 'quizRT4',
  host: '127.0.0.1',
  port: 27017
})
	.use('entity')
	.use('verifyToken')
	.use('mesh',{auto:true,pin:'role:user'});
