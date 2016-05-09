import React from 'react';
import {Card, CardText, CardHeader} from 'material-ui/Card';
import LoginForm from './login';
import ForgotPswd from './forgotPswd';
import VerifyOTP from './verifyOTP';
import SetNewPswd from './setNewPswd';
import Paper from 'material-ui/Paper';
import Link from 'react-router';
  
import FlatButton from 'material-ui/FlatButton';


export default class LoginView extends React.Component {
  render() {

    return (


      <Card style={{maxWidth: '500px', minWidth: '320px', width: '30%', margin: 'auto'}}>
        <CardText>
          <h1>Login</h1>
          <Link to="/signup">
            <FlatButton label="Sign Up" secondary={true} style={{width: '100%'}} />
          </Link>
        </CardText>
      </Card>



    );
   }
};
