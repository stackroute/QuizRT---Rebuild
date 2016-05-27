var seneca = require('seneca');

var questions = [
  {
    "text":"Who is the prime minister of India?",
    "options":["Pranab Mukherjee","Narendra Modi","Jawaharlal Nehru","Rahul Gandhi"],
    "correct": "Narendra Modi"
  },
  {
    "text":"Who resurrected Jon Snow?",
    "options":["Tyrion Lannister","Ser Davos","Sansa Stark","Red Woman"],
    "correct": "Red Woman"
  },
  {
    "text":"Who won the FIFA 2014?",
    "options":["Brazil","Germany","Spain","Netherlands"],
    "correct": "Germany"
  }
];
questionConsumer = seneca();
questionConsumer.use('mesh', {auto:true});
questionConsumer.use('entity');
questionConsumer.ready(function() {



   for(var ques of questions){

    questionConsumer.act('role:question,action:add',{data:ques},function(err,saved_ques){
        console.log(saved_ques);
    })
  }



    questionConsumer.act('role:question,action:all', function(err, users) {
    if(err) { return console.log('ERR: ' + err); }

  });
});
