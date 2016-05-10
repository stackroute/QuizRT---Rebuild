import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import {Link} from 'react-router';



const styles = {
  width:'100%'
}
const para = {
  "text-align" :'center'
}

export default class LoginForm extends React.Component{

  render() {
    return (
      <div className = "container-fluid">
      <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-lg-offset-4 col-md-offset-4 col-sm-offset-3">

        <h1 style = {para}>Login</h1>
        <h1 style = {para}>QuizRT</h1>
				<p style = {para}>Login here to play the game</p>

    	  <TextField hintText = "Email Field"	floatingLabelText = "Email"	type = "text" style = {styles}/><br/>
        <TextField hintText = "Password Field" floatingLabelText = "Password" type = "password" style = {styles}/><br/><br/>

        <Checkbox label = "Remember Me" /><br/><br/>

        <Link to ='/dashboard'>
          <RaisedButton label = "Login" primary = {true} style = {styles}/><br/>
        </Link>
        <Link to ='/forgotPswd'>
        <p style = {para}>Forgot Password</p>
        </Link>
				<p style = {para}>OR</p>
        <RaisedButton label = "Login With Facebook" secondary = {true} style = {styles}/><br/><br/>
        <RaisedButton label = "Login With Google" secondary = {true} style = {styles}/><br/><br/>
        <Link to ='/SignUP'>
          <RaisedButton label = "Sign Up" secondary = {true} style = {styles}/><br/><br/>
        </Link>

    	</div>
   </div>
  </div>

    );
  }
};
