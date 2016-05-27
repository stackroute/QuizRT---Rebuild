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
app.get('/result',function(req,res){
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
 app.use('/profile', require('./json-server/api/profile/profile.route'));
