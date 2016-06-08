module.exports = function(){
  this.add('role:question,action:all', function(msg, respond) {
    this.make$('questionBank').native$(function (err, db) {
      if(err) return respond(err);
        var collection = db.collection('questionBank');
        collection.count({topicId:msg.topicId},function(err,res){
          var r = Math.floor(Math.random() * res);
          console.log("number of recoreds"+res+"number of records will be skip -- "+r);
          collection.find({'topicId':msg.topicId}).limit(3).skip(r).toArray(function(err, documents) {
            if(err) return respond(err);
            respond(null,documents);
          })
        })
    });
  });
}
