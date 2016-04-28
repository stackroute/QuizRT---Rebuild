 import React from 'react';
 import TopicsContainer from './TopicsContainer';
 import SearchBar from './searchBar';

 var topics =[ {
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

var TopicPage = React.createClass({
  render: function(){
    return(
      <div>
        <TopicsContainer topics={topics} />
        <SearchBar />
      </div>
    );
  }
})
module.exports = TopicPage;
