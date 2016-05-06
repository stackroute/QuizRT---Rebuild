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


var ProfileHero = React.createClass({
  getInitialState: function () {
    return({open: false});
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
            <ListItem primaryText="RECENT ACTIVITY" leftIcon={<ImageBurstmode />} />
            <ListItem primaryText="BADGES" leftIcon={<ActionTurnedin />} />
            <ListItem primaryText="LOGOUT" leftIcon={<ActionPowersettingsnew />} />
          </List>
        </Drawer>
      </div>
    );
  }
});

module.exports = ProfileHero;
