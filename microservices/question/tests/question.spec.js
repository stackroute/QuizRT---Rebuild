var should = require ('should');
var seneca = require ('seneca')();
seneca.use('../service/question');
seneca.use('entity');
seneca.use('mongo-store', {
  name: 'quizart',
  host: '127.0.0.1',
  port: 27017
});

describe('Test cases question',function(){

  //change the question to avoid redundancy.
  var question = {
          "text":"Who resurrected Jon Snow?",
          "options":["Ser Davos","Danaerys","Tyrion","Red Woman"],
          "correct": "Red Woman"
  }
  it('Add a new question',function(done){
    seneca.act({role:'question',action:'add'},{data:question},function(err,saved_ques){
      if(err) done(err);

      done();

    })
  })
  it('Fetch all questions',function(done){
    seneca.act({role:'question',action:'all'},function(err,response){

            if(err) done(err);
            console.log(response);
            done();

        })

    })
  })
