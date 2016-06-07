import React from 'react';
import Paper from 'material-ui/Paper';

var Data = [
	{
		title : "Hello",
		imgSrc : "./img/badge.jpg",
		description : "Pro"
	}
]
const titleStyle = {
	textAlign : "-webkit-center",
	width : "inherit"
}

const imgStyle = {
	width : "100%",
	margin: "auto",
	height : "100%",
	borderRadius : "50%"
}
const paraStyle = {
	textAlign : "-webkit-center",
	fontSize : "100%",
	marginTop:"5%",
	marginBottom:"5%"
}

const containerStyle = {
	width : "inherit",
}

const paperStyle = {
	marginTop : "5%",
	marginBottom : "5%"
}

var Badge = React.createClass({
	render : function(){
		return (
				<Paper style={paperStyle} zDepth={3}>
					<div className = "container" style = {containerStyle}>
						<h4 style = {titleStyle}>{this.props.data.title}</h4>
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<img src={this.props.data.imgSrc} style={imgStyle}/>
						</div>
						<div style={paraStyle}>
							<p>
								{this.props.data.description}
							</p>
						</div>
					</div>
				</Paper>


		);
	}
});

module.exports = Badge;
