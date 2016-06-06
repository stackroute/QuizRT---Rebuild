var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
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

server.listen(3000,function(){
  console.log('Server is running at the port 3000');
})
app.use(express.static(__dirname+'/common-ui'));

app.set('secret',config.secret);

//use body-parser so we get info from POST and/or URL

app.use(bodyparser.urlencoded({
  extended:false
}));

app.use(bodyparser.json());

seneca.act('role:question,action:all',function(err,result){
  questions = result;
}).ready(function(){
  var count =0;
  io.on('connection',function(socket){
   socket.emit('new question',questions[0]);
   socket.on('give new question',function(){
     if(count==questions.length){
       socket.emit('end quiz',"The quiz has ended. Thank you for playing");
     }
     else{
     socket.emit('new question',questions[count]);
     count++;
   }
 })
})
})

app.post('/api/signup',function(req,res){
    var data = {
      name : req.body.name,
      password : req.body.password
    }
      seneca.act('role:user,action:get',{data:data.name},function(err,respond){
        if(err) { return res.status(500).json(err); }
        if(respond == null){
          seneca.act('role:user,action:add', {data:data}, function(err,saved_user){
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
      });
      
})

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
})

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
        message: 'Yolo.' 
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
