import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

const img_style ={
	height:"50%",
	width:"50%",
	borderRadius:"50%",
	"margin-left" : "25%"
};

var feedImgStyle = {
	height:"20%",
	width : "100%"
}

const feedAvatar ={
	margin : "auto"
}

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

var Feed = React.createClass({
	render : function(){
		console.log(this.props.feed.title);
		return (
				<div className="container" style={feedStyle}>
					<div className="row">
						<div className="col-lg-3 col-md-3 col-sm-3 col-xs-3" style={feedAvatar}>
							<img src={this.props.feed.avatarImg} style={img_style}/>
						</div>
						<div className="col-lg-7 col-md-7 col-sm-7 col-xs-7">
							<h4>{this.props.feed.title}</h4>
							<h5>{this.props.feed.subtitle}</h5>
						</div>
						<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
							<h6>{this.props.feed.time}</h6>
						</div>
					</div>
					<div className="row" style={feedImg}>
						<img src={this.props.feed.feedImg} style={feedImgStyle}/>
					</div>
					<div className="row">
						<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={feedBtn} >
							<FlatButton
						      label="Like"
						      primary="true" 
						      style={feedBtnStyle}/>
						</div>
						<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={feedBtn}>
							<FlatButton
						      label="Comment"
						      primary="true" 
						      style={feedBtnStyle}/>
						</div>
						<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={feedBtn}>
							<FlatButton
						      label="Play"
						      primary="true" 
						      style={feedBtnStyle}/>
						</div>
					</div>
				</div>
		);
	}
});

module.exports = Feed;

/*

				*/