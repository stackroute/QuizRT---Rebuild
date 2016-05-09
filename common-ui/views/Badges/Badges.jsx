import React from 'react';
import Badge from './Badge';

var Data = [
	{
		title : "Hello",
		imgSrc : "./img/badge.jpg",
		description : "Pro"
	},
	{
		title : "World",
		imgSrc : "./img/badge.jpg",
		description : "Amateur"
	},
	{
		title : "Shikhar",
		imgSrc : "./img/badge.jpg",
		description : "Expert"
	},
	{
		title : "Hello",
		imgSrc : "./img/badge.jpg",
		description : "Noob"
	},
	{
		title : "World",
		imgSrc : "./img/badge.jpg",
		description : "Master"
	},
	{
		title : "Shikhar",
		imgSrc : "./img/badge.jpg",
		description : "Tae hi"
	},
	{
		title : "Hello",
		imgSrc : "./img/badge.jpg",
		description : "grimm"
	},
	{
		title : "World",
		imgSrc : "./img/badge.jpg",
		description : "lorem ispum"
	},
	{
		title : "Shikhar",
		imgSrc : "./img/badge.jpg",
		description : "lorem ispum"
	}
];

var badgeFloat ={
	float:'left'
}

var titleStyle = {
	textAlign : "-webkit-center"
}

var Badges = React.createClass({
	render : function(){
		var row = [];
		Data.forEach(function(data){
			row.push(
						<div className="col-xs-6 col-sm-6 col-md-4 col-lg-3" style={badgeFloat} >
							<Badge data = {data} />
						</div>
				
			);
		});

		return (
			<div>
				<h2 style={titleStyle} > Badges </h2>
				{row}			
			</div>
		);
	}
});

module.exports = Badges;

