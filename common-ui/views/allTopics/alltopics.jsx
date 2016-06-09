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
        <SubTopicContainer topics ={this.state.topics} />
      </div>
    );
  }
});

export default Topics;
