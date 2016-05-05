import React from 'react';
import SubTopicCard from './SubTopicCard';


var style ={

}
var SubTopicContainer = React.createClass({

  render: function(){
      var allTheTopics = [];
      this.props.topic.forEach(function(topic){
        allTheTopics.push(
          
            <div className="col-lg-3 col-xs-12 col-md-3 col-sm-3">
            <SubTopicCard topic={topic} key={topic.title}/>
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
