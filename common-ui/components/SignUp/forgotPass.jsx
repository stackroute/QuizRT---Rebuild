import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

var ForgotPass = React.createClass({
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
        <RaisedButton label="Forgot Password" onTouchTap={this.handleOpen} />
        <Dialog
          title="Give us right information"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}  >
          <TextField hintText="99.." floatingLabelText="Mobile Number" type="text" />
          <RaisedButton label="Send OTP" primary={true}  /><br/>
          <p>OR</p>
          <TextField hintText="abc@fmail.com" floatingLabelText="Email" type="email" />
          <RaisedButton label="Send Varification Mail" primary={true}  />
        </Dialog>
      </div>
    );
  }
  });
 module.exports = ForgotPass;
