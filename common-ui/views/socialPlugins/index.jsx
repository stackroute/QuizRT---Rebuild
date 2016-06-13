import React from 'react';

const plugin_style={
    margin:10,
    textAlign:'center'
};

export default class SocialPlugin extends React.Component {
  render() {
    return (
    <div style={plugin_style}>
    <span className='st_facebook_large' displayText='Facebook'></span>

    <span className='st_twitter_large' displayText='Tweet'></span>

    <span className='st_linkedin_large' displayText='LinkedIn'></span>

    </div>

    );
  }
};
