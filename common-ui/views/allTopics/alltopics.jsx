import React from 'react';
import ProfileHero from '../header/leftnav';
import SubTopicContainer from '../SubTopics/SubTopicContainer';


var baseurl='http://localhost:8080';

var AllTopics = React.createClass({

  getInitialState:function(){
      return{topics:[]}
  },

    componentDidMount:function(){
      $.ajax({
        url: baseurl+'/topics/allTopics',
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
        <SubTopicContainer topics ={this.state.topics} />
      </div>
    );
  }
});

export default AllTopics;
