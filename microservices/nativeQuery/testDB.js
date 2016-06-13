module.exports = function(){
  this.add('role:db,action:random',function(msg,respond){
    this.make$('users').native$(function (err, db) {
      if(err) return respond(err);
      var collection = db.collection('users');
      collection.find({},function(err,res){
        if(err) return err;
        respond(null,res);
      })
    });
  })
}
