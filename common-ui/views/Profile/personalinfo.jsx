import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import DropDownMenu from 'material-ui/DropDownMenu';
import cookie from 'react-cookie';

var baseurl='/';
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
    this.state = {value: "Male",enable:true,userdata:{}};
  }
  componentWillMount(){
    this.state.userdata.email = cookie.load('username')
    var data={
      email : this.state.userdata.email,
    }
    $.ajax({
      type : 'POST',
      data : JSON.stringify(data),
      url: baseurl+'accountInfo',
      contentType : 'application/json',
      success: (function(data){
        this.setState({userdata :data});
        // console.log("date"+this.state.userdata.date);
      }).bind(this),
      error:function(err){
        console.log(err);
        console.log('error here');
      }
    })
  }

handleSave(event){
  var data = {
    id: this.state.userdata.id,
    email: this.state.userdata.email,
    displayname : this.state.userdata.displayname,
    dob: this.state.userdata.dob,
    mobile: this.state.userdata.mobile,
    country: this.state.userdata.country,
    sex: this.state.userdata.sex,
  }
  $.ajax({
    type : 'POST',
    url: baseurl+'accountInfoUpdate',
    data : JSON.stringify(data),
    contentType : 'application/json',
    success: (function(data){
      this.setState({userdata :data,enable : true});
    }).bind(this),
  })
  window.alert("Your Data saved Successfully");
  this.setState({enable:true})
}
displaynameChanged(event) {
  var updateUserData = this.state.userdata;
  updateUserData.displayname = event.target.value
  this.setState({userdata:updateUserData})
}
mobileChanged(event) {
  var updateUserData = this.state.userdata;
  updateUserData.mobile = event.target.value
  this.setState({userdata:updateUserData})
}
countryChanged(event) {
  var updateUserData = this.state.userdata;
  updateUserData.country = event.target.value
  this.setState({userdata:updateUserData})
}
handleDateChange = (event, date) => {
  var updateUserData = this.state.userdata;
  updateUserData.dob = date.toDateString();
  this.setState({userdata:updateUserData});
}
  handleDropChange = (event, index, value) => {
    var updateUserData = this.state.userdata;
    updateUserData.sex = value;
    this.setState({userdata:updateUserData,value})
  }
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
              onChange={this.displaynameChanged.bind(this)}
              value={this.state.userdata.displayname}
              /><br />
              <TextField
              disabled={true}
              hintText="abc@example.com"
              floatingLabelText="Email ID"
              value={this.state.userdata.email}
              /><br />
              <TextField
              disabled={this.state.enable}
              hintText="Contact Number"
              floatingLabelText="Enter 10-digit mobile number"
              onChange={this.mobileChanged.bind(this)}
              value={this.state.userdata.mobile}
              /><br />
              <div>
              <DropDownMenu value={this.state.value} onChange={this.handleDropChange} openImmediately={false} hintText="select" disabled={this.state.enable}>
              <MenuItem value="Male" primaryText="Male" />
              <MenuItem value="Female" primaryText="Female" />
              <MenuItem value="Others" primaryText="Others" />
              </DropDownMenu>


              </div>
              <TextField
              disabled={this.state.enable}
              hintText="Country"
              floatingLabelText="Country"
              onChange={this.countryChanged.bind(this)}
              value={this.state.userdata.country}
              /><br />
              <div>
                <RaisedButton label="Edit" primary={true} style={style} onClick={this.enable.bind(this)} />
                <RaisedButton label="Save" secondary={true} style={style} onClick={this.handleSave.bind(this)} />
              </div>
            </div>
          </div>
    );
  }
}


module.exports=PersonalInfo;
