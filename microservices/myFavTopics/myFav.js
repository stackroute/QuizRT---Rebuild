module.exports = function(){
  this.add('role:myFav,action:retrive', function(msg, respond) {
    this.make$('userTopic').native$(function (err, db) {
      if(err) return respond(err);
        var collection = db.collection('userTopic');
        // collection.count({topicName:"Animals"},function(err,res){
        //   var r = Math.floor(Math.random() * res);
          // console.log("number of recoreds"+res+"number of records will be skip -- "+r);
          collection.find({}).limit(4).toArray(function(err, documents) {
            if(err) return respond(err);
            respond(null,documents);
          })
        // })
    });
  });
}
