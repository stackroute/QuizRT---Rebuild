import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import SubTopicContainer from '../SubTopics/SubTopicContainer';
import FlatButton from 'material-ui/FlatButton';

//Styles.
const Styles = {
  CardHeaderStyle:{
    "font-size":22
  },
  SubtitleStyle:{
    "font-size":15
  }
};

//Dummy data.
var topicsData =[{
  title: "Cricket",
  subtitle: "Let's play a cricket quiz",
  avatarimg: './img/SubTopicImages/avtar.jpg',
  img: './img/SubTopicImages/main.jpg',
  category: "Sports"

},
{
  title: "Chess",
  subtitle: "Let's play a chess quiz",
  avatarimg: './img/SubTopicImages/chavtar.jpg',
  img: './img/SubTopicImages/chesmain.jpg',
  category: "Sports"

},
{
  title: "Football",
  subtitle: "Let's play a football quiz",
  avatarimg: './img/SubTopicImages/foavtar.jpeg',
  img: './img/SubTopicImages/footmain.jpg',
  category: "Sports"
},
{
  title: "Hockey",
  subtitle: "Let's play a hockey quiz",
  avatarimg: './img/SubTopicImages/hoavtar.jpg',
  img: './img/SubTopicImages/homain.jpg',
  category: "Sports"
},
{
  title: "Indian History",
  subtitle: "Let's play history quiz",
  avatarimg: './img/SubTopicImages/hisavtar.jpg',
  img: './img/SubTopicImages/hismain.jpg',
  category: "History"
},
{
  title: "Monuments",
  subtitle: "Let's play a history quiz",
  avatarimg: './img/SubTopicImages/monavtar.jpg',
  img: './img/SubTopicImages/monmain.jpg',
  category: "History"
},
{
  title: "Great Leaders",
  subtitle: "Let's play a history quiz",
  avatarimg: './img/SubTopicImages/leavtar.jpg',
  img: './img/SubTopicImages/lemain.png',
  category: "History"
},
{
  title: "World Wars",
  subtitle: "Let's play a history quiz",
  avatarimg: './img/SubTopicImages/waravtar.jpg',
  img: './img/SubTopicImages/warmain.jpg',
  category: "History"
},

{
  title: "Tv Celebs",
  subtitle: "Let's play a celeb quiz",
  avatarimg: './img/SubTopicImages/tvavtar.jpg',
  img: './img/SubTopicImages/tvmain.jpg',
  category: "Celebrities"
},
{
  title: "Hollywood Celebs",
  subtitle: "Let's play a celeb quiz",
  avatarimg: './img/SubTopicImages/hlavtar.jpg',
  img: './img/SubTopicImages/hlmain.jpg',
  category: "Celebrities"
},
{
  title: "Indian Celebs",
  subtitle: "Let's play a celeb quiz",
  avatarimg: './img/SubTopicImages/inavtar.jpg',
  img: './img/SubTopicImages/inmain.jpg',
  category: "Celebrities"
},
{
  title: "Political Celebs",
  subtitle: "Let's play a celeb quiz",
  avatarimg: './img/SubTopicImages/poavtar.jpg',
  img: './img/SubTopicImages/plmain.jpg',
  category: "Celebrities"
},
{
  title: "Instruments",
  subtitle: "Let's play a music quiz",
  avatarimg: './img/SubTopicImages/miavtar.jpg',
  img: './img/SubTopicImages/mimain.gif',
  category: "Music"
},
{
  title: "Albums",
  subtitle: "Let's play a music quiz",
  avatarimg: './img/SubTopicImages/maavtar.jpg',
  img: './img/SubTopicImages/mamain.jpg',
  category: "Music"
},
{
  title: "Singers",
  subtitle: "Let's play a music quiz",
  avatarimg: './img/SubTopicImages/siavtar.jpg',
  img: './img/SubTopicImages/simain.jpg',
  category: "Music"
},
{
  title: "Directors",
  subtitle: "Let's play a music quiz",
  avatarimg: './img/SubTopicImages/mdavtar.jpg',
  img: './img/SubTopicImages/mdmain.jpg',
  category: "Music"
}
];

const styleMoreButton ={
  float:'right'
}

var NewTopicCard = React.createClass({

  getInitialState: function(){
    return {subtopics: []}
  },

  componentWillMount:function(){
    var outerThis =this;
    var topics=[];
    topicsData.forEach(function(subtopic){
      if(subtopic.category.toLowerCase().indexOf(outerThis.props.topic.category.toLowerCase())!==-1)
      topics.push(subtopic);
    });
    this.setState({subtopics:topics});
    console.log(this.state.subtopics)
  },

  render: function(){

    return(
                <div className="container-fluid">
                <h2>{this.props.topic.title}

                </h2>


                  <SubTopicContainer topics={this.state.subtopics} />
                  <FlatButton label="More" secondary={true} style={styleMoreButton}></FlatButton>

                </div>


    );
  }

});

module.exports = NewTopicCard;
