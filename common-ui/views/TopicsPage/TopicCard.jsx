import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import SubTopicContainer from '../SubTopics/SubTopicContainer';
import {List, ListItem} from 'material-ui/List';


//Styles.
const Styles = {
  CardHeaderStyle:{
    "font-size":22
  },
  SubtitleStyle:{
    "font-size":15
  }
};

 
var TopicCard = React.createClass({

  getInitialState: function(){
    return {subtopics: []}
  },
  onExpandChange: function(){
    var outerThis =this;
    var topics=[];
    topicsData.forEach(function(subtopic){
      if(subtopic.category.toLowerCase().indexOf(outerThis.props.topic.category.toLowerCase())!==-1)
      topics.push(subtopic);
    });
    this.setState({subtopics:topics});
  },

  render: function(){
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs col-md col-lg col-sm">
            <Card onExpandChange={this.onExpandChange}  >
              <CardHeader titleStyle={Styles.CardHeaderStyle} subtitleStyle={Styles.SubtitleStyle}
                title={this.props.topic.title}
                 subtitle={this.props.topic.subtitle}

                  actAsExpander={true} showExpandableButton={true} />
              <CardText expandable={true}>




                <SubTopicContainer topics={this.state.subtopics} />

              </CardText>
            </Card>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = TopicCard;
