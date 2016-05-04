import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

 export default class ForgotPswd extends React.Component{
  render() {
    return (
      <div className = "container-fluid">
      <div className="row">
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-lg-offset-4 col-md-offset-4 col-sm-offset-3">
         <h1>Please provide Information</h1>
      <TextField hintText = "+91-"	floatingLabelText = "Enter Mob no"	fullWidth = {true} type = "text"  />
      <RaisedButton label = "Send OTP" primary = {true} style = {{width : '100%'}}/><br/><br/>
      <p style = {para}>OR</p>
      <TextField hintText = "abc@example.com"	floatingLabelText = " Enter your Mail" fullWidth = {true} type = "text" />
      <RaisedButton label = "Verify Email" primary = {true} style = {{width :'100%'}}/><br/>
    	</div>
      </div>
      </div>
    );
  }

};
