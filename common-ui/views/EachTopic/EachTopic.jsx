import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

const style = {
	float : "left",
	margin : "auto"
};

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
						      primary="true" 
						      style={btnStyle}/>
					       
						    <FlatButton
						      label="+Fav"
						      primary="true"
						      style={btnStyle} />

						    <FlatButton
						      label="Follow"
						      primary="true"
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
				<Divider/>
				<div className="container" style={feedStyle}>
					<div className="row">
						<div className="col-lg-3 col-md-3 col-sm-3 col-xs-3" style={feedAvatar}>
							<img src="./img/EachTopic/photo_1.jpg" style={img_style}/>
						</div>
						<div className="col-lg-7 col-md-7 col-sm-7 col-xs-7">
							<h4>MarshMellow</h4>
							<h5>The Third Wheel</h5>
						</div>
						<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
							<h6>8 hrs ago</h6>
						</div>
					</div>
					<div className="row" style={feedImg}>
						<img src="./img/EachTopic/dancing_man.gif" style={feedImgStyle}/>
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
				<Divider/>
				<div className="container" style={feedStyle}>
					<div className="row">
						<div className="col-lg-3 col-md-3 col-sm-3 col-xs-3" style={feedAvatar}>
							<img src="./img/EachTopic/photo_1.jpg" style={img_style}/>
						</div>
						<div className="col-lg-7 col-md-7 col-sm-7 col-xs-7">
							<h4>MarshMellow</h4>
							<h5>The Third Wheel</h5>
						</div>
						<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
							<h6>8 hrs ago</h6>
						</div>
					</div> 
					<div className="row" style={feedImg}>
						<img src="./img/EachTopic/giphy.gif" style={feedImgStyle}/>
					</div>
					<div className="row">
						<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={feedBtn}>
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
					<Divider/>
				</div>
			</div>
		</div>
		);
	}
});

module.exports = TopicDetails;