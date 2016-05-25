var express = require('express');
var app = express();
var seneca = require( 'seneca' )();

app.listen(3000,function(){
  console.log('Server is running at the port 3000');
})
app.use(require('body-parser').json())
app.use(seneca.export('web'));
app.use(express.static(__dirname+'/../common-ui'));


      seneca.use( '../microservices/test' )
      .client( { type:'tcp', pin:'role:math' } )
