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


var style1= {

  background:'#c6ecc6'
}

var cardDivStyle={
   width:"80%",
   float:'left',

   padding:10,
   margin:10

}

var title1={
    "font-size":"100%"
}
var title2={
  "font-size":"95%"
}
var title3={

    width:"80%",
    margin:'auto'
}
var title4={
     width:"30%",

     margin:'auto'
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
