import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {orange500} from 'material-ui/styles/colors';

const TitleStyle={
  "font-size":"1em",
    width:"100%",
  "font-weight":"1em"

}
const SubtitleStyle={
  "font-size":"0.8em",
    width:"100%"
}
var style1= {
  margin:"5px",

}
var imgStyle={
  height:"50%",
  margin:"auto"
}

const BtnStyle ={
  width:"50%"
}

var SubTopicCard = React.createClass({
  render: function(){
    return(

<Card style={style1}>

    <CardHeader
      title={this.props.topic.title}

      titleStyle={TitleStyle}
      subtitle={this.props.topic.subtitle}
      avatar={this.props.topic.avatarimg}
      subtitleStyle={SubtitleStyle}

    />

    <CardMedia style={imgStyle}>
      <img src={this.props.topic.img}  />
    </CardMedia>


    <CardActions >
      <div className="col-md col-xs col-lg col-sm">
      <RaisedButton label="+Fav"  primary={true} style={BtnStyle} />

        <RaisedButton label="Play" secondary={true} style={BtnStyle} />
        </div>
     </CardActions>

    </Card>
   );
}
});

module.exports= SubTopicCard;
