import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {orange500} from 'material-ui/styles/colors';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import {grey600,grey500, grey100, red900, teal500} from 'material-ui/styles/colors';
import ActionHome from 'material-ui/svg-icons/action/home';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import People from 'material-ui/svg-icons/social/people';
import PeopleOutline from 'material-ui/svg-icons/social/people-outline';


var topicsData =[{
  title: "Cricket",
  subtitle: "Let's play a cricket quiz",
  avatarImg: './img/topic/avtar.jpg',
  img: './img/topic/main.jpg',
  category: "Sports"
},
{
  title: "Chess",
  subtitle: "Let's play a chess quiz",
  avatarImg: './img/topic/chavtar.jpg',
  img: './img/topic/chesmain.jpg',
  category: "Sports"
},
{
  title: "Football",
  subtitle: "Let's play a football",
  avatarImg: './img/topic/foavtar.jpeg',
  img: './img/topic/footmain.jpg',
  category: "Sports"
},
{
  title: "Hockey",
  subtitle: "Let's play a hockey",
  avatarImg: './img/topic/hoavtar.jpg',
  img: './img/topic/homain.jpg',
  category: "Sports"
},
{
  title: "IndianHistory",
  subtitle: "Let's play history quiz",
  avatarImg: './img/topic/hisavtar.jpg',
  img: './img/topic/hismain.jpg',
  category: "History"
},
{
  title: "Monuments",
  subtitle: "Let's play a history quiz",
  avatarImg: './img/topic/monavtar.jpg',
  img: './img/topic/monmain.jpg',
  category: "History"
},
{
  title: "GreatLeaders",
  subtitle: "Let's play a history quiz",
  avatarImg: './img/topic/leavtar.jpg',
  img: './img/topic/lemain.png',
  category: "History"
},
{
  title: "WorldWars",
  subtitle: "Let's play a history quiz",
  avatarImg: './img/topic/waravtar.jpg',
  img: './img/topic/warmain.jpg',
  category: "History"
},
{
  title: "TvCelebs",
  subtitle: "Let's play a celeb quiz",
  avatarImg: './img/topic/tvavtar.jpg',
  img: './img/topic/tvmain.jpg',
  category: "Celebreties"
},
{
  title: "Hollywood",
  subtitle: "Let's play celeb quiz",
  avatarImg: './img/topic/hlavtar.jpg',
  img: './img/topic/hlmain.jpg',
  category: "Celebreties"
},
{
  title: "IndianCelebs",
  subtitle: "Let's play a celeb quiz",
  avatarImg: './img/topic/inavtar.jpg',
  img: './img/topic/inmain.jpg',
  category: "Celebreties"
},
{
  title: "PoliticalCelebs",
  subtitle: "Let's play a celeb quiz",
  avatarImg: './img/topic/poavtar.jpg',
  img: './img/topic/plmain.jpg',
  category: "Celebreties"
},{
  title: "Instruments",
  subtitle: "Let's play a music quiz",
  avatarImg: './img/topic/miavtar.jpg',
  img: './img/topic/mimain.gif',
  category: "Music"
},
{
  title: "Albums",
  subtitle: "Let's play a music quiz",
  avatarImg: './img/topic/maavtar.jpg',
  img: './img/topic/mamain.jpg',
  category: "Music"
},
{
  title: "Singers",
  subtitle: "Let's play a music quiz",
  avatarImg: './img/topic/siavtar.jpg',
  img: './img/topic/simain.jpg',
  category: "Music"
},
{
  title: "Directors",
  subtitle: "Let's play a music quiz",
  avatarImg: './img/topic/mdavtar.jpg',
  img: './img/topic/mdmain.jpg',
  category: "Music"
}
];

const TitleStyle={
  fontSize:"1em",
    width:"100%",
  fontWeight:"1em"
}

const SubtitleStyle={
  fontSize:"0.8em",
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
  marginLeft:'35%'
}

var style1= {
  background:'#c6ecc6'
}

var cardDivStyle={
   margin:10,
}

var title1={
    paddingLeft:10,
    paddingTop:10,
    marginBottom:5
}
var title2={
  paddingLeft:10,
  marginTop:10,
  marginBottom:10
}
var title3={
    margin:'auto',
    width:'60%'
}
var title4={
     width:"30%",
     margin:'auto'
}

const style_fav={
    width:'5%',
    marginTop:10,
    marginBottom:10,
    float:'right',
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
const iconStyles = {
  marginRight: 24,
  height:60,
  width:60,
};

var SubTopicCard = React.createClass({
  render: function(){
    return(


<Card style ={cardDivStyle}>
    <p style={style_favorite}>{this.props.topics.playersPerMatch} </p>
    <Checkbox
      checkedIcon={<ActionFavorite />}
      uncheckedIcon={<ActionFavoriteBorder />}
      style={style_fav}
      iconStyle={{fill: '#B71C1C'}}
    />
    <p style={style_followers}>{this.props.topics.topicFollowers} </p>
    <Checkbox
      checkedIcon={<People />}
      uncheckedIcon={<PeopleOutline />}
      style={style_fav}
      iconStyle={{fill: '#009688'}}
    />
    <h4 style={title1}>
      {this.props.topics.topicName}
    </h4>
    <h5 style={title2} color={grey500}>{this.props.topics.topicDescription}</h5>

    <CardMedia overlay={
      <div>
      <CardTitle subtitle="No of Users played:15" style={title3} color={grey100}/>
      <MapsPersonPin color={grey100}/>
      </div>
     }>
      <img src={this.props.topics.topicIcon} />
    </CardMedia>


    <CardActions >
      <div className="col-md col-xs col-lg col-sm">
        <RaisedButton label="Play" secondary={true} style={BtnStyle} />
        </div>
     </CardActions>

    </Card>

   );
}
});

module.exports= SubTopicCard;
