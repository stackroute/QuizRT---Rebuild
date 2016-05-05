import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import Recentcard from './recentcard';


const styles = {
  textAlign : 'center',
};

const style = {
  margin: 12,
};

var PersonalInfo= React.createClass({

  getInitialState: function () {
    return {value:1};
  },

  render: function () {

    return(
      <div>
            <div style={styles}>
              <h2 style={styles.headline}>Profile</h2>
              <br/>
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
