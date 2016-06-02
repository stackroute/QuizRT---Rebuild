module.exports = function(){
  this.add('role:allTopics,action:retrive', function(msg, respond) {
    this.make$('topics_collection').native$(function (err, db) {
      if(err) return respond(err);
        var collection = db.collection('topics_collection');
        // collection.count({topicName:"Animals"},function(err,res){
          // var r = Math.floor(Math.random() * res);
          // console.log("number of recoreds"+res+"number of records will be skip -- "+r);
          collection.find({}).toArray(function(err, documents) {
            if(err) return respond(err);
            respond(null,documents);
          })
        // })
    });
  });
}
