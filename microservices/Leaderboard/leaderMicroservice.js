var seneca = require('seneca');

leaderMicroservice = seneca();

.use('mongo-store',{
  name: process.env.MONGO_DB_NAME || "quizRT4",
  host: process.env.MONGO_HOST || "127.0.0.1",
  port: process.env.PORT || 27017
})
leaderMicroservice.use('entity');
leaderMicroservice.use('./leaderboardPlugin');
leaderMicroservice.use('mesh', {auto:true, pin: 'role:board'});
