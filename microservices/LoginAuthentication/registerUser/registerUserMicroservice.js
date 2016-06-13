var seneca = require('seneca')();
// var data = {
// 	name:'anshul',
// 	password:'1234'
// }

seneca.use('entity')
	.use('mongo-store',{
	  name: 'quizRT4',
	  host: '127.0.0.1',
	  port: 27017
	})
	.use('./registerUser')
	.use('mesh',{auto:true,pin:'role:user'});
	// .act('role:user,action:add',{data:data},function(err,saveddata){
	// 	console.log('-----------------from service'+saveddata+'----------------------------');
	// })
