import React from 'react';
import ProfileHero from '../header/leftnav';
import RecentcardInfo from './recent';

const title={
    textAlign:'center',
}
var baseurl='http://localhost:8080';

var RecentPage = React.createClass({

  getInitialState:function(){
      return{recentActivity:[]}
  },

    componentDidMount:function(){
      $.ajax({
        url: baseurl+'/recentActivity',
        dataType:'json',
        success: function(data){
          console.log('got success---------------------');
          console.log(JSON.stringify(data));
          this.setState({recentActivity:data})
          console.log('------------------------'+data+'----------------------');
        }.bind(this),
        error:function(err){
          console.log(err);
          console.log('error');
        }
      })
    },

  render: function () {
    return (
      <div>

        <ProfileHero />
        <h1 style={title}>Recent Activity</h1>
        <RecentcardInfo activity={this.state.recentActivity}/>
      </div>
    );
  }
});

module.exports= RecentPage;
