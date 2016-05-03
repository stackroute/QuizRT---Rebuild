import React from 'react';

import Signup from '../../components/Signup';

import { Card, CardText } from 'material-ui/Card';

export default class SignupView extends React.Component {
  render() {
    return  (
      <Card style={{maxWidth: '500px', minWidth: '320px', width: '30%', margin: 'auto'}}>
        <CardText>
          <h1>Signup</h1>
          <Signup />
        </CardText>
      </Card>
    );
  }
};