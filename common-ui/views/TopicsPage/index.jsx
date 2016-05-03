import React from 'react';
import TopicsContainer from './TopicsContainer';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import LeftNav from '../header/leftnav.jsx';
import {orange500} from 'material-ui/styles/colors';

//Dummy data for category
var topicsData =[ {
  title: "Sports Category",
  category:"Sports",
  subtitle: "This is the sports category",
  text: "Welcome to the Sports Category. Here you will find various sub categories to play quizzes in."
},
{
  title: "Celebrities Category",
  category:"Celebrities",
  subtitle: "This is the tv series category",
  text: "Welcome to the tv series Category. Here you will find various sub categories to play quizzes in."
},
{
  title: "History Category",
  category:"History",
  subtitle: "This is the history category",
  text: "Welcome to the history Category. Here you will find various sub categories to play quizzes in."
},
{
  title: "Music Category",
  category:"Music",
  subtitle: "This is the music category",
  text: "Welcome to the Music Category. Here you will find various sub categories to play quizzes in."
}
];



//Styles
const searchBarDiv = {
  width:"80%",
  paddingLeft:10,
  paddingRight:10,
  margin:'auto'
};

const style = {
  underline: {
    color: orange500,

  }
};


var TopicPage = React.createClass({
  getInitialState: function(){

    return {allTopics: topicsData};
  },
  filterTopics: function(event){

    var outerThis = this;
    var rows =[];
    topicsData.forEach(function(topic){
      if(topic.title.toLowerCase().indexOf(event.target.value.toLowerCase())!==-1)
      rows.push(topic);
    });
    outerThis.setState({allTopics:rows});
  },

  render: function(){
    return(
      <div>
        <LeftNav />
        <div >
          <TextField
            hintText="Search for Categories" hintStyle={style.underline} onChange={this.filterTopics}
            style={searchBarDiv}
            />
        </div>
        <TopicsContainer topics={this.state.allTopics} />
      </div>
    );
  }
})
module.exports = TopicPage;
