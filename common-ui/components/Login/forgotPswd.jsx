import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';


var style = {

  width:'100%'
};

 var styles = {
   width:'100%'
 };

 var para = {
   textalign :'center'
 };

 export default class ForgotPswd extends React.Component{
  render() {

    return (
      <div className = "container-fluid">
      <div className="row">
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-lg-offset-4 col-md-offset-4 col-sm-offset-3">
         <h1>Please provide Information</h1>
      <TextField hintText = "+91-"	floatingLabelText = "Enter Mob no"	type = "text" style = {style} />
      <RaisedButton label = "Send OTP" primary = {true} style = {styles} /><br/><br/>
      <p style = {para}>OR</p>
      <TextField hintText = "abc@example.com"	floatingLabelText = " Enter your Mail"	type = "text" style = {style}/>
      <RaisedButton label = "Verify Email" primary = {true} style = {styles} /><br/>
    	</div>
      </div>
      </div>
    );
  }

};
