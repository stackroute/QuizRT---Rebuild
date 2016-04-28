 import React from 'react';
 import TopicsContainer from './TopicsContainer';
 import TextField from 'material-ui/TextField';
 import IconButton from 'material-ui/IconButton';
 import LeftNav from './header/leftnav.jsx';

 var topicsData =[ {
   title: "Sports Category",
   subtitle: "This is the sports category",
   text: "Welcome to the Sports Category. Here you will find various sub categories to play quizzes in."
 },
 {
   title: "TV Series Category",
   subtitle: "This is the tv series category",
   text: "Welcome to the tv series Category. Here you will find various sub categories to play quizzes in."
 },
 {
   title: "History Category",
   subtitle: "This is the history category",
   text: "Welcome to the history Category. Here you will find various sub categories to play quizzes in."
 },
 {
   title: "Music Category",
   subtitle: "This is the music category",
   text: "Welcome to the Music Category. Here you will find various sub categories to play quizzes in."
 }
];

 var topicsData1 =[ {
   title: "Sports Category",
   subtitle: "This is the sports category",
   text: "Welcome to the Sports Category. Here you will find various sub categories to play quizzes in."
 },
 {
   title: "TV Series Category",
   subtitle: "This is the tv series category",
   text: "Welcome to the tv series Category. Here you will find various sub categories to play quizzes in."
 }

];

var searchBarDiv = {
  width:"100%"
}
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
        <TopicsContainer topics={this.state.allTopics} />
          <div style={searchBarDiv}>
             <TextField
               hintText="Search for Categories" onChange={this.filterTopics}
             />

           </div>
      </div>
    );
  }
})
module.exports = TopicPage;
