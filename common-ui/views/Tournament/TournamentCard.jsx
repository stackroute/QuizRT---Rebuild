import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableTabs from './SwipeTabs';
import SwipeableViews from 'react-swipeable-views';


//Styles
const styleCard ={
  width:"60%",
  height:"20%",
  margin:'auto'
}
const styleImg={
  height:"200px"
}

const btnFontColor ={
  "background-color": "red"
}


var TournamentCard = React.createClass({
  render: function(){
    return(
      <Card style={styleCard} >
        <div>
          <CardHeader
            title={this.props.tournament.title}

            avatar={this.props.tournament.AvatarURL}
            />


          <CardMedia style
            overlay={<CardTitle title={this.props.tournament.OverlayTitle} subtitle={this.props.tournament.OverlaySubtitle} />}
            >
            <img src={this.props.tournament.URL} style={styleImg}  />
          </CardMedia>
        </div>
        <SwipeableTabs TabContent={this.props.tournament.TabContent} />
        <div>
          <CardActions>

            <RaisedButton label="Register" secondary={true} style={btnFontColor}  />
            <RaisedButton label="Play" primary ={true}   />
          </CardActions>
        </div>
      </Card>

    );
  }
});
export default TournamentCard;
