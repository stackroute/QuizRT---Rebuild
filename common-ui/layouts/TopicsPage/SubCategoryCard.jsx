import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

//Styles
const styles={
  width: "20%",
  height:"20%",
  padding: 10
};

var SubCategoryCard = React.createClass({
  render: function(){
    return(
      <Card style={styles}>
        <div>

          <CardHeader
            title={this.props.tournament.title}

            avatar={this.props.tournament.AvatarURL}
            />

          <CardMedia>
            <img src={this.props.tournament.URL}  />
          </CardMedia>

        </div>
        <div>

          <CardActions>
            <RaisedButton label="Register" secondary={true}  />
            <RaisedButton label="Play" primary ={true}   />
          </CardActions>
          
        </div>
      </Card>
    );
  }
});

module.exports = SubCategoryCard;
