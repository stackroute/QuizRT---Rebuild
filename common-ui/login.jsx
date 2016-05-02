import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import Dialog from 'material-ui/Dialog';

var style = {

  margin: 12,
  marginLeft:0,
  width: 256
};
var first = {
 margin:'auto',
 width:300

};

var second = {

	marginRight :0,

};
var third = {
	textAlign :'center',

}



var Login = React.createClass({
  render: function() {
    return (
      <div class = "container-fluid">
      <div class="row">
          <div class="col-xs-12 col-sm-8  col-md-6 col-lg-4">

			<div style = {first}>
        <h1 style={third}>quizRT</h1>
				<p style ={third}>Login here to play the game</p>
    	  <TextField hintText = "Email Field"	floatingLabelText = "Email"	type = "text" /><br/>
        <TextField hintText = "Password Field" floatingLabelText = "Password" type = "password" /><br/><br/>
        <Checkbox label = "Remember Me" /><br/><br/>

        <RaisedButton label = "Login" primary = {true} style = {style} /><br/>

        <p style={second} ><a href="#" >Forgot Password</a></p>
				<p style={third}>OR</p>
        <RaisedButton label = "Login With Facebook" secondary = {true} style = {style} /><br/>
        <RaisedButton label = "Login With Google" secondary = {true} style = {style} /><br/>
    	</div>
   </div>
  </div>
</div>
    );
  }
});

module.exports = Login;
