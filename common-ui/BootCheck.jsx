import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

var style={
  'margin-left':10,
  width:"100%"

}
var BootCheck = React.createClass({

  render: function(){
    var btns = []
    for(let i=0; i<6;i++) {
      btns.push(
        <div className="col-md-2 col-sm-4 col-xs-12">
          <RaisedButton label="Raised Button" primary={true} style={style} />
        </div>
      );
    }

    return(
      <div className="container-fluid">
        {btns}
      </div>
    );
  }
});
module.exports = BootCheck;
