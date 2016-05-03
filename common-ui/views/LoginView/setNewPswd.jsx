import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';


var style = {

  width:'100%'
};



 export default class SetNewPswd extends React.Component{
  render() {

    return (
      <div className = "container-fluid">
      <div className="row">
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-lg-offset-4 col-md-offset-4 col-sm-offset-3">
         <h1>Set New Password</h1>
      <TextField hintText = "Enter new Password" floatingLabelText = "Pswd " style = {style}/><br/>
      <TextField hintText = "Re-Enter your password" floatingLabelText = "Pswd" style = {style}/><br/><br/><br/>
      <RaisedButton label = "Submit" primary = {true} style = {style} /><br/><br/>

    	</div>
      </div>
      </div>
    );
  }

};
