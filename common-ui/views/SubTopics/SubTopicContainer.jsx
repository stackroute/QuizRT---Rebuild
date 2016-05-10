import React from 'react';

import SubTopicCard from './SubTopicCard';

var SubTopicContainer = React.createClass({

  getDefaultProps: function(){
    return{
     topics :[{

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
]
}
  },
  render: function(){
      var allTheTopics = [];
      this.props.topics.forEach(function(topic){
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
