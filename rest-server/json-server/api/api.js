var superagent = require('superagent');
var urls = require('../config.js');

var getAllTopics = function(callback){
  superagent.get(urls.topicsUrl,function(err,response){
    if(err)
    {
      console.log(err);
    }
    else{
      callback(response.body);
    }
  })
}

var getAllCategories = function(callback){
  superagent.get(urls.categoriesUrl,function(err,response){
    if(err)
    {
      console.log(err);
    }
    else{

      callback(response.body)
    }
  })
}

var getAllTournaments = function(callback){
  superagent.get(urls.tournamentUrl,function(err,response){
    if(err){
      throw err
    }
    else {
      {
        callback(response.body)
      }
    }
  })
}


module.exports ={
  getAllTopics, getAllCategories,getAllTournaments
}
