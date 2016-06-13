import { FacebookLikeButton, TwitterButton } from 'react-social-buttons';

var SocialPlugins= React.createClass({
  render:function() {
    let url = "https://github.com";
  return (
    <div>
      <FacebookLikeButton url={url} />
      <TwitterButton url={url} />
    </div>
  );
}
});

export default SocialPlugins;
