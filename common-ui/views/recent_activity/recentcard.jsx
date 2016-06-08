import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import ContentSend from 'material-ui/svg-icons/content/send';
import Paper from 'material-ui/Paper';

var data=[
  {
    title:"Rohith",
    subtitle: "My rules, So I don't care",
    avatar:"img/user_avatar/photo.jpg",
  }
];

 const style1 = {
   margin: 12,
 };

 const styleshare = {
     margin: 12,
 };

 const style = {
  margin: 5,
  textAlign: 'center',

};

const card={
  textAlign: 'left',
};
//fix me
const badge={
  height: 250,
  width: "50%",
  maxWidth:"70%",
  minWidth: "50%",
};

var Recentcard = React.createClass({
  getDefaultProps: function(){
    return {
      data:{
        title:"Rohith",
        subtitle: "My rules, So I don't care",
        avatar:"img/user_avatar/photo.jpg",
      }
    }
  },
  render: function() {


    return (
      <div class="col-xs-12 col-sm-8 col-md-6 col-lg-4">
      <Paper style={style} zDepth={2}>
      <Card>
        <CardHeader style={card}
           title={this.props.data.title}
           subtitle={this.props.data.subtitle}
           avatar={this.props.data.avatar}
        />
        <p>
          {this.props.activity.description}
        </p>

        <RaisedButton
          label="Fb"
          linkButton={true}
          href="https://www.facebook.com"
          primary={true}
          icon={<ContentSend />}
          style={styleshare}
        />
        <RaisedButton
          label="G+"
          linkButton={true}
          href="https://plus.google.com"
          secondary={true}
          icon={<ContentSend />}
          style={styleshare}
        />
        <RaisedButton
          label="Tweet"
          linkButton={true}
          href="https://www.twitter.com"
          icon={<ContentSend />}
          style={styleshare}
        />

      </Card>
      </Paper>
    </div>
    );
  }
});

module.exports= Recentcard;
