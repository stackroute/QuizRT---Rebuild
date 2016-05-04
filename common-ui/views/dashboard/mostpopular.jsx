import React from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import SubTopicContainer from '../SubTopics/SubTopicContainer';

const style = {
  height: '40%',
  width: '98%',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const stylebtn={
  float:'right',
};

const card={
  textAlign:'left',
  fontSize: 20,
  marginLeft:20
};

var topicsData =[{
  title: "Cricket",
  subtitle: "Let's play a cricket quiz",
  avatarImg: './SubTopics/imgs/avtar.jpg',
  img: './SubTopics/imgs/main.jpg',
  category: "Sports"

},
{
  title: "Chess",
  subtitle: "Let's play a chess quiz",
  avatarImg: './SubTopics/imgs/chavtar.jpg',
  img: './SubTopics/imgs/chesmain.jpg',
  category: "Sports"

},
{
  title: "Football",
  subtitle: "Let's play a football",
  avatarImg: './SubTopics/imgs/foavtar.jpeg',
  img: './SubTopics/imgs/footmain.jpg',
  category: "Sports"
},
{
  title: "Hockey",
  subtitle: "Let's play a hockey",
  avatarImg: './SubTopics/imgs/hoavtar.jpg',
  img: './SubTopics/imgs/homain.jpg',
  category: "Sports"
},
{
  title: "IndianHistory",
  subtitle: "Let's play history quiz",
  avatarImg: './SubTopics/imgs/hisavtar.jpg',
  img: './SubTopics/imgs/hismain.jpg',
  category: "History"
},
{
  title: "Monuments",
  subtitle: "Let's play a history quiz",
  avatarImg: './SubTopics/imgs/monavtar.jpg',
  img: './SubTopics/imgs/monmain.jpg',
  category: "History"
},
{
  title: "GraetLeaders",
  subtitle: "Let's play a history quiz",
  avatarImg: './SubTopics/imgs/leavtar.jpg',
  img: './SubTopics/imgs/lemain.png',
  category: "History"
},
{
  title: "WorldWars",
  subtitle: "Let's play a history quiz",
  avatarImg: './SubTopics/imgs/waravtar.jpg',
  img: './SubTopics/imgs/warmain.jpg',
  category: "History"
},
{
  title: "TvCelebs",
  subtitle: "Let's play a celeb quiz",
  avatarImg: './SubTopics/imgs/tvavtar.jpg',
  img: './SubTopics/imgs/tvmain.jpg',
  category: "Celebreties"
},
{
  title: "HollywoodCelebs",
  subtitle: "Let's play a celeb quiz",
  avatarImg: './SubTopics/imgs/hlavtar.jpg',
  img: './SubTopics/imgs/hlmain.jpg',
  category: "Celebreties"
},
{
  title: "IndianCelebs",
  subtitle: "Let's play a celeb quiz",
  avatarImg: './SubTopics/imgs/inavtar.jpg',
  img: './SubTopics/imgs/inmain.jpg',
  category: "Celebreties"
},
{
  title: "PoliticalCelebs",
  subtitle: "Let's play a celeb quiz",
  avatarImg: './SubTopics/imgs/poavtar.jpg',
  img: './SubTopics/imgs/plmain.jpg',
  category: "Celebreties"
},{
  title: "Instruments",
  subtitle: "Let's play a music quiz",
  avatarImg: './SubTopics/imgs/miavtar.jpg',
  img: './SubTopics/imgs/mimain.gif',
  category: "Music"
},
{
  title: "Albums",
  subtitle: "Let's play a music quiz",
  avatarImg: './SubTopics/imgs/maavtar.jpg',
  img: './SubTopics/imgs/mamain.jpg',
  category: "Music"
},
{
  title: "Singers",
  subtitle: "Let's play a music quiz",
  avatarImg: './SubTopics/imgs/siavtar.jpg',
  img: './SubTopics/imgs/simain.jpg',
  category: "Music"
},
{
  title: "Directors",
  subtitle: "Let's play a music quiz",
  avatarImg: './SubTopics/imgs/mdavtar.jpg',
  img: './SubTopics/imgs/mdmain.jpg',
  category: "Music"
}
];

var TopicSection = React.createClass({
  render: function () {
    return (
      <div>
        <Paper style={style} zDepth={2} >
          <Card>
          <CardActions>
            <RaisedButton label="See More >>" style={stylebtn}/>
          </CardActions>
            <CardHeader style={card}
               title="TOPICS"
            />
            <SubTopicContainer topic ={topicsData} />

          </Card>
        </Paper>
      </div>
    );
  }
});

module.exports= TopicSection;
