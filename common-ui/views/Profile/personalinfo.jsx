import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import DropDownMenu from 'material-ui/DropDownMenu';



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

export default class PersonalInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1,enable:true};
  }

  handleChange = (event, index, value) => this.setState({value});
  enable(){
    this.setState({enable:false})
  }
  render() {

    return(
      <div>
            <div style={styles}>
              <Avatar src="img/user_avatar/photo.jpg" style={avatarstyle}/>
              <br />
              <TextField
              disabled={this.state.enable}
              hintText="Enter your name"
              floatingLabelText="Display Name"
              /><br />
              <TextField
              disabled={true}
              hintText="abc@example.com"
              floatingLabelText="Email ID"
              /><br />
              <DatePicker hintText="Date of Birth" disabled={this.state.enable} />
              <TextField
              disabled={this.state.enable}
              hintText="Contact Number"
              floatingLabelText="Enter 10-digit mobile number"
              /><br />
              <div>
              <DropDownMenu value={this.state.value} onChange={this.handleChange} openImmediately={false} disabled={this.state.enable}>
              <MenuItem value={1} primaryText="Male" />
              <MenuItem value={2} primaryText="Female" />
              <MenuItem value={3} primaryText="Others" />
              </DropDownMenu>


              </div>
              <TextField
              disabled={this.state.enable}
              hintText="Country"
              floatingLabelText="Country"
              /><br />
              <div>
                <RaisedButton label="Edit" primary={true} style={style} onClick={this.enable.bind(this)} />
                <RaisedButton label="Save" secondary={true} style={style} />
              </div>
            </div>
          </div>
    );
  }
}


module.exports=PersonalInfo;
