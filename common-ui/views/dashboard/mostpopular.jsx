import React from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import SubTopicContainer from '../SubTopics/SubTopicContainer';

const style = {
  marginLeft:0,
  marginTop:20,
  marginBottom:20,
  marginRight:0,
};

const stylebtn={
  float:'none',
  width:'100%',
};

const cardHeader={
  textAlign:'left',
};

var topicsData =[{
  title: "Cricket",
  subtitle: "Let's play a cricket quiz",
  avatarimg: 'img/SubTopicImages/avtar.jpg',
  img: 'img/SubTopicImages/main.jpg',
  category: "Sports"

},
{
  title: "Indian History",
  subtitle: "Let's play history quiz",
  avatarimg: 'img/SubTopicImages/hisavtar.jpg',
  img: 'img/SubTopicImages/hismain.jpg',
  category: "History"
},
{
  title: "TvCelebs",
  subtitle: "Let's play a celeb quiz",
  avatarimg: 'img/SubTopicImages/tvavtar.jpg',
  img: 'img/SubTopicImages//tvmain.jpg',
  category: "Celebreties"
},
{
  title: "Instruments",
  subtitle: "Let's play a music quiz",
  avatarimg: 'img/SubTopicImages/miavtar.jpg',
  img: 'img/SubTopicImages/mimain.gif',
  category: "Music"
}
];

var MostPopularSection = React.createClass({
  render: function () {
    return (
      <div>
        <Paper style={style} zDepth={2} >
          <Card>
            <CardHeader style={cardHeader}
               title="Most Popular Topics"
            />
            <SubTopicContainer topics ={topicsData} />
            <FlatButton label="See More" style={stylebtn}/>

          </Card>
        </Paper>
      </div>
    );
  }
});

module.exports= MostPopularSection;
