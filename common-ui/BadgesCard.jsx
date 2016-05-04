import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';



var BadgesCard = React.createClass({
  render: function(){
    return(


<Card>

    <CardHeader
      title={this.props.badge.title}

    />

    <CardMedia>
      <img src={this.props.badge.img} />
    </CardMedia>








    </Card>

  );
}
});

module.exports= BadgesCard;
