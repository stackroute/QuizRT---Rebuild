import React from 'react';
import {Card, CardText, CardHeader} from 'material-ui/Card';
import LoginForm from './login';
import ForgotPswd from './forgotPswd';
import VerifyOTP from './verifyOTP';
import SetNewPswd from './setNewPswd';
import Paper from 'material-ui/Paper';

<<<<<<< HEAD

import { Card, CardText, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
=======
>>>>>>> 462e3e3d5a2dd3d6b6a34200406b0c8784112e37


import LoginForm from './login';
import ForgotPswd from './forgotPswd';
import VerifyOTP from './verifyOTP';
import SetNewPswd from './setNewPswd';


export default class LoginView extends React.Component {
  render() {

    return (
<<<<<<< HEAD

      <Card style={{maxWidth: '500px', minWidth: '320px', width: '30%', margin: 'auto'}}>
        <CardText>
          <h1>Login</h1>
          <Login />
          <Link to="/signup">
            <FlatButton label="Sign Up" secondary={true} style={{width: '100%'}} />
          </Link>
        </CardText>
      </Card>



    );
=======
              <ForgotPswd/>
      );
>>>>>>> 462e3e3d5a2dd3d6b6a34200406b0c8784112e37
  }
};
