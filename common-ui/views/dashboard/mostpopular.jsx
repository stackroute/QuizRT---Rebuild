import React from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import SubTopicContainer from '../SubTopics/SubTopicContainer';
var baseurl='http://localhost:8080';

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
  category: "Sports",
  favorite:23,
  followers:6453

},
{
  title: "Indian History",
  subtitle: "Let's play history quiz",
  avatarimg: 'img/SubTopicImages/hisavtar.jpg',
  img: 'img/SubTopicImages/hismain.jpg',
  category: "History",
  favorite:15,
  followers:3327
},
{
  title: "TvCelebs",
  subtitle: "Let's play a celeb quiz",
  avatarimg: 'img/SubTopicImages/tvavtar.jpg',
  img: 'img/SubTopicImages//tvmain.jpg',
  category: "Celebreties",
  favorite:21,
  followers:8532
},
{
  title: "Instruments",
  subtitle: "Let's play a music quiz",
  avatarimg: 'img/SubTopicImages/miavtar.jpg',
  img: 'img/SubTopicImages/mimain.gif',
  category: "Music",
  favorite:33,
  followers:9910
}
];

var MostPopularSection = React.createClass({

getInitialState:function(){
    return{topics:[]}
},

  componentDidMount:function(){
    $.ajax({
      url: baseurl+'/topics/mostPopular',
      dataType:'json',
      success: function(data){
        // console.log('got success---------------------');
        console.log(JSON.stringify(data));
        this.setState({topics:data})
        // console.log('------------------------'+data+'----------------------');
      }.bind(this),
      error:function(err){
        console.log(err);
        console.log('error');
      }
    })
  },

  render: function () {
    return (
      <div>
        <Paper style={style} zDepth={2} >
          <Card>
          <h1 style={tour_header}>Most Popular topics</h1>
            <SubTopicContainer topics ={this.state.topics} />
            <FlatButton label="See More" style={stylebtn}/>

          </Card>
        </Paper>
      </div>
    );
  }
});

export default MostPopularSection;
