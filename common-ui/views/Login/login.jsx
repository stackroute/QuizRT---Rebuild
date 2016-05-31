import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import {Link} from 'react-router';
import cookie from 'react-cookie';



const styles = {
  width:'100%'
}
const para = {
  "text-align" :'center'
}

export default class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formInput: { username: '', password: ''}
    };
    cookie.remove('auth_cookie');
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object
    }
  } // Used to provide property validation.Currently we are saying that we need a context prop of type "React.PropTypes.object"

  handleLogin(event) {
    event.preventDefault();

    var data = {
      name : this.state.formInput.username,
      password : this.state.formInput.password
    }


    $.ajax({
      type : 'POST',
      data :  JSON.stringify(data),
      contentType : 'application/json',
      url : '/authenticate',
      success: (function(data) {
        if(data['success'] === true){
            cookie.save('auth_cookie',data['token'],{path:'/'});
            this.context.router.push('/dashboard');
        }
        else {
            alert(data['message']);
            this.context.router.push('/login');
        }

      }).bind(this)
    });
  }
  usernameChanged(event) {
    this.state.formInput.username = event.target.value;
  }
  passwordChanged(event) {
    this.state.formInput.password = event.target.value;
  }

  render() {
    return (
      <div className = "container-fluid">
      <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-lg-offset-4 col-md-offset-4 col-sm-offset-3">

        <h1 style = {para}>Login</h1>
        <h1 style = {para}>QuizRT</h1>
				<p style = {para}>Login here to play the game</p>

        <form onSubmit={this.handleLogin.bind(this)} >
            <TextField hintText="username" floatingLabelText="Username" fullWidth={true}
              onChange={this.usernameChanged.bind(this)} type="text" />
            <TextField fullWidth={true}  floatingLabelText="Password" type="password"
              onChange={this.passwordChanged.bind(this)} />
            <RaisedButton type="submit" label="Login" primary={true} style={styles} />
        </form>


        <Checkbox label = "Remember Me" /><br/><br/>

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
