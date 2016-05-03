import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {orange500} from 'material-ui/styles/colors';

const TitleStyle={
  "font-size":"25px"
}
const SubtitleStyle={
  "font-size":"20px"
}
var style1= {

  width:"90%",
  height:"20%",
  float:'left',
  margin:10

}
const CardHeaderStyle = {
  width:"100%"
}
const BtnStyle ={
  width:"50%",

  margin:'auto'
}

var SubTopicCard = React.createClass({
  render: function(){
    return(

<Card style={style1}>

    <CardHeader
      title={this.props.topic.title}

      titleStyle={TitleStyle}
      subtitle={this.props.topic.subtitle}

      subtitleStyle={CardHeaderStyle}
      avatar={this.props.topic.avatarImg}
    />

    <CardMedia>
      <img src={this.props.topic.img} />
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
