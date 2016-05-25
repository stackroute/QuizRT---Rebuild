var seneca = require('seneca')()
var more_name_hex = {
  cyan:    '00FFFF',
  fuchsia: 'FF00FF'
}
seneca.use( function color() {

  var map_name_hex = {
    black: '000000',
    red:   'FF0000',
    green: '00FF00',
    blue:  '0000FF',
    white: 'FFFFFF'
  }

  this
    .add('role:color,cmd:convert', function (msg, respond) {
      var out = { hex: map_name_hex[msg.name]}
      respond( null, out )
    })
})
seneca.add('role:color,cmd:convert',function(msg,res){
  this.prior('role:color,cmd:convert',function(err,result){
    if(!result.hex){
      result.hex="hhhhhh";
      result.info="ldfk"
    }
    res(null,result)
  })
})


// prints { hex: 'FF0000' }, from color plugin
seneca.act('role:color,cmd:convert,name:red', console.log)
// prints { hex: 'FFFF00' }, from override
seneca.act('role:color,cmd:convert,name:cyan', console.log)

// prints { hex: '00FFFF' }, from more specific custom pattern
seneca.act('role:color,cmd:convert,name:yellow', console.log)
