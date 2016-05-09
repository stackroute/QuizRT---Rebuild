import React from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import SubTopicContainer from '../SubTopics/SubTopicContainer';

const style = {
  margin: 20,
  textAlign: 'center',
};

const stylebtn={
  float:'right',
};

const card={
  textAlign:'left',
  fontSize: 20,
  marginLeft:20,
  width:'80%',
};

var topicsData =[{
  title: "Cricket",
  subtitle: "Let's play a cricket quiz",
  avatarimg: 'img/SubTopicImages/avtar.jpg',
  img: 'img/SubTopicImages/main.jpg',
  category: "Sports"

},
{
  title: "IndianHistory",
  subtitle: "Let's play history quiz",
  avatarimg: 'img/SubTopicImages/hisavtar.jpg',
  img: 'img/SubTopicImages/hismain.jpg',
  category: "History"
},
{
  title: "TvCelebs",
  subtitle: "Let's play a celeb quiz",
  avatarimg: 'img/SubTopicImages/tvavtar.jpg',
  img: 'img/SubTopicImages/tvmain.jpg',
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
          <CardActions>
            <RaisedButton label="See More >>" style={stylebtn}/>
          </CardActions>
            <CardHeader style={card}
               title="Most Popular Topics"
            />
            <SubTopicContainer topics ={topicsData} />

          </Card>
        </Paper>
      </div>
    );
  }
});

module.exports= MostPopularSection;
