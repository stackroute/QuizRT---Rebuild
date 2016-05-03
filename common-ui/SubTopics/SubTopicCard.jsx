import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {orange500} from 'material-ui/styles/colors';


var style1= {

  background:'#c6ecc6'
}
//var cardDivStyle={
  // width:"20%",
   //float:"left",

// var style1= {
//
//   background:'#c6ecc6'
// }
var cardDivStyle={
   width:"80%",
   float:'left',

   padding:10,
   margin:10

}

var title1={
    "font-size":"25"
}
var title2={
  "font-size":"16"
}
var title3={

    width:"80%",
    margin:'auto'
}
var title4={
     width:"50%",

     margin:'auto'
   }
//var title5={
    //"padding-left":"20"
    //float:'left'
  //  "margin-right":"20",
    //"background-color":"red"
}

var SubTopicCard = React.createClass({
  render: function(){
    return(


<Card style ={cardDivStyle}>

    <CardHeader
      title={this.props.topic.title}
      titleStyle ={title1}
      subtitle={this.props.topic.subtitle}
      subtitleStyle ={title2}
      avatar={this.props.topic.avatarImg}
    />

    <CardMedia style={title3}>
      <img src={this.props.topic.img} />
    </CardMedia>


    <CardActions >

        <div className="col-xs col-md col-lg col-sm">
        <RaisedButton label="+Fav" primary={true} style={title4}   />
        <RaisedButton label="Play" style={title4} secondary={true}  />
        </div>
  </CardActions>





    </Card>

  );
}
});

module.exports= SubTopicCard;
