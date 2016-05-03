import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import Recentcard from './recentcard';
// import ProfileHero from '../header/leftnav';


var description=[
  {
    description:"lorem",
    title:"Cricket",
    subtitle:"Bang - Bang",
    image:"img/cricket.jpg",
  },
  {
    description:"hello",
    title:"Stadium",
    subtitle:"Exquisite",
    image:"img/dharmashala.jpg",
  },
];

const styles = {
  textAlign : 'center',
};

const style = {
  margin: 12,
};

var RecentTabs= React.createClass({

  getInitialState: function () {
    return {value:1};
  },

  render: function () {

     var initialData = description;
     var rows = [];
     initialData.forEach(function(activity){
       rows.push(<Recentcard activity={activity}/>)
     });

    return(
      <div class="row">
            <Tabs class="col-xs-12 col-sm-8 col-md-6 col-lg-4">
            <Tab label="Recent Activity" >
              {rows}
            </Tab>
            <Tab label="Personal Info" class="col-xs-12 col-sm-8 col-md-6 col-lg-4">
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
            </Tab>
            </Tabs>
          </div>
    );
  }
});


module.exports=RecentTabs;
