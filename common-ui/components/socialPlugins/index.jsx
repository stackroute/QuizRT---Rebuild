import React from 'react';

export default class SocialPlugin extends React.Component {
  render() {
    return (
      <div>
        <span className='st_facebook_large' displayText='Facebook'></span>
        <span className='st_twitter_large' displayText='Tweet'></span>
        <span className='st_pinterest_large' displayText='Pinterest'></span>
        <span className='st_email_large' displayText='Email'></span>
      </div>
    );
  }
};
