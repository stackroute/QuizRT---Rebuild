import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import Dialog from 'material-ui/Dialog';



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

    );
  }
});

module.exports = Login;
