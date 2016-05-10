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
  width:'50%',

};

const cardHeader={
  textAlign:'left',
};

var topicsData =[
{
  title: "Indian Celebs",
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
            <CardHeader style={cardHeader}
               title="My Favorite Topics"
            />
            <SubTopicContainer topics ={topicsData} />
            <FlatButton label="See More" style={stylebtn}/>
            <FlatButton label="Add More" style={stylebtn}/>
          </Card>
        </Paper>
      </div>
    );
  }
});

module.exports= MyFavoriteSection;
