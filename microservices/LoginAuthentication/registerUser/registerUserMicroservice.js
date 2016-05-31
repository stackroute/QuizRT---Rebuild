var seneca = require('seneca')();


seneca.use('entity')
	.use('mongo-store',{
	  name: 'quizart',
	  host: '127.0.0.1',
	  port: 27017 
	})
	.use('./registerUser')
	.use('mesh',{auto:true,pin:'role:user'});