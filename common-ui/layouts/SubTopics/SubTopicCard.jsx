import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {orange500} from 'material-ui/styles/colors';

var style1= {

  width:"80%",
  height:"20%",
  float:'left',
  margin:10

}
const CardHeaderStyle = {
  width:"100%"
}
const BtnStyle ={
  width:"50%",
  margin:10,
  margin:'auto'
}

var SubTopicCard = React.createClass({
  render: function(){
    return(



<Card style={style1}>

    <CardHeader
      title={this.props.topic.title}
      subtitle={this.props.topic.subtitle}
      avatar={this.props.topic.avatarImg}
      subtitleStyle={CardHeaderStyle}
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
