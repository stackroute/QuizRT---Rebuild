import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';


export default class LoginForm extends React.Component{
  render() {
    return (
      <div className = "container-fluid">
      <div className="row">
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-lg-offset-4 col-md-offset-4 col-sm-offset-3">
          <h1>quizRT</h1>
      <p>Login here to play the game</p>
      <form>
      <TextField hintText = "Email Field"	floatingLabelText = "Email"	fullWidth = {true} type = "text" /><br/>
      <TextField hintText = "Password Field" floatingLabelText = "Password" fullWidth = {true} type = "password" /><br/><br/>
      </form>


      <RaisedButton label = "Login" primary = {true} style = {{width:'100%'}}/><br/>

      <p>OR</p>
      <RaisedButton label = "Login With Facebook" secondary = {true} style = {{width:'100%'}}/><br/>
      <RaisedButton label = "Login With Google" secondary = {true} style = {{width:'100%'}}/><br/>
      </div>
      </div>
      </div>

    );
  }
};
