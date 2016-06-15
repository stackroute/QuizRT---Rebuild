import React from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const cardHeader={
    textAlign:'center',
};

const quizstyle={
  marginTop:20,
  marginBottom:20,
  textAlign: 'center',
};

const style_btn={
  textAlign:'center',
  margin:5
}

var QuizWar=React.createClass({

  contextTypes :{
    router : React.PropTypes.object
  },

  handleQuizwarTouch : function(){
    event.preventDefault();
    this.context.router.push('/quiz');
  },

  render:function (){
    return (
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-md-6 col-lg-4">
          <Paper style={quizstyle} zDepth={2} >
            <Card>
                <CardMedia>
                  <img src="img/quizwar/quizwar.jpg" />
                </CardMedia>
                  <CardTitle title="Quiz-War" subtitle="There's no charge for the AWESOMENESS, Play & Earn the reward of looking awesome."/>
                    <RaisedButton label="Play" secondary={true} style={style_btn}
                      onTouchTap={this.handleQuizwarTouch.bind(this)}/>
              </Card>
            </Paper>
          </div>
        </div>
    );
  }
});

export default QuizWar;
