var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);
var bodyparser = require('body-parser');

var jwt = require('jsonwebtoken');
var config = require('./microservices/LoginAuthentication/config');
var cookie = require('react-cookie');
var cors = require('cors');
var googlecredentials = require('./common-ui/views/Login/googlecredentials');
var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;

var oauth2Client = new OAuth2(googlecredentials.CLIENT_ID, googlecredentials.CLIENT_SECRET, googlecredentials.REDIRECT_URL);
var questions;
var request = require('request');
var seneca = require('seneca')()
            .use('entity')
            .use('mesh',{auto:true});
app.use(cors());

server.listen(8080,function(){
  console.log('Server is running at the port 8080');
})
app.use(express.static(__dirname+'/common-ui'));

app.set('secret',config.secret);

//use body-parser so we get info from POST and/or URL

app.use(bodyparser.urlencoded({
  extended:false
}));

app.use(bodyparser.json());

 app.post('/api/check',function(req,res){
  console.log('-------------- abc from express floow---------------');
  console.log(req.body.incre+'   0----------------------');
  console.log(req.body.id+'    ---------------------');
  var test = {
    id:req.body.id,
    incre:req.body.incre
  }
  // seneca.act('role:topic,action:like',{data:test},function(err,result){
  //   if(err) console.log(err+'------------------------------------------------');
  //   console.log(result.topicFollowers+"  == ye hai result");
  //   res.send(result)
  // })
});
//---------------------------------------
var middleWareCount =0;

io.on('connection',function(socket){
  middleWareCount++;
  console.log('\n =====Middleware count is: '+middleWareCount+'\n');
  var playerMiddleWareService =  require('seneca')();
  socket.on('playGame',function(msg){
     playerMiddleWareService.use('redis-transport');
    // console.log('\n Setting up middleware for user \n');
    //console.log('\n======Initializing plugin for  : '+(middleWareCount)+'\n');
    playerMiddleWareService.use('./microservices/gameplay1/gameplayMiddlewarePlugin', {
      username:msg.username,
      tournamentId:msg.tournamentId,
      socket:socket
    });
  });

  socket.on('disconnect',function(){
    // console.log('\n======Closing service=====\n');
    playerMiddleWareService.close();
  })


})
//----------------------------
app.post('/api/signup',function(req,res){
  console.log("inside /api/signup");
    var data = {
      name : req.body.name,
      password : req.body.password
    }
      seneca.act('role:user,action:get',{data:data.name},function(err,respond){
        if(err) { return res.status(500).json(err); }
        if(respond == null){
          seneca.act('role:user,action:add', {data:data}, function(err,saved_user){
            console.log("saved user",saved_user);
            if(err) { return res.status(500).json(err); }
            res.json(saved_user);
          })
        }
        else {
          res.json({
            message : 'User Already Exists',
            success : false
          })
        }
      })
    });

//     connectCounter++;
//     console.log("number of connections -------------"+connectCounter+"-----------------------------");
//     count=0;
//     seconds= 10;
//     socket.on('send first question',function(){
//       socket.emit('new question',questions[0]);
//       // socket.emit('timer',seconds);
//         // timer=  setInterval(function(){
//         //    socket.emit('timer',seconds);
//         //    seconds--;
//         //    if(seconds>=10){
//         //      seconds = 10;
//         //      clearInterval(timer);
//         //    }
//         //  },1000);
//     var questionSender =setInterval(function(){
//       console.log('count is ' + count++);
//       if(count>=questions.length)
//       {
//           clearInterval(questionSender);
//           clearInterval(timer);
//           socket.emit('end timer',"thanks");
//           socket.emit('end quiz',"thank you");
//       }
//       else{
//       socket.emit('new question',questions[count]);
//     }
//   },10000);
//   socket.on('disconnect', function() {
//      connectCounter--;
//
//      console.log("number of user disconnected 1");
//      console.log("now total connected-------"+connectCounter);
//    });
//
//   //  socket.emit('new question',questions[count]);
//    socket.on('my answer',function(msg){
//     console.log('user answered '+ msg);
//     console.log(questions[count].correct.indexOf(msg));
//     if(questions[count].correct.indexOf(msg)>-1)
//       {
//         console.log('Correct answer is '+ questions[count].correct);
//
//       }
//     else{
//         socket.emit('incorrect','You answered incorrectly');
//     }
//   })
// })
//});


