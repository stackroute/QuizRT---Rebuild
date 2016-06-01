import React from 'react';
import SubTopicCard from './SubTopicCard';
var SubTopicContainer = React.createClass({
  render: function(){
    var topicsData =[{
      title: "Cricket",
      subtitle: "Let's play a cricket quiz",
      avatarImg: './img/topic/avtar.jpg',
      img: './img/topic/main.jpg',
      category: "Sports"

    },
    {
      title: "Chess",
      subtitle: "Let's play a chess quiz",
      avatarImg: './img/topic/chavtar.jpg',
      img: './img/topic/chesmain.jpg',
      category: "Sports"

    },
    {
      title: "Football",
      subtitle: "Let's play a football",
      avatarImg: './img/topic/foavtar.jpeg',
      img: './img/topic/footmain.jpg',
      category: "Sports"
    },
    {
      title: "Hockey",
      subtitle: "Let's play a hockey",
      avatarImg: './img/topic/hoavtar.jpg',
      img: './img/topic/homain.jpg',
      category: "Sports"
    },
    {
      title: "IndianHistory",
      subtitle: "Let's play history quiz",
      avatarImg: './img/topic/hisavtar.jpg',
      img: './img/topic/hismain.jpg',
      category: "History"
    },
    {
      title: "Monuments",
      subtitle: "Let's play a history quiz",
      avatarImg: './img/topic/monavtar.jpg',
      img: './img/topic/monmain.jpg',
      category: "History"
    },
    {
      title: "GreatLeaders",
      subtitle: "Let's play a history quiz",
      avatarImg: './img/topic/leavtar.jpg',
      img: './img/topic/lemain.png',
      category: "History"
    },
    {
      title: "WorldWars",
      subtitle: "Let's play a history quiz",
      avatarImg: './img/topic/waravtar.jpg',
      img: './img/topic/warmain.jpg',
      category: "History"
    },
    {
      title: "TvCelebs",
      subtitle: "Let's play a celeb quiz",
      avatarImg: './img/topic/tvavtar.jpg',
      img: './img/topic/tvmain.jpg',
      category: "Celebreties"
    },
    {
      title: "Hollywood",
      subtitle: "Let's play celeb quiz",
      avatarImg: './img/topic/hlavtar.jpg',
      img: './img/topic/hlmain.jpg',
      category: "Celebreties"
    },
    {
      title: "IndianCelebs",
      subtitle: "Let's play a celeb quiz",
      avatarImg: './img/topic/inavtar.jpg',
      img: './img/topic/inmain.jpg',
      category: "Celebreties"
    },
    {
      title: "PoliticalCelebs",
      subtitle: "Let's play a celeb quiz",
      avatarImg: './img/topic/poavtar.jpg',
      img: './img/topic/plmain.jpg',
      category: "Celebreties"
    },{
      title: "Instruments",
      subtitle: "Let's play a music quiz",
      avatarImg: './img/topic/miavtar.jpg',
      img: './img/topic/mimain.gif',
      category: "Music"
    },
    {
      title: "Albums",
      subtitle: "Let's play a music quiz",
      avatarImg: './img/topic/maavtar.jpg',
      img: './img/topic/mamain.jpg',
      category: "Music"
    },
    {
      title: "Singers",
      subtitle: "Let's play a music quiz",
      avatarImg: './img/topic/siavtar.jpg',
      img: './img/topic/simain.jpg',
      category: "Music"
    },
    {
      title: "Directors",
      subtitle: "Let's play a music quiz",
      avatarImg: './img/topic/mdavtar.jpg',
      img: './img/topic/mdmain.jpg',
      category: "Music"
    }
    ];
    var allTopics = [];
      topicsData.forEach(function(topic){
        allTopics.push(
            <div className="col-lg-3 col-xs-12 col-md-3 col-sm-3">
              <SubTopicCard topic={topic} key={topic.title}/>
            </div>
        );
      });
    return(
      <div className="row">
              {allTopics}
     </div>
  );
  }
  });


module.exports = SubTopicContainer;
