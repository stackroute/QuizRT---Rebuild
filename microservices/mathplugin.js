module.exports = function math(){
  this.add('role:math,cmd:sum',function(msg,res){
    var sum = parseInt(msg.left)+parseInt(msg.right);
    res(null, {sum: sum})
  })
}
