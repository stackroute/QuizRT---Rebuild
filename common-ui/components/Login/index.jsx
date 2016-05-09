import React from 'react';
import LoginForm from './login';
import ForgotPasswordForm from './forgotPswd.jsx'

export default class Login extends React.Component {
  render() {
    return (
      <LoginForm />

    );
  }
};

export default class ForgotPassword extends React.Component{
  render(){
    return(
      <ForgotPasswordForm />
    );
  }
};
