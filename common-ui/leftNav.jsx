import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';

var LeftNavBar = React.createClass({

  getInitialState: function(){
    return {open:false};
  },
  handleToggle: function(){
    this.setState({open: !this.state.open});
  },
  handleClose: function(){
    this.setState({open:false});
  },


  render: function(){
    return(
      <div>
        <RaisedButton
          label="Open LeftNav"
          onTouchTap={this.handleToggle}
        />
        <LeftNav
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </LeftNav>
      </div>
    );
  }
});

module.exports = LeftNavBar;
