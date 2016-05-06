import React from 'react';
import TopicCard from './TopicCard';


var TopicsContainer = React.createClass({

  render: function(){

    var topicRows =[];
    
    this.props.topics.forEach(function(topic){
      topicRows.push(
        <TopicCard topic={topic} key={topic.title}/>
      );
    });

    return(
      <div>
        {topicRows}
      </div>

    );
  }
})

module.exports = TopicsContainer;
