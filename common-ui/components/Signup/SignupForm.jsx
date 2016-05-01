import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class SignupForm extends React.Component {
  handleSubmit() {

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <TextField floatingLabelText="Username" fullWidth={true} />
          </div>
          <div>
            <TextField floatingLabelText="Password" type="password" fullWidth={true} />
          </div>
          <div>
            <TextField floatingLabelText="Re-Type Password" type="password" fullWidth={true} />
          </div>
          <div>
            <RaisedButton label="Sign Up" primary={true} style={{width: '100%'}} />
          </div>
        </form>
      </div>
    );
  }
};