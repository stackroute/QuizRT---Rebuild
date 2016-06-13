module.exports = function(){
  this.add('role:recentPage,action:retrive', function(msg, respond) {
    this.make$('recentActivity').native$(function (err, db) {
      if(err) return respond(err);
        var collection = db.collection('recentActivity');
          collection.find({}).toArray(function(err, documents) {
            if(err) return respond(err);
            respond(null,documents);
          })
        })
    });
  });
}
