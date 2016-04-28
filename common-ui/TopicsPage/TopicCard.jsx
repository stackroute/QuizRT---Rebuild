import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import SubTopicContainer from '../SubTopics/SubTopicContainer';
import {List, ListItem} from 'material-ui/List';

const styles = {
  height:"100%"
}

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
 subtitle: "Let's play a football quiz",
 avatarImg: './SubTopics/imgs/foavtar.jpeg',
 img: './SubTopics/imgs/footmain.jpg',
 category: "Sports"
},
{
 title: "Hockey",
 subtitle: "Let's play a hockey quiz",
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
 category: "Celebrities"
},
{
 title: "HollywoodCelebs",
 subtitle: "Let's play a celeb quiz",
 avatarImg: './SubTopics/imgs/hlavtar.jpg',
 img: './SubTopics/imgs/hlmain.jpg',
 category: "Celebrities"
},
{
 title: "IndianCelebs",
 subtitle: "Let's play a celeb quiz",
 avatarImg: './SubTopics/imgs/inavtar.jpg',
 img: './SubTopics/imgs/inmain.jpg',
 category: "Celebrities"
},
{
 title: "PoliticalCelebs",
 subtitle: "Let's play a celeb quiz",
 avatarImg: './SubTopics/imgs/poavtar.jpg',
 img: './SubTopics/imgs/plmain.jpg',
 category: "Celebrities"
},
{
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


var TopicCard = React.createClass({

  getInitialState: function(){
    return {subtopics: []}
  },
  onExpandChange: function(){
  var outerThis =this;
    var topics=[];
    topicsData.forEach(function(subtopic){
      if(subtopic.category.toLowerCase().indexOf(outerThis.props.topic.category.toLowerCase())!==-1)
        topics.push(subtopic);
    });
    this.setState({subtopics:topics});
  },

  render: function(){
    return(
      <Card onExpandChange={this.onExpandChange} style={styles} >
        <CardHeader title={this.props.topic.title} subtitle={this.props.topic.subtitle} actAsExpander={true} showExpandableButton={true} />
        <CardText expandable={true} style={styles}>

                <SubTopicContainer topics={this.state.subtopics} />
             


        </CardText>
      </Card>
    );
  }

});

module.exports = TopicCard;
