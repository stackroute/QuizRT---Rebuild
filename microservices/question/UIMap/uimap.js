var seneca = require('seneca')();

seneca.use('../service/question');

seneca.use("mongo-store", {
  name: "quizart",
  host: "127.0.0.1",
  port: "27017"
});

seneca.ready(function(err){

  seneca.act('role:web',{
    use:{
      prefix:'/questions',
      pin: {role:'question', action:'*'},
      map:{
        all:{GET:true},
        add:{POST:true}
      }

    }
  });
})
