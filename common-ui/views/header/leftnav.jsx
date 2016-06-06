import React from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ImageBurstmode from 'material-ui/svg-icons/image/burst-mode';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import ActionPowersettingsnew from 'material-ui/svg-icons/action/power-settings-new';
import ActionAccountbox from 'material-ui/svg-icons/action/account-box';
import ActionTurnedin from 'material-ui/svg-icons/action/turned-in';
import cookie from 'react-cookie';
var baseURL = 'http://localhost:3000/';


var ProfileHero = React.createClass({
  getInitialState: function () {
    return({open: false});
  },

  contextTypes :{
    router : React.PropTypes.object
  },

  handleToggle: function () {
    this.setState({open: !this.state.open});
  },

  handleClose: function () {
    this.setState({open: false});
  },
  handleTouchTap: function() {
    alert('You are Redirected to Dashboard');
  },

  handleRecentTouch : function(){
    event.preventDefault();

    var token = {token : cookie.load('auth_cookie')}

    $.ajax({
      type : 'POST',
      data :  JSON.stringify(token),
      contentType : 'application/json',
      url : baseURL + 'api/RecentPage',
      success: (function(data) {
        if(data['success'] == true){
            this.context.router.push('/recent');

        }

      }).bind(this)
    });
  },
  handleLogout : function(){
    event.preventDefault();

    var token = {token : cookie.load('auth_cookie')}

    $.ajax({
      type : 'POST',
      data :  JSON.stringify(token),
      contentType : 'application/json',
      url : baseURL + 'api/Logout',
      success: (function(data) {
        if(data['success'] == true){
            this.context.router.push('/login');

        }

      }).bind(this)
    });
  },

  render: function() {
    return (
      <div>

      <AppBar
        title={<span>QuizRT</span>}
        onTitleTouchTap={this.handleTouchTap}
        onLeftIconButtonTouchTap={this.handleToggle}
        iconElementRight={
          <div>
            <FlatButton label="Topics" />
            <FlatButton label="Tournaments" />
            <Avatar src="img/photo.jpg"/>
          </div>
          }
      />


        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >

          <MenuItem onTouchTap={this.handleClose}>
          <div><Avatar src="img/photo.jpg"/></div>
          Display Name</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>RANK: 21#</MenuItem>
          <Divider />
          <List>
            <ListItem primaryText="VIEW PROFILE" leftIcon={<ActionAccountbox />} />
            <ListItem primaryText="SETTINGS" leftIcon={<ActionSettings />} />
            <ListItem primaryText="RECENT ACTIVITY" leftIcon={<ImageBurstmode />}
              onTouchTap={this.handleRecentTouch.bind(this)}/>
            <ListItem primaryText="BADGES" leftIcon={<ActionTurnedin />} />
            <ListItem primaryText="LOGOUT" leftIcon={<ActionPowersettingsnew />}
              onTouchTap={this.handleLogout.bind(this)} />
          </List>
        </Drawer>
      </div>
    );
  }
});

module.exports = ProfileHero;
