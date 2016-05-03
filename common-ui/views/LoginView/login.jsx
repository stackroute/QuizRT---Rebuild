import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import Dialog from 'material-ui/Dialog';



const styles = {
  width:'100%',
}

export default class LoginForm extends React.Component{

  render() {
    return (
      <div className = "container-fluid">
      <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-lg-offset-4 col-md-offset-4 col-sm-offset-3">


        <h1>quizRT</h1>
				<p>Login here to play the game</p>
        <form>
    	  <TextField hintText = "Email Field"	floatingLabelText = "Email"	type = "text" style = {styles}/><br/>
        <TextField hintText = "Password Field" floatingLabelText = "Password" type = "password" style = {styles}/><br/><br/>
        </form>
        <Checkbox label = "Remember Me" /><br/><br/>

        <RaisedButton label = "Login" primary = {true} style = {styles}/><br/>

        <p><a href="#" >Forgot Password</a></p>
				<p>OR</p>
        <RaisedButton label = "Login With Facebook" secondary = {true} style = {styles}/><br/><br/>
        <RaisedButton label = "Login With Google" secondary = {true} style = {styles}/><br/><br/>
        <RaisedButton label = "Create Account" primary = {true} style = {styles}/><br/>

    	</div>
   </div>
  </div>

    );
  }
};
