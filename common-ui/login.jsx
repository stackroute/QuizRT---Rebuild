import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';

<<<<<<< HEAD:common-ui/login.jsx
var Login = React.createClass({
  render: function() {
    return (
      <div className = "container-fluid">
      <div className="row">
          <div className="col-xs-12">


        <h1>quizRT</h1>
				<p>Login here to play the game</p>
    	  <TextField hintText = "Email Field"	floatingLabelText = "Email"	type = "text" /><br/>
        <TextField hintText = "Password Field" floatingLabelText = "Password" type = "password" /><br/><br/>
        <Checkbox label = "Remember Me" /><br/><br/>

        <RaisedButton label = "Login" primary = {true} /><br/>

        <p><a href="#" >Forgot Password</a></p>
				<p>OR</p>
        <RaisedButton label = "Login With Facebook" secondary = {true}/><br/>
        <RaisedButton label = "Login With Google" secondary = {true}/><br/>
    	</div>
   </div>
  </div>
=======

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
      <Checkbox label = "Remember Me" /><br/><br/>

      <RaisedButton label = "Login" primary = {true} style = {{width:'100%'}}/><br/>

      <p><a href="#" >Forgot Password</a></p>
      <p>OR</p>
      <RaisedButton label = "Login With Facebook" secondary = {true} style = {{width:'100%'}}/><br/>
      <RaisedButton label = "Login With Google" secondary = {true} style = {{width:'100%'}}/><br/>
      </div>
      </div>
      </div>
>>>>>>> new commit:common-ui/components/Login/login.jsx

    );
  }
});

module.exports = Login;
