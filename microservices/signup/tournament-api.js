var seneca = require('seneca')();
seneca.use('entity');

var tournamentsPlugin = function(options){

  var seneca = this;


  // To create a new tournament.
  seneca.add({area:"tournaments",action:"create"},function(msg,respond){
    var newTournament= this.make("tournaments");
    newTournament.name = msg.name;
    newTournament.desc = msg.desc;
    newTournament.creationDate = Date.now();
    newTournament.startDateTime = msg.startDateTime;
    newTournament.endDateTime = msg.endDateTime;
    newTournament.rules = msg.rules;
    newTournament.prizes = msg.prizes;
    newTournament.registeredUsers = msg.registeredUsers;
    newTournament.category = msg.category;
    newTournament.avatar = msg.avatar;
    newTournament.image = msg.image;
    newTournament.minLevel = msg.minLevel;
    newTournament.maxLevel = msg.maxLevel;
    newTournament.hashtags = msg.hashtags;
    newTournament.save$(function(err,newTournament){
      done(err,newTournament.data$(false));
    });
  });


  // To retrieve a tournament by id.
  seneca.add({area:"tournaments",action:"fetch" },function(msg,respond){
    var tournament = this.make("tournaments");
    tournament.load$(respond);
  })

  //
}
module.exports = tournamentsPlugin;



seneca.use(tournamentsPlugin);
seneca.use('mongo-store', {
  host:'127.0.0.1',
  name:"quizart",
  port:27017
})

seneca.ready(function(err){

  seneca.act('role:web',{use:{
    prefix: '/tournaments',
    pin: {area:'tournaments',action:'*'},
    map:{
    create: {POST:true},
    fetch:{GET:true}

    }
  }});
  var express = require('express');
  var app = express();
  app.use(require("body-parser").json());

  // This is how you integrate Seneca with Express
  app.use( seneca.export('web') );

  app.listen(3000);

});
