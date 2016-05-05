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
  avatarImg: './views/SubTopics/imgs/avtar.jpg',
  img: './views/SubTopics/imgs/main.jpg',
  category: "Sports"

},
{
  title: "IndianHistory",
  subtitle: "Let's play history quiz",
  avatarImg: './views/SubTopics/imgs/hisavtar.jpg',
  img: './views/SubTopics/imgs/hismain.jpg',
  category: "History"
},
{
  title: "TvCelebs",
  subtitle: "Let's play a celeb quiz",
  avatarImg: './views/SubTopics/imgs/tvavtar.jpg',
  img: './views/SubTopics/imgs/tvmain.jpg',
  category: "Celebreties"
},
{
  title: "Instruments",
  subtitle: "Let's play a music quiz",
  avatarImg: './views/SubTopics/imgs/miavtar.jpg',
  img: './views/SubTopics/imgs/mimain.gif',
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
            <SubTopicContainer topic ={topicsData} />

          </Card>
        </Paper>
      </div>
    );
  }
});

module.exports= MostPopularSection;
