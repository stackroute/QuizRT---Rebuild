var jsonServer = require('json-server');
var server = jsonServer.create();

server.use(jsonServer.defaults());

var router = jsonServer.router('./db.json');
server.use(router);

server.listen(3000,function(){
  console.log('JSON Server listening on 3000');
});
