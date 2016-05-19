import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

var style= {
  "text-align":'center'
}


export default class Test extends React.Component{
  constructor(props){
    super(props);
  }
  render (){
    return (
      <div style={style}>
    <TextField
      hintText="id"
    /><br />
    <br />
    <TextField
      hintText="Name"
    /><br />
    <TextField
    hintText="Designation"
    /><br />
    <TextField
      hintText="Rules"
    /><br />
    <TextField
      hintText="Prizes"
    /><br />
    <TextField
      hintText="CreatedOn"

    /><br />
    <TextField
      hintText="StartDate"

    /><br />
    <TextField
      hintText="EndDate"

    /><br />
    <TextField
      hintText="RegisteredUsers"

    /><br />
    <TextField
      hintText="UsersPlayed"

    /><br /><TextField
      hintText="Category"

    /><br />
    <TextField
      hintText="HashTags"

    /><br />
    <TextField
      hintText="Maxlevel"

    /><br />
    <TextField
      hintText="Minlevel"

    /><br />
    <TextField
      hintText="Images"

    /><br />
    <TextField
      hintText="AvatharImages"

    /><br />
    <RaisedButton label="Submit"/>
  </div>

    );
  }
};
