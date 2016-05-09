import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import SubTopicContainer from '../SubTopics/SubTopicContainer';
import {List, ListItem} from 'material-ui/List';




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
  avatarimg: './views/SubTopics/imgs/avtar.jpg',
  img: './views/SubTopics/imgs/main.jpg',
  category: "Sports"

},
{
  title: "Chess",
  subtitle: "Let's play a chess quiz",
  avatarimg: './views/SubTopics/imgs/chavtar.jpg',
  img: './views/SubTopics/imgs/chesmain.jpg',
  category: "Sports"

},
{
  title: "Football",
  subtitle: "Let's play a football quiz",
  avatarimg: './views/SubTopics/imgs/foavtar.jpeg',
  img: './views/SubTopics/imgs/footmain.jpg',
  category: "Sports"
},
{
  title: "Hockey",
  subtitle: "Let's play a hockey quiz",
  avatarimg: './views/SubTopics/imgs/hoavtar.jpg',
  img: './views/SubTopics/imgs/homain.jpg',
  category: "Sports"
},
{
  title: "Indian History",
  subtitle: "Let's play history quiz",
  avatarimg: './views/SubTopics/imgs/hisavtar.jpg',
  img: './views/SubTopics/imgs/hismain.jpg',
  category: "History"
},
{
  title: "Monuments",
  subtitle: "Let's play a history quiz",
  avatarimg: './views/SubTopics/imgs/monavtar.jpg',
  img: './views/SubTopics/imgs/monmain.jpg',
  category: "History"
},
{
  title: "Great Leaders",
  subtitle: "Let's play a history quiz",
  avatarimg: './views/SubTopics/imgs/leavtar.jpg',
  img: './views/SubTopics/imgs/lemain.png',
  category: "History"
},
{
  title: "World Wars",
  subtitle: "Let's play a history quiz",
  avatarimg: './views/SubTopics/imgs/waravtar.jpg',
  img: './views/SubTopics/imgs/warmain.jpg',
  category: "History"
},

{
  title: "Tv Celebs",
  subtitle: "Let's play a celeb quiz",
  avatarimg: './views/SubTopics/imgs/tvavtar.jpg',
  img: './views/SubTopics/imgs/tvmain.jpg',
  category: "Celebrities"
},
{
  title: "Hollywood Celebs",
  subtitle: "Let's play a celeb quiz",
  avatarimg: './views/SubTopics/imgs/hlavtar.jpg',
  img: './views/SubTopics/imgs/hlmain.jpg',
  category: "Celebrities"
},
{
  title: "Indian Celebs",
  subtitle: "Let's play a celeb quiz",
  avatarimg: './views/SubTopics/imgs/inavtar.jpg',
  img: './views/SubTopics/imgs/inmain.jpg',
  category: "Celebrities"
},
{
  title: "Political Celebs",
  subtitle: "Let's play a celeb quiz",
  avatarimg: './views/SubTopics/imgs/poavtar.jpg',
  img: './views/SubTopics/imgs/plmain.jpg',
  category: "Celebrities"
},
{
  title: "Instruments",
  subtitle: "Let's play a music quiz",
  avatarimg: './views/SubTopics/imgs/miavtar.jpg',
  img: './views/SubTopics/imgs/mimain.gif',
  category: "Music"
},
{
  title: "Albums",
  subtitle: "Let's play a music quiz",
  avatarimg: './views/SubTopics/imgs/maavtar.jpg',
  img: './views/SubTopics/imgs/mamain.jpg',
  category: "Music"
},
{
  title: "Singers",
  subtitle: "Let's play a music quiz",
  avatarimg: './views/SubTopics/imgs/siavtar.jpg',
  img: './views/SubTopics/imgs/simain.jpg',
  category: "Music"
},
{
  title: "Directors",
  subtitle: "Let's play a music quiz",
  avatarimg: './views/SubTopics/imgs/mdavtar.jpg',
  img: './views/SubTopics/imgs/mdmain.jpg',
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
              <CardHeader titleStyle={Styles.CardHeaderStyle} subtitleStyle={Styles.SubtitleStyle}
                title={this.props.topic.title}
                 subtitle={this.props.topic.subtitle}

                  actAsExpander={true} showExpandableButton={true} />
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
