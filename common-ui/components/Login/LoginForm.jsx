import React from 'react';
import { Link } from 'react-router';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class LoginForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.formInput = {};
  }
  static get contextTypes() {
    return {
      router: React.PropTypes.object
    }
  }
  componentIsMounting() {
    this.setState({$invalid: false});
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('FormData: ' + JSON.stringify(this.formInput));
    if(this.formInput.username==='sagar' && this.formInput.password==='password') {
      this.context.router.push('/dashboard');
    } else {
      this.setState({$invalid: true});
    }
  }
  usernameChanged(event) {
    this.formInput.username = event.target.value;
  }
  passwordChanged(event) {
    this.formInput.password = event.target.value;
  }
  render() {
    let invalid = <div style={{color: '#D00'}}>The username and password you entered don't match!</div>;
    return (
      <div>
        { this.state && this.state.$invalid ? invalid : null }
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <TextField floatingLabelText="Username" fullWidth={true} onChange={this.usernameChanged.bind(this)}/>
          </div>
          <div>
            <TextField floatingLabelText="Password" type="password" fullWidth={true} onChange={this.passwordChanged.bind(this)} />
          </div>
          <div>
            <RaisedButton label="Login" type="submit" primary={true} style={{width: '100%'}} />
          </div>
        </form>
      </div>
    );
  }
};