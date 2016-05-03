import React from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const style = {
  height: 500,
  width: '98%',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const card={
  textAlign:'center',
};

var TournamentSection = React.createClass({
  render: function () {
    return (
      <div>
        <Paper style={style} zDepth={2} >
          <Card>
            <CardHeader style={card}
               title="TOURNAMENTS"
            />
          </Card>
        </Paper>
      </div>
    );
  }
});

module.exports= TournamentSection;
