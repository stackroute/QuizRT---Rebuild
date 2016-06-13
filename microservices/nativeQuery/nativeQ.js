var seneca = require('seneca')();
// var seneca_ent = require('seneca-entity');
    seneca.use('entity');

seneca.add('role:db,action:random',function(msg,respond){

  var aggregateQuery = [
    {
      $group: { _id: "$topicId", count: { $sum: 1 } }
    }
  ];

  this.make$('questionBank').native$(function (err, db) {
    if(err) return respond(err);
      var collection = db.collection('questionBank');
      collection.aggregate(aggregateQuery, function (err, list) {
          if (err) console.log(err);
          console.log("Found records:", list);
          respond(null,list);
      });
  });
})

  seneca
  .use('mongo-store',{
    name: "quizRT4",
    host: "127.0.0.1",
    port: 27017
  })
  .act('role:db,action:random',function(err,result){
    if(err) console.log(err);
    console.log("found records",result);
  })
