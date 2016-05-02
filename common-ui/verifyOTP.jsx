var React = require('react');
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

var VerifyOTP = React.createClass({
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
           primary={true}
           onTouchTap={this.handleClose}
         />    ];
    return (
      <div>
        <RaisedButton label="Varify OTP" onTouchTap={this.handleOpen} />
        <Dialog
          title="Please Enter the OTP"
          actions={actions}
          modal={true}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField hintText="OTP" floatingLabelText="Enter OTP" type="text" /><br/>
          <RaisedButton label="Enter The OTP" primary={true}  />
        </Dialog>
      </div>
    );
  }
  });
 module.exports = VerifyOTP;
