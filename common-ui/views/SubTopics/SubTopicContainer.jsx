import React from 'react';

import SubTopicCard from './SubTopicCard';

var SubTopicContainer = React.createClass({

  render: function(){
      var allTheTopics = [];
      var that = this;
      this.props.topics.forEach(function(topic){
        allTheTopics.push(
            <div className="col-lg-3 col-xs-12 col-md-3 col-sm-3">
              <SubTopicCard {...that.props}  topic={topic} key={topic.topicName}  />
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
