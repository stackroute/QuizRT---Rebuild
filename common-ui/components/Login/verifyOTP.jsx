import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


 export default class VerifyOTP extends React.Component{
  render() {

    return (
      <div className = "container-fluid">
      <div className="row">
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-lg-offset-4 col-md-offset-4 col-sm-offset-3">
         <h1>Verify your OTP</h1>
      <TextField hintText = "OTP" floatingLabelText = "Enter your OTP" fullWidth = {true} /><br/>
       <p>Resend OTP</p>
      <RaisedButton label = "VerifyOTP" primary = {true} style = {{width : '100%'}}/><br/><br/>

    	</div>
      </div>
      </div>
    );
  }

};
