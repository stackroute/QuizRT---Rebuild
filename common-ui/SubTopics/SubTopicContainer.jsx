
import React from 'react';
//import SubTopicCard from './SubTopicCard';
//import SubTopicCard2 from './SubTopicCard2';
//import SubTopicCard3 from './SubTopicCard3';
import SubTopicCard from './SubTopicCard';

var SubTopicContainer = React.createClass({

  render: function(){
      var allTheTopics = [];
      this.props.topics.forEach(function(topic){
        allTheTopics.push(<SubTopicCard topic={topic} key={topic.title}/>);
      })
    return(

        <div>
        {allTheTopics}
         </div>


    );
  }
})

module.exports = SubTopicContainer;
