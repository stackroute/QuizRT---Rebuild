var express = require('express');
var app = express();
var bodyparser = require('body-parser');

var jwt = require('jsonwebtoken');
var config = require('./microservices/LoginAuthentication/config'); 
var cookie = require('react-cookie');
var seneca = require ('seneca')();

//Configuration

var port = process.env.PORT || 8080;
app.set('secret',config.secret);

//serving static files

app.use(express.static('common-ui'));

//use body-parser so we get info from POST and/or URL

app.use(bodyparser.urlencoded({
	extended:false
}));

app.use(bodyparser.json());

seneca.use('entity')
seneca.use('mesh',{auto:true});

app.post('/signup',function(req,res){
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

app.post('/authenticate',function(req,res){
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

// route middleware to verify a token
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

app.post('/RecentPage',function(req,res){
	res.json({
		success : true
	});
});

app.post('/Logout',function(req,res){
	res.json({
		success : true
	});
});

app.listen(port);