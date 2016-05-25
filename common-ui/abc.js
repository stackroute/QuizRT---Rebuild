var express = require('express');
var app = express();

app.listen(3000,function(){
  console.log('Server is running at the port 3000');
})
app.use(express.static(__dirname+'/common-ui'));

app.get('/',function(req,res){
  res.sendFile(__dirname+'/common-ui/index.html');
})
