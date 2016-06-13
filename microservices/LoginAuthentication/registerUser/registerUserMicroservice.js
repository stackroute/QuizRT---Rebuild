var seneca = require('seneca')();
// var data = {
// 	name:'anshul',
// 	password:'1234'
// }

seneca.use('entity')
	.use('mongo-store',{
	  name: process.env.MONGO_DB_NAME,
	  host: process.env.MONGO_HOST,
	  port: process.env.MONGO_PORT
	})
	.use('./registerUser')
	.use('mesh',{auto:true,pin:'role:user'});
	// .act('role:user,action:add',{data:data},function(err,saveddata){
	// 	console.log('-----------------from service'+saveddata+'----------------------------');
	// })
