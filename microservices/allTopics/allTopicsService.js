var seneca = require('seneca')();

  seneca
  .use('entity')
  .use('mongo-store',{
    name: process.env.MONGO_DB_NAME,
    host: process.env.MONGO_HOST,
    port: process.env.PORT
  })
  .use('./allTopics')
  // .act('role:allTopics,action:retrive',function(err,result){
  //   if(err) return console.error(err)
  //   console.log(result)
  // })
  .use('mesh', { auto:true, pin:'role:allTopics' })
