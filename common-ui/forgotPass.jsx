import React from 'react';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


var ForgotPass = React.createClass({
  getInitialState :function(){
  return{open: false}
},

handleOpen : function() {
  this.setState({open: true})
},

handleClose : function() {
  this.setState({open: false})
},
  render: function() {
    const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={this.handleClose}
    />,

  ];
    return (
			<div>
      <RaisedButton label="Forgot Password" onTouchTap={this.handleOpen} />
        <Dialog
          title="Provide Information"
          actions={actions}
          modal={true}
          open={this.state.open}>

          <TextField hintText = "Enter mobile no"	floatingLabelText = "Enter Mob no"	type = "text" />
          <RaisedButton label = "Send OTP" primary = {true}  /><br/>
          <TextField hintText = "Enter email id"	floatingLabelText = "Mail"	type = "text" />
          <RaisedButton label = "Verify Email" primary = {true}  /><br/>
        </Dialog>

    	</div>
    );
  }
});

module.exports = ForgotPass;
