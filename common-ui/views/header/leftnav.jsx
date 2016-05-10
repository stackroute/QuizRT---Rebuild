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
import ActionViewmodule from 'material-ui/svg-icons/action/view-module';
import ActionViewquilt from 'material-ui/svg-icons/action/view-quilt';

const avatarstyle={
  backgroundSize:'cover',
  height:50,
  width:50,
  marginTop:10,
};

const AppBaravatarstyle={
  backgroundSize:'cover',
  height:50,
  width:50,
}

const style1={
  marginTop:0,
};

const iconstyle={
  verticalAlign:'center',
};

const style={
  textAlign: 'center',
};

const listtext={
  textAlign:'left',
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
          <div style={iconstyle}>
            <Avatar src="img/user_avatar/photo.jpg" style={AppBaravatarstyle}/>
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
          <div><Avatar src="img/user_avatar/photo.jpg" style={avatarstyle}/></div>
          Display Name</MenuItem>
          <MenuItem onTouchTap={this.handleClose} style={style}> RANK: 21#</MenuItem>
          <Divider />
          <List>
            <ListItem primaryText="VIEW PROFILE" leftIcon={<ActionAccountbox />} style={listtext}/>
            <ListItem primaryText="SETTINGS" leftIcon={<ActionSettings />} style={listtext}/>
            <ListItem primaryText="RECENT ACTIVITY" leftIcon={<ImageBurstmode />} style={listtext}/>
            <ListItem primaryText="TOPICS" leftIcon={<ActionViewmodule />} style={listtext}/>
            <ListItem primaryText="TOURNAMENTS" leftIcon={<ActionViewquilt />} style={listtext}/>
            <ListItem primaryText="BADGES" leftIcon={<ActionTurnedin />} style={listtext}/>
            <ListItem primaryText="LOGOUT" leftIcon={<ActionPowersettingsnew />} style={listtext}/>

          </List>
        </Drawer>
      </div>
    );
  }
});

module.exports = ProfileHero;
