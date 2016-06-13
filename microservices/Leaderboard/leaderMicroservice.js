var seneca = require('seneca');

leaderMicroservice = seneca();

leaderMicroservice.use('mongo-store',{
  name:"quizart",
  host:"127.0.0.1",
  port:"27017"
})
leaderMicroservice.use('entity');
leaderMicroservice.use('./leaderboardPlugin');
leaderMicroservice.use('mesh', {auto:true, pin: 'role:board'});
