import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import People from 'material-ui/svg-icons/social/people';
import PeopleOutline from 'material-ui/svg-icons/social/people-outline';
import {grey600,grey500, grey100, red900, teal500} from 'material-ui/styles/colors';
import Checkbox from 'material-ui/Checkbox';



import {Tabs, Tab} from 'material-ui/Tabs';


import SwipeableTabs from './SwipeTabs';
import SwipeableViews from 'react-swipeable-views';


var title1={
  "font-size":"25"
}
const styleImg={
  height:"200px",
  width:"100%"
}
const tabHeight={
  height:"200px"
}

const btnFontColor ={
  margin:'auto',
  width:"50%"
}

const styleCard={
  margin:5,
}

const style_followers={
    width:'12%',
    marginTop:15,
    marginBottom:10,
    float:'right',
    fontWeight:'bold',
    fontSize:'small'
}
const style_favorite={
    width:'10%',
    marginTop:15,
    marginBottom:10,
    float:'right',
    fontWeight:'bold',
    fontSize:'small'
}
const style_fav={
    width:'5%',
    marginTop:10,
    marginBottom:10,
    float:'right',
}
const style_sd={
    width:'10%',
    marginTop:15,
    marginBottom:10,
    float:'right',
    fontWeight:'bold',
    fontSize:'small'
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
