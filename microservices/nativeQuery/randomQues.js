var should = require('should');
var seneca = require('seneca')()
              .use('entity')
              .use('mongo-store',{
                name: "quizRT4",
                host: "127.0.0.1",
                port: 27017
              })


describe('Mongo Native test cases',function(){
  it('Mongo native test cases',function(done){
  seneca.add('role:db,action:random',function(msg,respond){
    this.make$('questionBank').native$(function (err, db) {
      if(err) return respond(err);
        var collection = db.collection('questionBank');
        collection.count({topicId:"T1"},function(err,res){
          var r = Math.floor(Math.random() * res);
          console.log("number of recoreds"+res+"number of records will be skip -- "+r);
          collection.find({}).limit(1).skip(r).toArray(function(err, documents) {
            if(err) return respond(err);
            respond(null,documents);
          })
        })
    });

  })
    seneca.act('role:db,action:random',function(err,result){
      if(err) return done(err);
      console.log("found records\n----------"+JSON.stringify(result)+"\n----------");
      result.length.should.be.exactly(1);
      done();
    })
  })
})
