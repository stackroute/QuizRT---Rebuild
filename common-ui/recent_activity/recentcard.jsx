import React from 'react';
// import {Card, CardActions, CardHeader} from 'material-ui/Card';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

var data=[
  {
    title:"Rohith",
    subtitle: "My rules, So I don't care",
    avatar:"img/photo.jpg",
  }
];

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

const badge={
  height: 250,
  width: "50%",
  maxWidth:"70%",
  minWidth: "40%",
};

var Recentcard = React.createClass({
  render: function() {
    return (
      <div class="col-xs-12 col-sm-8 col-md-6 col-lg-4">
      <Paper style={style} zDepth={2}>
      <Card>
        <CardHeader style={card}
           title="Rohith"
           subtitle="My rules, Coz I dont care"
           avatar="img/photo.jpg"
        />
        <p>
          {this.props.activity.description}
        </p>
        <CardMedia>
          <img src={this.props.activity.image} style={badge}/>
        </CardMedia>

        <CardActions >
          <RaisedButton label="FaceBook" primary={true} style={style1} />
          <RaisedButton label="Google+" secondary={true} style={style1} />
          <RaisedButton label="Twitter" style={style1} />
        </CardActions>
      </Card>
      </Paper>
    </div>
    );
  }
});

module.exports= Recentcard;
