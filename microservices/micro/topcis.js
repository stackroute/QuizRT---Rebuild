var seneca = require('seneca')()
            .use('entity')
            .use('mongo-store',{
              name:'person',
              host:'127.0.0.1',
              port:27017
            })

var person_fruit = seneca.make$('zen','fruit','mango');
person_fruit.name="mango"
person_fruit.price=34
person_fruit.save$(function(err,fruit){
  if(err) console.log(err);
  console.log(fruit);
})
var person_fruit = seneca.make$('zensg','fruit','papaya');
person_fruit.name="mango"
person_fruit.price=20
person_fruit.save$(function(err,fruit){
  if(err) console.log(err);
  console.log(fruit);
})
person_fruit.list$({"price":{$lt:25}},function(err,res){
  res.forEach(function(e){
    console.log('lkfds'+e);
  })
})
