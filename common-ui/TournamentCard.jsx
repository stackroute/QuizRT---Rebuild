import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {orange500} from 'material-ui/styles/colors';


// var cardDivStyle={
//    width:"20%",
//    float:"left",
//    height:"20%",
//    padding:10,
//    margin:10

//}
var TournamentCard = React.createClass({
  render: function(){
    return(


<Card style ={cardDivStyle}>

    <CardHeader
      title={this.props.topic.title}
      avatarurl={this.props.topic.AvatarURL}
      url={this.props.topic.URL}
      overlaytitle={this.props.topic.OverlayTitle}
      overlaysubtitle={this.props.topic.OverlaySubtitle}

      TabContent{
      description={this.props.topic.description}
      rules={this.props.topic.rules}
      prizes={this.props.topic.prizes}
    }
    />



    <div>
    <CardActions >
        <RaisedButton label="Register"  primary={true} />
        <RaisedButton label="Play" secondary={true} />
  </CardActions>
    </div>
    </Card>

  );
}
});

module.exports= TournamentCard;
