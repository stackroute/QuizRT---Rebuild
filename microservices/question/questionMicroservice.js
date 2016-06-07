var seneca = require('seneca');

questionMicroservice = seneca();

questionMicroservice.use('mongo-store',{
  name:"quizart",
  host:"127.0.0.1",
  port:"27017"
})
questionMicroservice.use('entity');
questionMicroservice.use('./questionPlugin');
questionMicroservice.use('mesh', {auto:true, pin: 'role:question'});
