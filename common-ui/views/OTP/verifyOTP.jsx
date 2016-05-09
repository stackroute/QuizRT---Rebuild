import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';


var style = {

  width:'100%'
};
  var para = {
   "text-align" :'center'
 };


 export default class VerifyOTP extends React.Component{
  render() {

    return (
      <div className = "container-fluid">
      <div className="row">
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-lg-offset-4 col-md-offset-4 col-sm-offset-3">
         <h1 style = {para}>Verify your OTP</h1>
      <TextField hintText = "OTP" floatingLabelText = "Enter your OTP" style = {style}/><br/>
       <p style = {para}>Resend OTP</p>
      <RaisedButton label = "VerifyOTP" primary = {true} style = {style} /><br/><br/>

    	</div>
      </div>
      </div>
    );
  }

};
