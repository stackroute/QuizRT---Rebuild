module.exports = function math(){
  this.add('role:math,cmd:sum',function(msg,res){
    var sum = msg.left+msg.right;
    res(null, {sum: sum})
  })
}
