//Sample Data to be passed. Put it inside the parent container of this.
// var topicsData =[{
//   title: "Cricket",
//   subtitle: "Let's play a cricket quiz",
//   avatarImg: './imgs/avtar.jpg',
//   img: './imgs/main.jpg',
//   category: "Sports"
//
// },
// {
//   title: "Chess",
//   subtitle: "Let's play a chess quiz",
//   avatarImg: './imgs/chavtar.jpg',
//   img: './imgs/chesmain.jpg',
//   category: "Sports"
//
// },
// {
//   title: "Football",
//   subtitle: "Let's play a football quiz",
//   avatarImg: './imgs/foavtar.jpeg',
//   img: './imgs/footmain.jpg',
//   category: "Sports"
// },
// {
//   title: "Hockey",
//   subtitle: "Let's play a hockey quiz",
//   avatarImg: './imgs/hoavtar.jpg',
//   img: './imgs/homain.jpg',
//   category: "Sports"
// },
// {
//   title: "IndianHistory",
//   subtitle: "Let's play history quiz",
//   avatarImg: './imgs/hisavtar.jpg',
//   img: './imgs/hismain.jpg',
//   category: "History"
// },
// {
//   title: "Monuments",
//   subtitle: "Let's play a history quiz",
//   avatarImg: './imgs/monavtar.jpg',
//   img: './imgs/monmain.jpg',
//   category: "History"
// },
// {
//   title: "GraetLeaders",
//   subtitle: "Let's play a history quiz",
//   avatarImg: './imgs/leavtar.jpg',
//   img: './imgs/lemain.png',
//   category: "History"
// },
// {
//   title: "WorldWars",
//   subtitle: "Let's play a history quiz",
//   avatarImg: './imgs/waravtar.jpg',
//   img: './imgs/warmain.jpg',
//   category: "History"
// },
// {
//   title: "TvCelebs",
//   subtitle: "Let's play a celeb quiz",
//   avatarImg: './imgs/tvavtar.jpg',
//   img: './imgs/tvmain.jpg',
//   category: "Celebreties"
// },
// {
//   title: "HollywoodCelebs",
//   subtitle: "Let's play a celeb quiz",
//   avatarImg: './imgs/hlavtar.jpg',
//   img: './imgs/hlmain.jpg',
//   category: "Celebreties"
// },
// {
//   title: "IndianCelebs",
//   subtitle: "Let's play a celeb quiz",
//   avatarImg: './imgs/inavtar.jpg',
//   img: './imgs/inmain.jpg',
//   category: "Celebreties"
// },
// {
//   title: "PoliticalCelebs",
//   subtitle: "Let's play a celeb quiz",
//   avatarImg: './imgs/poavtar.jpg',
//   img: './imgs/plmain.jpg',
//   category: "Celebreties"
// },{
//   title: "Instruments",
//   subtitle: "Let's play a music quiz",
//   avatarImg: './imgs/miavtar.jpg',
//   img: './imgs/mimain.gif',
//   category: "Music"
// },
// {
//   title: "Albums",
//   subtitle: "Let's play a music quiz",
//   avatarImg: './imgs/maavtar.jpg',
//   img: './imgs/mamain.jpg',
//   category: "Music"
// },
// {
//   title: "Singers",
//   subtitle: "Let's play a music quiz",
//   avatarImg: './imgs/siavtar.jpg',
//   img: './imgs/simain.jpg',
//   category: "Music"
// },
// {
//   title: "Directors",
//   subtitle: "Let's play a music quiz",
//   avatarImg: './imgs/mdavtar.jpg',
//   img: './imgs/mdmain.jpg',
//   category: "Music"
// }
// ];


import React from 'react';

import SubTopicCard from './SubTopicCard';

var SubTopicContainer = React.createClass({

  render: function(){
      var allTheTopics = [];
      this.props.topic.forEach(function(topic){
        allTheTopics.push(
            <div className="col-lg-3 col-xs-12 col-md-3 col-sm-3">
            <SubTopicCard topic={topic} key={topic.title}/>


            </div>


        );
      });
    return(

      <div className="row">

              {allTheTopics}

     </div>
  ); 
  }
  });


module.exports = SubTopicContainer;
