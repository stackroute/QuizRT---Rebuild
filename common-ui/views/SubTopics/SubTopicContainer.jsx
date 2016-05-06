import React from 'react';
import SubTopicCard from './SubTopicCard';


<<<<<<< HEAD
=======
var style ={
  textAlign:'center',
};

>>>>>>> 462e3e3d5a2dd3d6b6a34200406b0c8784112e37
var SubTopicContainer = React.createClass({

  render: function(){
      var allTheTopics = [];
      this.props.topic.forEach(function(topic){
        allTheTopics.push(
<<<<<<< HEAD
            <div className="col-lg-3 col-xs-12 col-md-3 col-sm-3">
            <SubTopicCard topic={topic} key={topic.title}/>
=======

            <div  className="col-xs-12 col-lg-3 col-md-4 col-sm-6" style1>

            <SubTopicCard topic={topic} key={topic.title} />

>>>>>>> 462e3e3d5a2dd3d6b6a34200406b0c8784112e37
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
