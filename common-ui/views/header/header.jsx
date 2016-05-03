import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const HeaderComponent = () => (
  <AppBar
    title={<span style={styles.title}>Title</span>}
    onTitleTouchTap={handleTouchTap}
    iconElementLeft={<IconButton><i class="material-icons">mail</i></IconButton>}
    iconElementRight={
      <div>
        <FlatButton label="Save" />
        <FlatButton label="Close" />
      </div>
      }
  />
);

module.exports =HeaderComponent;
