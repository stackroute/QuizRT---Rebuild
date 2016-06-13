var seneca = require('seneca')();

  seneca
  .use('entity')
  .use('mongo-store',{
    name: "quizRT4",
    host: "127.0.0.1",
    port: 27017
  })
  .use('./myFavPlugin')
  // .act('role:myFav,action:retrive',{user:"dp@dp.com"},function(err,result){
  //   if(err) return console.error(err)
  //   console.log(result)
  //   console.log(">>>>>>>>>>"+result.like);
  // })
  .use('mesh', { auto:true, pin:'role:myFav,action:retrive' })
