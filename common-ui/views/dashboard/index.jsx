 import React from 'react';
import ProfileHero from '../header/leftnav';
import TournamentSection from './tournamentsection';
import QuizWar from './quizwar';
import MostPopularSection from './mostpopular';
import MyFavoriteSection from './myfavoritetopics';
import Cookie from 'react-cookie';
var baseUrl = '/';

var Dashboard = React.createClass({
  getInitialState:function(){
      return{incre:false, topics:[]}
  },
  componentDidMount:function(){
    console.log('-----------------------------------------00000compont did mount');
    $.ajax({
      url: baseUrl+'topics/myfav',
      dataType:'json',
      success: function(data){
        console.log('got successab to-------------------- in my fav999999-');
        console.log(JSON.stringify(data));
        this.setState({topics:data})
        console.log('-----------------------data aa gya-'+JSON.stringify(data)+'----------------------');
      }.bind(this),
      error:function(err){
        console.log(err);
        console.log('error aaya');
      }
    })
  },

  handleCheck:function(_id,topic){
    var username = Cookie.load("username");
    var newtopics;
    console.log('handle check functi =----------------');
    var likedTopic = this.state.topics;
    var result = $.grep(likedTopic, function(e){ return e._id == topic._id; });
    if (result.length == 0) {
  // not found
    topic.topicFollowers = topic.topicFollowers+1;
    newtopics = likedTopic.concat([topic]);
    } else if (result.length == 1) {
  // access the foo property using result[0].foo
  var result = $.grep(likedTopic, function(e){ return e._id != topic._id; });
  newtopics = result;
  console.log('this topic u already liked');
    }
    this.state.incre=!this.state.incre;
    this.setState({topics:newtopics});
      var data1 = {
        incre: this.state.incre,
        id:_id,
        uName:username,
        t:topic
      }
      console.log('before ajax');
      $.ajax({
        type:'POST',
        data :JSON.stringify(data1),
        contentType : 'application/json',
        url:baseUrl+'api/check',
        success:(function(data){
          console.log('folowers increamented--------------now -----------'+data);
        }).bind(this),
        error:function(err){
          console.log(err);
          console.log('error ');
        }
      })
 },
  render: function () {
    return (
      <div>
      <ProfileHero />
        <TournamentSection/>
        <QuizWar />
        <MostPopularSection fun={this.handleCheck}  />
        <MyFavoriteSection topics={this.state.topics} />
      </div>
    );
  }
});
export default Dashboard;
 
