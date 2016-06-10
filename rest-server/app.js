
var seneca = require( 'seneca' )()
      .use( '/../express-web/api' )
      .client( { type:'tcp', pin:'role:math' } )
      .use('../microservices/mathPlugin')
      .use('../microservices/Leaderboard/leaderboard-api')
      .use('entity')
      .use('mongo-store', {
        name: 'quizart',
        host: '127.0.0.1',
        port: 27017
      });

var express = require('express');
var app = express();
      app.use( require('body-parser').json() );
      app.use( seneca.export( 'web' ) );
      app.listen(3000,function(){
        console.log('running');
      });
      // app.get('/',function(req,res){
      //   res.send('hello world !');
      // });
      //app.set('views',__dirname + '/.././views');
//app.set('view engine', 'jsx');
//app.engine('jsx', require('express-react-views').createEngine());
app.get('/api/result',function(req,res){
  // res.send('<H1>HELLO</H1>')
  // seneca.act('role:math,cmd:sum',{left:10,right:20},function(err,result){
  //   res.send(result)
  //   console.log(result);
  // });
    console.log("get request");
  seneca.act('role:board,action:get',function(err,loaded_user){
    res.send(loaded_user)
  });
  console.log('call done');
})
app.use(express.static(__dirname+'/../common-ui'));
 app.use('/api/profile', require('./json-server/api/profile/profile.route'));


//Config db url
// To mongo://localhost:27017/quizART-dev when in dev
// To mongo://localhost:27017/quizART-test when in test
// To mongo://localhost:27017/quizART-production when in production

var env = process.env.NODE_ENV || 'dev'
if(env==='dev'){
  // To mongo://localhost:27017/quizART-dev
}
else if(env === 'test'){
//  To mongo://localhost:27017/quizART-test
  //Clear database.
}
else if(env === 'production'){
  //To mongo://localhost:27017/quizART-production
}

app.use(require('body-parser').json());
var userMap ={};
var lastUserId = -1;
app.get('/api/v1/user',function(req,res){
  var users = [];
  for(var key in userMap)
  {
    users.push(userMap[key]);
  }
  return  res.status(200).json(users);
});

app.get('/api/v1/user/:id',function(erq,res){
    if(!userMap[req.params.id]){
      req.status(404).send();
    }
    return res.status(200).json(userMap[req.params.id]);
})
app.post('/api/v1/user/:id',function(req,res){
  var newId = ++lastUserId;
  req.body._id= newId;
  return userMap[newId]
})
exports = module.exports = app;
