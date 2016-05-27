import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Feed from './feed';
import cookie from 'react-cookie';

var API = require('../../../rest-server/json-server/api/api.js');

var FeedData = [
    {
      "title" : "Marshmellow",
      "subtitle" : "Third Wheel",
      "avatarImg" : "./img/EachTopic/photo_1.jpg",
      "feedImg" : "./img/EachTopic/dancing_man.gif",
      "time" : "8 hrs ago"
    },
    {
      "title" : "Deadpool",
      "subtitle" : "Bad Ass Smart Ass",
      "avatarImg" : "./img/EachTopic/photo_1.jpg",
      "feedImg" : "./img/EachTopic/giphy.gif",
      "time" : "6 hrs ago"
    }
];

var feeds=[];

const style = {
	float : "left",
	margin : "auto"
};

const img_style ={
	height:"50%",
	width:"50%",
	borderRadius:"50%",
	marginLeft : "25%"
};

var feedImgStyle = {
	height:"20%",
	width : "100%"
}

const feedAvatar ={
	margin : "auto"
}

const btnStyle = {
	margin : 5,
	backgroundColor : "#00bcd4",
	color : "#fff"
};

const statsStyle = {
	fontSize:13,
	textAlign:"center"
};

const factStyle = {
	fontSize : 20,
	textAlign : "center"
};

const hStyle = {
	textAlign : "-webkit-center"
};

const feedImg = {
	marginTop: "5%",
	marginBottom : "5%"
};

const feedBtnStyle = {
	backgroundColor : "#00bcd4",
	color : "#fff",
	marginBottom:"4%",
	width : "95%"
}

var feedBtn = {
	textAlign : "-webkit-center"
}

const feedStyle = {
	margin : "2% auto"
}

const feedTitleStyle ={
	textAlign : "-webkit-center",
}

var TopicDetails = React.createClass({
	contextTypes :{
	  router : React.PropTypes.object
	},
	getInitialState: function(){
		var token = cookie.load('auth_cookie');
		if(token == undefined){
			console.log("inside undefined");
			this.context.router.push('/login');
		}
		return	{topicFeeds:[],fullfeeds:[]}
	},
	componentWillMount:function(){
      API.getAllFeeds(function(data){
         this.setState({topicFeeds:data});
         console.log(this.state.topicFeeds);
         this.state.topicFeeds.forEach(function(eachFeed){
           console.log(eachFeed);
           feeds.push(
           		<div>
	       			<Divider />
	       			<Feed feed={eachFeed} />
	       		</div>
           );
         });
         this.setState({fullfeeds:feeds});

         console.log(feeds.length);
     }.bind(this));
   	},
	
	render : function(){
		


		return ( 

		<div>	
			<div className="container" style={feedStyle}>
			
				<h2 style={hStyle}>Cricket</h2>
				<h4 style = {hStyle}>Let's play a cricket quiz</h4>	
				<div className="row">
					<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" style={style}>
						<img src="./img/EachTopic/photo.jpg" style={img_style}/>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" style={style}>
						   
							<FlatButton
						      label="Play"
						      primary={true} 
						      style={btnStyle}/>
					       
						    <FlatButton
						      label="+Fav"
						      primary={true}
						      style={btnStyle} />

						    <FlatButton
						      label="Follow"
						      primary={true}
						      style={btnStyle} />
					      
					</div>
				</div>

				<div className="row">
					<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4" style={style}>
						<p style={statsStyle}>My Level</p>
						<p style={factStyle}>1</p>
					</div>
					<div className="col-lg-3 col-md-3 col-sm-3 col-xs-3" style={style}>
						<p style={statsStyle}>Followers</p>
						<p style={factStyle}>388K</p>
					</div>
					<div className="col-lg-5 col-md-5 col-sm-5 col-xs-5" style={style}>
						<p style={statsStyle}>Next Badge At level</p>
						<p style={factStyle}>10</p>
					</div>
				</div>
				
			</div>
			<Divider />
			<div>
				<h2 style={feedTitleStyle}>Feed</h2>
				{this.state.fullfeeds}
			</div>
		</div>
		);
	}
});

module.exports = TopicDetails;