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
<<<<<<< HEAD
  avatarImg: './views/SubTopics/imgs/avtar.jpg',
  img: './views/SubTopics/imgs/main.jpg',
=======
  avatarimg: 'img/SubTopicImages/avtar.jpg',
  img: 'img/SubTopicImages/main.jpg',
>>>>>>> 462e3e3d5a2dd3d6b6a34200406b0c8784112e37
  category: "Sports"

},
{
  title: "IndianHistory",
  subtitle: "Let's play history quiz",
<<<<<<< HEAD
  avatarImg: './views/SubTopics/imgs/hisavtar.jpg',
  img: './views/SubTopics/imgs/hismain.jpg',
=======
  avatarimg: 'img/SubTopicImages/hisavtar.jpg',
  img: 'img/SubTopicImages/hismain.jpg',
>>>>>>> 462e3e3d5a2dd3d6b6a34200406b0c8784112e37
  category: "History"
},
{
  title: "TvCelebs",
  subtitle: "Let's play a celeb quiz",
<<<<<<< HEAD
  avatarImg: './views/SubTopics/imgs/tvavtar.jpg',
  img: './views/SubTopics/imgs/tvmain.jpg',
=======
  avatarimg: 'img/SubTopicImages/tvavtar.jpg',
  img: 'img/SubTopicImages//tvmain.jpg',
>>>>>>> 462e3e3d5a2dd3d6b6a34200406b0c8784112e37
  category: "Celebreties"
},
{
  title: "Instruments",
  subtitle: "Let's play a music quiz",
<<<<<<< HEAD
  avatarImg: './views/SubTopics/imgs/miavtar.jpg',
  img: './views/SubTopics/imgs/mimain.gif',
=======
  avatarimg: 'img/SubTopicImages/miavtar.jpg',
  img: 'img/SubTopicImages/mimain.gif',
>>>>>>> 462e3e3d5a2dd3d6b6a34200406b0c8784112e37
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
