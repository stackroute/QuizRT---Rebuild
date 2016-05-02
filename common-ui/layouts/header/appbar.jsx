import React from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import ProfileHero from './header/leftnav';

const HeaderComponent = () => (
  <AppBar title="QuizRT"

        onLeftIconButtonTouchTap={<ProfileHero />}
        iconClassNameRight="muidocs-icon-navigation-expand-more" />
    );

module.exports = HeaderComponent;
