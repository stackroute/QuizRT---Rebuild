import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


import {Tabs, Tab} from 'material-ui/Tabs';


import SwipeableTabs from './SwipeTabs';
import SwipeableViews from 'react-swipeable-views';


var title1={
  "font-size":"25"
}
const styleImg={
  height:"200px"
}

const btnFontColor ={
  margin:'auto',
  width:"50%"
}

const styleCard={
  margin:5,
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
