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

const tour_header={
  margin:20,
  textAlign:'center',
  paddingTop:20,
}

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

  contextTypes :{
    router : React.PropTypes.object
  },

  handleTopics : function(){
    event.preventDefault();
    this.context.router.push('/topics');
  },

  render: function () {
    return (
      <div>
        <Paper style={style} zDepth={2} >
          <Card>
          <h1 style={tour_header}>My Favorite Topics</h1>
            <SubTopicContainer topics ={this.props.topics} />
            <FlatButton label="See More" style={stylebtn}/>
            <FlatButton label="Add More" style={stylebtn}
              onTouchTap={this.handleTopics.bind(this)}/>
          </Card>
        </Paper>
      </div>
    );
  }
});
export default MyFavoriteSection;
