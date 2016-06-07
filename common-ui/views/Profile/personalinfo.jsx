import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';


const styles = {
  textAlign : 'center',
};

const style = {
  margin: 12,
};

const avatarstyle={
  backgroundSize:'cover',
  marginTop:10,
  height:50,
  width:50,
};

const exampleImageInput= {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
};

var PersonalInfo= React.createClass({

  getInitialState: function () {
    return {value:1};
  },

  render: function () {

    return(
      <div>
            <div style={styles}>
              <Avatar src="img/user_avatar/photo.jpg" style={avatarstyle}/>
              <br />
              <RaisedButton
                label="Choose an Image"
                labelPosition="before"
                style={style}
              >
                <input type="file" style={exampleImageInput} />
              </RaisedButton>
              <br />
              <TextField
              hintText="Enter your name"
              floatingLabelText="Display Name"
              /><br />
              <TextField
              hintText="abc@example.com"
              floatingLabelText="Email ID"
              /><br />
              <DatePicker hintText="Date of Birth" />
              <TextField
              hintText="Contact Number"
              floatingLabelText="Enter 10-digit mobile number"
              /><br />
              <div>
                <SelectField value={this.state.value} onChange={this.handleChange}>
                <MenuItem value={1} primaryText="Male" />
                <MenuItem value={2} primaryText="Female" />
                <MenuItem value={3} primaryText="Others" />
                </SelectField>
              </div>
              <TextField
              hintText="Country"
              floatingLabelText="Country"
              /><br />
              <div>
                <RaisedButton label="Edit" primary={true} style={style} />
                <RaisedButton label="Save" secondary={true} style={style} />
              </div>
            </div>
          </div>
    );
  }
});


module.exports=PersonalInfo;
