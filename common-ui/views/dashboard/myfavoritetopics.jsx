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
};

var topicsData =[
{
  title: "IndianCelebs",
  subtitle: "Let's play a celeb quiz",
  avatarimg: 'img/SubTopicImages/inavtar.jpg',
  img: 'img/SubTopicImages/inmain.jpg',
  category: "Celebreties"
},
{
  title: "Singers",
  subtitle: "Let's play a music quiz",
  avatarimg: 'img/SubTopicImages/siavtar.jpg',
  img: 'img/SubTopicImages/simain.jpg',
  category: "Music"
}
];

var MyFavoriteSection = React.createClass({
  render: function () {
    return (
      <div>
        <Paper style={style} zDepth={2} >
          <Card>
          <CardActions>
            <RaisedButton label="Add More >>" style={stylebtn}/>
          </CardActions>
            <CardHeader style={card}
               title="My Favorite Topics"
            />
            <SubTopicContainer topic ={topicsData} />

          </Card>
        </Paper>
      </div>
    );
  }
});

module.exports= MyFavoriteSection;
