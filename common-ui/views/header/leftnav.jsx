import React from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import ImageBurstmode from 'material-ui/svg-icons/image/burst-mode';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import ActionPowersettingsnew from 'material-ui/svg-icons/action/power-settings-new';
import ActionAccountbox from 'material-ui/svg-icons/action/account-box';
import ActionTurnedin from 'material-ui/svg-icons/action/turned-in';

const avatarstyle={
  backgroundSize:'cover',
  marginTop:10,
  height:50,
  width:50,
};

const style1={
  marginTop:0,
};

const style={
  textAlign: 'center',
};

const imgstyle={
  height:'auto',
  width:'auto',
};

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
            <IconButton
              iconClassName="muidocs-icon-communication-voicemail"
            />
            <IconButton
              iconClassName="muidocs-icon-communication-phone"
            />
            <Avatar src="img/photo.jpg" style={avatarstyle}/>
          </div>
          }
      />


        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >

          <MenuItem onTouchTap={this.handleClose} style={style}>
          <div><Avatar src="img/photo.jpg" style={avatarstyle}/></div>
          Display Name</MenuItem>
          <MenuItem onTouchTap={this.handleClose} style={style}> RANK: 21#</MenuItem>
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
