import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

const style = {
	float : "left",
	marginTop:20,
};

const img_style ={
	height:"100%",
	width:"100%",
	borderRadius:"50% 50% 50% 50%"
};


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
	marginBottom:"4%"
}

const feedStyle = {
	marginTop : "3%",
}

const feedTitleStyle ={
	textAlign : "-webkit-center",
	fontSize:"15",
}

var Feeddata = [
	{
		title:"MarshMellow",
		subtitle : "The Third Wheel",
		imgSrc : "./img/photo.jpg",
		feedImage : "./img/Animated-head-bobbing-cat-with-headphones-3.gif"
	},
	{
		title:"MarshMellow",
		subtitle : "The Third Wheel",
		imgSrc : "./img/photo.jpg",
		feedImage : "./img/Animated-head-bobbing-cat-with-headphones-3.gif"
	},
	{
		title:"MarshMellow",
		subtitle : "The Third Wheel",
		imgSrc : "./img/photo.jpg",
		feedImage : "./img/Animated-head-bobbing-cat-with-headphones-3.gif"
	},
]

var TopicDetails = React.createClass({
	render : function(){
<<<<<<< HEAD
		return (

		<Paper>
			<div className="container">

				<h2 style={hStyle}>Cricket</h2>
				<h4 style = {hStyle}>Let's play a cricket quiz</h4>
=======
		return ( 

		<Paper>	
			<div className="container">
			
				<h2 style={hStyle}>Cricket</h2>
				<h4 style = {hStyle}>Let's play a cricket quiz</h4>	
>>>>>>> 462e3e3d5a2dd3d6b6a34200406b0c8784112e37
				<div className="row">
					<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" style={style}>
						<img src="./img/photo.jpg" style={img_style}/>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" style={style}>
<<<<<<< HEAD

							<FlatButton
						      label="Play"
						      primary="true"
						      style={btnStyle}/>

=======
						   
							<FlatButton
						      label="Play"
						      primary="true" 
						      style={btnStyle}/>
					       
>>>>>>> 462e3e3d5a2dd3d6b6a34200406b0c8784112e37
						    <FlatButton
						      label="+Fav"
						      primary="true"
						      style={btnStyle} />

						    <FlatButton
						      label="Follow"
						      primary="true"
						      style={btnStyle} />
<<<<<<< HEAD

=======
					      
>>>>>>> 462e3e3d5a2dd3d6b6a34200406b0c8784112e37
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
<<<<<<< HEAD

=======
				
>>>>>>> 462e3e3d5a2dd3d6b6a34200406b0c8784112e37
			</div>
			<Divider />
			<div>
				<h4 style={feedTitleStyle}>Feed</h4>
				<Divider/>
				<div className="container" style={feedStyle}>
					<div className="row">
						<div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
							<img src="./img/photo.jpg" style={img_style}/>
						</div>
						<div className="col-lg-7 col-md-7 col-sm-7 col-xs-7">
							<h5>MarshMellow</h5>
							<h6>The Third Wheel</h6>
						</div>
						<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
							<h6>8 hrs ago</h6>
						</div>
					</div>
					<div className="row" style={feedImg}>
						<img src="./img/Animated-head-bobbing-cat-with-headphones-3.gif"/>
					</div>
					<Divider/>
					<div className="row">
						<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
							<FlatButton
						      label="Like"
<<<<<<< HEAD
						      primary="true"
=======
						      primary="true" 
>>>>>>> 462e3e3d5a2dd3d6b6a34200406b0c8784112e37
						      style={feedBtnStyle}/>
						</div>
						<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
							<FlatButton
						      label="Comment"
<<<<<<< HEAD
						      primary="true"
=======
						      primary="true" 
>>>>>>> 462e3e3d5a2dd3d6b6a34200406b0c8784112e37
						      style={feedBtnStyle}/>
						</div>
						<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
							<FlatButton
						      label="Play"
<<<<<<< HEAD
						      primary="true"
=======
						      primary="true" 
>>>>>>> 462e3e3d5a2dd3d6b6a34200406b0c8784112e37
						      style={feedBtnStyle}/>
						</div>
					</div>
				</div>
				<Divider/>
				<div className="container" style={feedStyle}>
					<div className="row">
						<div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
							<img src="./img/photo.jpg" style={img_style}/>
						</div>
						<div className="col-lg-7 col-md-7 col-sm-7 col-xs-7">
							<h5>MarshMellow</h5>
							<h6>The Third Wheel</h6>
						</div>
						<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
							<h6>8 hrs ago</h6>
						</div>
<<<<<<< HEAD
					</div>
=======
					</div> 
>>>>>>> 462e3e3d5a2dd3d6b6a34200406b0c8784112e37
					<div className="row" style={feedImg}>
						<img src="./img/Animated-head-bobbing-cat-with-headphones-3.gif"/>
					</div>
					<div className="row">
						<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
							<FlatButton
						      label="Like"
<<<<<<< HEAD
						      primary="true"
=======
						      primary="true" 
>>>>>>> 462e3e3d5a2dd3d6b6a34200406b0c8784112e37
						      style={feedBtnStyle}/>
						</div>
						<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
							<FlatButton
						      label="Comment"
<<<<<<< HEAD
						      primary="true"
=======
						      primary="true" 
>>>>>>> 462e3e3d5a2dd3d6b6a34200406b0c8784112e37
						      style={feedBtnStyle}/>
						</div>
						<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
							<FlatButton
						      label="Play"
<<<<<<< HEAD
						      primary="true"
=======
						      primary="true" 
>>>>>>> 462e3e3d5a2dd3d6b6a34200406b0c8784112e37
						      style={feedBtnStyle}/>
						</div>
					</div>
					<Divider/>
				</div>
			</div>
		</Paper>
		);
	}
});

<<<<<<< HEAD
module.exports = TopicDetails;
=======
module.exports = TopicDetails;
>>>>>>> 462e3e3d5a2dd3d6b6a34200406b0c8784112e37
