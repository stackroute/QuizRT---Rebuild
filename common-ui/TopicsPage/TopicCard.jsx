import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';



var TopicCard = React.createClass({

  render: function(){
    return(
      <Card>
        <CardHeader title={this.props.topic.title} subtitle={this.props.topic.subtitle} actAsExpander={true} showExpandableButton={true} />
        <CardText expandable={true}>
          {this.props.topic.text}
        </CardText>
      </Card>
    );
  }

});

module.exports = TopicCard;
