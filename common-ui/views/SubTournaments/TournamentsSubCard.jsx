import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


import {Tabs, Tab} from 'material-ui/Tabs';


import SwipeableTabs from './SwipeTabs';
import SwipeableViews from 'react-swipeable-views';



const styleCard ={
  margin:10,
<<<<<<< HEAD
  float:'left'
}
var title1={
    "font-size":"25"
=======
}
var title1={
  "font-size":"25"
>>>>>>> 462e3e3d5a2dd3d6b6a34200406b0c8784112e37
}
const styleImg={
  height:"200px"
}

const btnFontColor ={
<<<<<<< HEAD
  //"background-color": "red"
=======
>>>>>>> 462e3e3d5a2dd3d6b6a34200406b0c8784112e37
  margin:'auto',
  width:"50%"
}

 var TournamentsSubCard = React.createClass({
   render: function(){
     return(
  <Card style={styleCard} >
    <div>
    <CardHeader
      title={this.props.tournament.title}
      titleStyle ={title1}
      avatar={this.props.tournament.AvatarURL}
    />


    <CardMedia style
      overlay={<CardTitle title={this.props.tournament.OverlayTitle} subtitle={this.props.tournament.OverlaySubtitle} />}
    >
      <img src={this.props.tournament.URL} style={styleImg}  />
    </CardMedia>
    </div>
    <SwipeableTabs TabContent={this.props.tournament.TabContent} />



    <CardActions>
      <div className="col-xs col-md col-lg col-sm">
      <RaisedButton label="Register" secondary={true} style={btnFontColor}  />
      <RaisedButton label="Play" primary ={true}  style={btnFontColor} />
      </div>
    </CardActions>

  </Card>

);
}
});
export default TournamentsSubCard;
