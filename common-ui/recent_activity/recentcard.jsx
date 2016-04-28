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
};

var Recentcard = React.createClass({
  render: function() {
    return (
      <Paper style={style} zDepth={2}>
      <Card>
        <CardHeader
          title="Rohith"
          subtitle="My rules, So I don't care"
          avatar="img/photo.jpg"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </p>

        <CardActions>
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
