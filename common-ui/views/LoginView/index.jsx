import React from 'react';
import {Card, CardText, CardHeader} from 'material-ui/Card';
import LoginForm from './login';
import ForgotPswd from './forgotPswd';
import VerifyOTP from './verifyOTP';
import SetNewPswd from './setNewPswd';
import Paper from 'material-ui/Paper';



export default class LoginView extends React.Component {
  render() {

    return (
              <ForgotPswd/>
      );
  }
};