//Route To Authenticate A User

app.post('/api/authenticate',function(req,res){
  var data = {
    name : req.body.name,
    password : req.body.password
  }
  seneca.act('role:user,action:get',{data:data.name},function(err,respond){
    if(err) { return res.status(500).json(err); }
    if(respond == null){
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    }
    else {
      var tokendata = {
        user:{respond},
        name : respond.name,
        password : req.body.password,
        comppassword : respond.password,
        secret : app.get('secret')
      }
      seneca.act('role:user,action:generatetoken',{data:tokendata},function(err,tokenresponse){
        res.json(tokenresponse);
      })

    }
  })
});

app.get('/topics/mostPopular',function(req,res) {
  console.log('form express-mostpopular');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  seneca.act('role:popularTopics,action:retrive',function(err,result){
    if (err) return console.error(err)
  console.log('-----------------'+result+'------------------------')
  res.send(result)
  })
  console.log('send');
});

app.get('/topics',function(req,res) {
  console.log('form express-alltopics');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  seneca.act('role:allTopics,action:retrive',function(err,result){
    if (err) return console.error(err)
  console.log('-----------------'+result+'------------------------')
  res.send(result)
  })
  console.log('send');
});

app.get('/tournamentSection',function(req,res) {
  console.log('form express-tournamentSection');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  seneca.act('role:randTournaments,action:retrive',function(err,result){
    if (err) return console.error(err)
  console.log('-----------------'+result+'------------------------')
  res.send(result)
  })
  console.log('send');
});

app.get('/tournaments',function(req,res) {
  console.log('form express-alltopics');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  seneca.act('role:allTournaments,action:retrive',function(err,result){
    if (err) return console.error(err)
  console.log('-----------------'+result+'------------------------')
  res.send(result)
  })
  console.log('send');
});

app.post('/api/authenticate/google',function(req,res){

  // generate a url that asks permissions for Google+ and Google Calendar scopes
  var scopes = [
    googlecredentials.SCOPE[0],
    googlecredentials.SCOPE[1]
  ];

  var url = oauth2Client.generateAuthUrl({
    access_type: 'online', // 'online' (default) or 'offline' (gets refresh_token)
    scope: scopes // If you only need one scope you can pass it as string
  });
  res.send({ redirect: url });
})

app.get('/api/auth/success/google',function(req,res){
  var code = req.query.code;
  oauth2Client.getToken(code, function(err, tokens) {
    // Now tokens contains an access_token and an optional refresh_token. Save them.
    if(!err) {
      oauth2Client.setCredentials(tokens);
    }

    var access_token = tokens['access_token'];
    var user_profile = 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token='+access_token;
      request({
        url: user_profile,
        json: true
      }, function (error, response, body) {
        if (!error) {
          var tokendata = {
            user : body.email,
            secret : app.get('secret')
          }
          seneca.act('role:user,action:generateGoogleToken',{data:tokendata},function(err,tokenresponse){
            var data = {
              name:body.email,
            }
            seneca.act('role:user,action:get',{data:data.name},function(err,respond){
              if(err) { return res.status(500).json(err); }
                if(respond == null){
                  seneca.act('role:user,action:add', {data:data}, function(err,saved_user){
                    if(err) { return res.status(500).json(err); }
                  })
                }
            })
            res.cookie('username',data.name);
            res.cookie('auth_cookie',tokenresponse.token).redirect(301,'http://localhost:8081/#/dashboard');
          })
      } else {
          console.log(error);
      }
    })
  });

})

// route middleware to verify a tokens
app.use(function(req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  var secret = app.get('secret');

  var data = {
    token : token,
    secret : secret
  }

  seneca.act('role:user,action:verifytoken',{data:data},function(err,respond){
    if(respond['success'] == true){
      next();
    }
    else {

      return res.status(404).send({
        success: false,
        message: 'No token provided.'

      });
    }
  })
});

app.post('/api/RecentPage',function(req,res){
	res.json({
		success : true
	});
});

app.post('/api/Logout',function(req,res){
	res.json({
		success : true
	});
});
