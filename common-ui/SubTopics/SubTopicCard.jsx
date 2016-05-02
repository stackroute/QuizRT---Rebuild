import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {orange500} from 'material-ui/styles/colors';

<<<<<<< Updated upstream
var style1= {

  background:'#c6ecc6'
}
var cardDivStyle={
   width:"20%",
   float:"left",
=======
// var style1= {
//
//   background:'#c6ecc6'
// }
var cardDivStyle={
   width:"20%",
   float:'left',
>>>>>>> Stashed changes
   height:"20%",
   padding:10,
   margin:10

}
var SubTopicCard = React.createClass({
  render: function(){
    return(


<Card style ={cardDivStyle}>

    <CardHeader
      title={this.props.topic.title}
      subtitle={this.props.topic.subtitle}
      avatar={this.props.topic.avatarImg}
    />

    <CardMedia>
      <img src={this.props.topic.img} />
    </CardMedia>

<<<<<<< Updated upstream
    <div>
    <CardActions >
        <RaisedButton label="+Fav"  primary={true} />
        <RaisedButton label="Play" secondary={true} />
  </CardActions>
    </div>
=======

    <CardActions >

      <RaisedButton label="+Fav"  primary={true} />
        <RaisedButton label="Play" secondary={true} />



    </CardActions>

>>>>>>> Stashed changes
    </Card>

  );
}
});

module.exports= SubTopicCard;
