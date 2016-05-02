import React from 'react';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

 const style1 = {
   margin: 12,
 };


 const style = {
  height: "40%",
  width: "98%",
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  float: 'right',
};

const card={
  textAlign: 'left',
};


var Recentcard = React.createClass({
  render: function() {
    return (
      <Paper style={style} zDepth={2}>
      <Card>
        <CardHeader style={card}
          title="Rohith"
          subtitle="My Rules, COz i Dont Mind"
          avatar="./img/photo.jpg"
          // title={this.props.activity.title}
          // subtitle={this.props.activity.subtitle}
          // avatar={this.props.activity.avatar}
        />
        <p>
          lorem
        </p>

        <CardActions >
          <RaisedButton label="FaceBook" primary={true} style={style1} />
          <RaisedButton label="Google+" secondary={true} style={style1} />
          <RaisedButton label="Twitter" style={style1} />
        </CardActions>
      </Card>
      </Paper>
    );
  }
});

module.exports= Recentcard;
