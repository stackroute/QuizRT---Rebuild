var should = require('should');

var seneca = require('seneca');

var baseMicroservice,questionMicroservice,questionConsumer;

describe('Test Question Microservice', function() {
  var question ={
    "text":"Who is the prime minister of India?",
    "options":["Pranab Mukherjee","Narendra Modi","Jawaharlal Nehru","Rahul Gandhi"],
    "correct": "Narendra Modi"
  }
  it('Setup questionMicroservice', function(done) {
    questionMicroservice = seneca();
    questionMicroservice.use('entity');
    questionMicroservice.use('questionPlugin');
    questionMicroservice.ready(done);
  });



  it ('Add a new question',function(done){

    questionMicroservice.act('role:question,action:add',{data:question},function(err,msg){
      if(err){return done(err);}
      msg.should.have.property('text');
      msg.should.have.property('options');
      msg.should.have.property('correct');
      msg.correct.should.be.exactly('Narendra Modi');
      done();

    })
  })
});

describe('Setup Mesh', function() {
  it('Setup Base Microservice', function(done) {
    baseMicroservice = seneca();
    baseMicroservice.use('mesh', {base:true});
    baseMicroservice.ready(done);
  });

  it('Add QuestionMicroservice to Base', function(done) {
    questionMicroservice.use('mesh', {pin: 'role:question'});
    questionMicroservice.ready(done);
  });

  it('Setup questionConsumerMicroservice', function() {
    questionConsumer = seneca();
    questionConsumer.use('mesh');
    questionConsumer.act('role:question,action:all', function(err, msg) {
      if(err) { console.log('ERR: ' + JSON.stringify(err)); return done(err); }
      return done();
    });
  });
});
