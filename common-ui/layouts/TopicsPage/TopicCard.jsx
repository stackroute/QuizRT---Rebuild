import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import SubTopicContainer from '../SubTopics/SubTopicContainer';
import {List, ListItem} from 'material-ui/List';




//Styles.
const Styles = {
  CardHeaderStyle:{
    "font-size":30
  },
  SubtitleStyle:{
    "font-size":15
  }
};

//Dummy data.
var topicsData =[{
  title: "Cricket",
  subtitle: "Let's play a cricket quiz",
  avatarimg: './layouts/SubTopics/imgs/avtar.jpg',
  img: './layouts/SubTopics/imgs/main.jpg',
  category: "Sports"

},
{
  title: "Chess",
  subtitle: "Let's play a chess quiz",
  avatarimg: './layouts/SubTopics/imgs/chavtar.jpg',
  img: './layouts/SubTopics/imgs/chesmain.jpg',
  category: "Sports"

},
{
  title: "Football",
  subtitle: "Let's play a football quiz",
  avatarimg: './layouts/SubTopics/imgs/foavtar.jpeg',
  img: './layouts/SubTopics/imgs/footmain.jpg',
  category: "Sports"
},
{
  title: "Hockey",
  subtitle: "Let's play a hockey quiz",
  avatarimg: './layouts/SubTopics/imgs/hoavtar.jpg',
  img: './layouts/SubTopics/imgs/homain.jpg',
  category: "Sports"
},
{
  title: "IndianHistory",
  subtitle: "Let's play history quiz",
  avatarimg: './layouts/SubTopics/imgs/hisavtar.jpg',
  img: './layouts/SubTopics/imgs/hismain.jpg',
  category: "History"
},
{
  title: "Monuments",
  subtitle: "Let's play a history quiz",
  avatarimg: './layouts/SubTopics/imgs/monavtar.jpg',
  img: './layouts/SubTopics/imgs/monmain.jpg',
  category: "History"
},
{
  title: "GraetLeaders",
  subtitle: "Let's play a history quiz",
  avatarimg: './layouts/SubTopics/imgs/leavtar.jpg',
  img: './layouts/SubTopics/imgs/lemain.png',
  category: "History"
},
{
  title: "WorldWars",
  subtitle: "Let's play a history quiz",
  avatarimg: './layouts/SubTopics/imgs/waravtar.jpg',
  img: './layouts/SubTopics/imgs/warmain.jpg',
  category: "History"
},

{
  title: "TvCelebs",
  subtitle: "Let's play a celeb quiz",
  avatarimg: './layouts/SubTopics/imgs/tvavtar.jpg',
  img: './layouts/SubTopics/imgs/tvmain.jpg',
  category: "Celebrities"
},
{
  title: "HollywoodCelebs",
  subtitle: "Let's play a celeb quiz",
  avatarimg: './layouts/SubTopics/imgs/hlavtar.jpg',
  img: './layouts/SubTopics/imgs/hlmain.jpg',
  category: "Celebrities"
},
{
  title: "IndianCelebs",
  subtitle: "Let's play a celeb quiz",
  avatarimg: './layouts/SubTopics/imgs/inavtar.jpg',
  img: './layouts/SubTopics/imgs/inmain.jpg',
  category: "Celebrities"
},
{
  title: "PoliticalCelebs",
  subtitle: "Let's play a celeb quiz",
  avatarimg: './layouts/layouts/SubTopics/imgs/poavtar.jpg',
  img: './layouts/SubTopics/imgs/plmain.jpg',
  category: "Celebrities"
},
{
  title: "Instruments",
  subtitle: "Let's play a music quiz",
  avatarimg: './layouts/SubTopics/imgs/miavtar.jpg',
  img: './layouts/SubTopics/imgs/mimain.gif',
  category: "Music"
},
{
  title: "Albums",
  subtitle: "Let's play a music quiz",
  avatarimg: './layouts/SubTopics/imgs/maavtar.jpg',
  img: './layouts/SubTopics/imgs/mamain.jpg',
  category: "Music"
},
{
  title: "Singers",
  subtitle: "Let's play a music quiz",
  avatarimg: './layouts/SubTopics/imgs/siavtar.jpg',
  img: './layouts/SubTopics/imgs/simain.jpg',
  category: "Music"
},
{
  title: "Directors",
  subtitle: "Let's play a music quiz",
  avatarimg: './layouts/SubTopics/imgs/mdavtar.jpg',
  img: './layouts/SubTopics/imgs/mdmain.jpg',
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs col-md col-lg col-sm">
            <Card onExpandChange={this.onExpandChange}  >
              <CardHeader titleStyle={Styles.CardHeaderStyle} subtitleStyle={Styles.SubtitleStyle} title={this.props.topic.title} subtitle={this.props.topic.subtitle} actAsExpander={true} showExpandableButton={true} />
              <CardText expandable={true}>

                <SubTopicContainer topics={this.state.subtopics} />

              </CardText>
            </Card>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = TopicCard;
