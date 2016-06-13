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

var serverId = Math.ceil(Math.random()*213);
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

app.get('/topics/myfav',function(req,res) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  seneca.act('role:myFav,action:retrive',function(err,result){
    if (err) return console.error(err)
  console.log('------------yahi to hai result-----'+result+'------------------------')
  res.send(result)
  })
  console.log('send');
});
 app.post('/api/check',function(req,res){
  console.log('-------------- abc from express floow---------------');
  console.log(req.body.incre+'   0----------------------');
  console.log(req.body.id+'    ---------------------');
  var test = {
    id:req.body.id,
    incre:req.body.incre
  }
  var username = req.body.uName;

  seneca.act('role:topic,action:like',{data:test},function(err,result){
    if(err) console.log(err+'------------------------------------------------');
    // var newObj = {
    //   topicId:username,
    //   topic:{result}
    // }
    // console.log(newObj.id);

    if(req.body.incre==true){
      seneca.act('role:topic,action:create',{data:result},function(err,result2){
        if(err) console.log(err+' ========================');

        res.send(result)
      })
    } else {
      seneca.act('role:topic,action:delete',{id:req.body.id},function(err,result2){
        if(err) console.log(err+' ========================');

        res.send(result)
      })
    }
      //  res.send(result);
  })
});
//---------------------------------------
var middleWareCount =0;



io.on('connection',function(socket){
  middleWareCount++;
  console.log('\n =====Middleware count is: '+middleWareCount+'\n');
  var playerMiddleWareService =  require('seneca')()
  socket.on('playGame',function(msg){

     playerMiddleWareService.use('redis-transport');
    // console.log('\n Setting up middleware for user \n');
    console.log('\n======Initializing plugin for  : '+(msg.username)+'\n');
    playerMiddleWareService.use('./microservices/gameplay/gameplayMiddlewarePlugin', {
      username:msg.username,
      tournamentId:msg.tournamentId,
      socket:socket
    });
  });

  socket.on('disconnect',function(){
    playerMiddleWareService.close();

  })

  socket.emit('serverId',serverId);

  socket.on('myAnswer',function(socketObj){
    console.log('\n==========Answer received by server is: '+socketObj.answer+'\n');
     playerMiddleWareService.act('role:user,action:answer',{answer:socketObj.answer},function(err,response){

     })
  });


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


app.post('/api/authenticate/facebook',function(req,res){
  var app_id = facebookcredentials.CLIENT_ID;
  var url ='https://www.facebook.com/dialog/oauth?'+
    'client_id='+app_id+'&redirect_uri=http://localhost:8080/api/authenticate/facebook/success'+
    '&scope=email';
  res.send({ redirect: url });
})

app.get('/api/authenticate/facebook/success',function(req,res){
  var code = req.query.code;
  var app_id = facebookcredentials.CLIENT_ID;
  var app_secret = facebookcredentials.CLIENT_SECRET;
  var token_url ='https://graph.facebook.com/v2.6/oauth/access_token?'+
                  'client_id='+app_id+
                 '&redirect_uri=http://localhost:8080/api/authenticate/facebook/success'+
                 '&client_secret='+app_secret+
                 '&code='+code;
  request(token_url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var myBody = JSON.parse(body);
      var access_token = myBody['access_token'];
      var user_profile = 'https://graph.facebook.com/me?fields=name,email&access_token='+access_token;
      request(user_profile,function(error,response,body){
        if(!error && response.statusCode == 200){
          var userinfo = JSON.parse(body);
          var email = userinfo['email'];
           var tokendata = {
            user : email,
            secret : app.get('secret')
          }
          seneca.act('role:user,action:generateGoogleToken',{data:tokendata},function(err,tokenresponse){
            var data = {
              name:email
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
        }
      })
     }
  })
})
