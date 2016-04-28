import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

var NewPass = React.createClass({
getInitialState:function(){
  return {open:false}
},
handleOpen :function(){
  this.setState({open: true});
},

handleClose: function(){
  this.setState({open: false});
},
  render:function(){
    const actions = [
    <FlatButton
           label="Cancel"
           primary={true}
           onTouchTap={this.handleClose}
         />    ];
    return (
      <div>
        <RaisedButton label="Set New Password" onTouchTap={this.handleOpen} />
        <Dialog
          title="Set New Password"
          actions={actions}
          modal={true}
          open={this.state.open}
          onRequestClose={this.handleClose}  >
          <TextField hintText="Password" floatingLabelText="New Password" type="text" /><br/>
          <RaisedButton label="Submit" primary={true}  /><br/>
        </Dialog>
      </div>
    );
  }
  });
 module.exports = NewPass;
