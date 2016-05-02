import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const style = {
  margin: 12,
  marginLeft:0,
  width:256,
};
const div = {
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


var SignUp = React.createClass({
  render: function() {
    return (
      <div style={div}>
      <h1 style={text}>QuizRT</h1><br/>
      <p style={text}>Sign-Up to continue with QuizRT</p>
      <TextField hintText="Hint Text" floatingLabelText="Email" type="email" /><br/>
      <TextField hintText="Hint Text" floatingLabelText="Password" type="password" /><br/>
      <RaisedButton label="Sign Up" primary={true} style={style} /><br/>
      <p style={text}>OR</p><br/>
      <RaisedButton label="Sign-Up with Facebook" primary={true} style={style} /><br/>
      <RaisedButton label="Sign-Up with google" primary={true} style={style} /><br/>
      <p style={text} ><a href="#" >Create account</a></p><br/>
      <div style={styles.block}>
      </div>
      </div>
    );
  }
});

module.exports = SignUp;
