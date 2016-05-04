import React from 'react';
import SubTopicCard from './SubTopicCard';


var style ={
 
}
var SubTopicContainer = React.createClass({

  render: function(){
      var allTheTopics = [];
      this.props.topic.forEach(function(topic){
        allTheTopics.push(
            <div  className="col-xs-12 col-lg-3 col-md-4 col-sm-6">

            <SubTopicCard topic={topic} key={topic.title} />
            </div>


        );
      })
    return(

      <div className="row">

              {allTheTopics}

     </div>


    );
  }
})

module.exports = SubTopicContainer;
