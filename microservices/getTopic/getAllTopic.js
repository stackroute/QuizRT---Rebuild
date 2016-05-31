module.exports = function(){
  this.add('role:topic,action:allTopic',function(msg,respond){
    this.make$('topics_collection').native$(function (err, db) {
      if(err) return respond(err);
      var collection = db.collection('topics_collection');
      collection.distinct("topicName",{topicName:{$exists:true}},function(err,documents){
        respond(null,documents)
      })
  })
})
