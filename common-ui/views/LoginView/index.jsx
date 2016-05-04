import React from 'react';
<<<<<<< HEAD

import { Card, CardText, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import { Link } from 'react-router';

import Login from '../../components/Login';

import LoginForm from './login';
import ForgotPswd from './forgotPswd';
import VerifyOTP from './verifyOTP';
import SetNewPswd from './setNewPswd';


export default class LoginView extends React.Component {
  render() {
    return (

      <Card style={{maxWidth: '500px', minWidth: '320px', width: '30%', margin: 'auto'}}>
        <CardText>
          <h1>Login</h1>
          <Login />
          <Link to="/signup">
            <FlatButton label="Sign Up" secondary={true} style={{width: '100%'}} />
          </Link>
        </CardText>
      </Card>

    <LoginForm/>
 
    );
  }
};
