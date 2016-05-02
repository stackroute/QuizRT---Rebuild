import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

var VarifyOTP = React.createClass({
getInitialState:function(){
  return {open:false}
},
handleOpen :function(){
  this.setState({open: true});
},

handleClose: function(){
  this.setState({open: false});
},
  render:function(){
    const actions = [
    <FlatButton
           label="Cancel"
           secondary={true}
           onTouchTap={this.handleClose}
         />    ];
    return (
      <div>
        <RaisedButton label="Varify OTP" onTouchTap={this.handleOpen} />
        <Dialog
          title="Please Enter the OTP"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField hintText="Hint Text" floatingLabelText="Enter OTP" type="text" /><br/>
          <RaisedButton label="Enter The OTP" primary={true}  />
        </Dialog>
      </div>
    );
  }
  });
 module.exports = VarifyOTP;
