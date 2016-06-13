import React from 'react';
import ProfileHero from '../header/leftnav';
import SubTopicContainer from '../SubTopics/SubTopicContainer';

const title={
    textAlign:'center'
}

var baseurl='http://localhost:8080';

var Topics = React.createClass({

  getInitialState:function(){
      return{topics:[]}
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

    componentDidMount:function(){
      $.ajax({
        url: baseurl+'/topics',
        dataType:'json',
        success: function(data){
          console.log('got success---------------------');
          console.log(JSON.stringify(data));
          this.setState({topics:data})
          console.log('------------------------'+data+'----------------------');
        }.bind(this),
        error:function(err){
          console.log(err);
          console.log('error');
        }
      })
    },

  render: function(){
    return(
      <div>
      <ProfileHero />
        <h1 style={title}>Topics</h1>

        <SubTopicContainer topics ={this.state.topics} fun={this.handleCheck} />
      </div>
    );
  }
});

export default Topics;
