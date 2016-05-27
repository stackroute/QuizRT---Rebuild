module.exports = function microserviceplugin(){

this.add({role: 'math', cmd: 'product'}, function (msg, respond) {
  var product = msg.left * msg.right;
  respond(null, {answer: product})
})
}
