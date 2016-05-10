import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import SubTopicContainer from '../SubTopics/SubTopicContainer';
import FlatButton from 'material-ui/FlatButton';
var API = require('../../../rest-server/json-server/api/api.js');

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
const styleMoreButton ={
  float:'right'
}
var topicsData;
var NewTopicCard = React.createClass({

  getInitialState: function(){
    return {subtopics: [],topicsData:[]}
  },
  componentDidMount: function() {


  },


  componentWillMount:function(){
    var outerThis =this;
     var topics=[];
      API.getAllTopics(function(data){
         this.setState({topicsData:data});
         this.state.topicsData.forEach(function(subtopic){
           if(subtopic.category.toLowerCase().indexOf(outerThis.props.topic.category.toLowerCase())!==-1)
           topics.push(subtopic);
         });
         this.setState({subtopics:topics});
     }.bind(this));
   },

  render: function(){

    return(
                <div className="container-fluid">
                <h2>{this.props.topic.title}

                </h2>


                  <SubTopicContainer topics={this.state.subtopics} />
                  <FlatButton label="More" secondary={true} style={styleMoreButton}></FlatButton>

                </div>


    );
  }

});

module.exports = NewTopicCard;
