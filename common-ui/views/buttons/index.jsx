import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {fullWhite} from 'material-ui/styles/colors';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';

export default class Button extends React.Component{
  render(){
    return(
      <div>
      <RaisedButton
         linkButton={true}
         href="https://github.com/callemall/material-ui"
         secondary={true}
         icon={<FontIcon className="icon-facebook" />}
       />
      </div>
    );
  }
}
