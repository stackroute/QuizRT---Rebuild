import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';

const stylebtn = {
  margin: 12,
  marginLeft:0,
  width:256,
};
const first = {
  width:'20%',
  margin:'0 auto',
}
const text = {
  margin:0,
  padding:0,
  textAlign:'center'
}
const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

console.log('Loading Abcd');


var Sign = React.createClass({
  render: function() {
    return (
      <div style={first}>
      <h1 style={text}>QuizRT</h1><br/>
      <p style={text}>Sign-Up to continue with QuizRT</p>
      <TextField hintText="Enter your Mail" floatingLabelText="Email" type="text" /><br/>
      <TextField hintText="" floatingLabelText="Password" type="password" /><br/>
      <RaisedButton label="Sign Up" secondary={true} style={stylebtn} /><br/>
      <p style={text}>OR</p><br/>
      <RaisedButton label="Sign-in with Facebook" secondary={true} style={stylebtn} /><br/>
      <RaisedButton label="Sign-In with google" secondary={true} style={stylebtn} /><br/>
      <p style={text} ><a href="#" >Create account</a></p><br/>


      </div>
    );
  }
});
 module.exports = Sign;
