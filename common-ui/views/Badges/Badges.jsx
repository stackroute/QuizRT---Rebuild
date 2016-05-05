import React from 'react';
import Badge from './Badge';

var Data = [
	{
		title : "Hello",
		imgSrc : "./img/badge.jpg",
		description : "lorem ispum"
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
	},
	{
		title : "Hello",
		imgSrc : "./img/badge.jpg",
		description : "lorem ispum"
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
	},
	{
		title : "Hello",
		imgSrc : "./img/badge.jpg",
		description : "lorem ispum"
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

var Badges = React.createClass({
	render : function(){
		var row = [];
		Data.forEach(function(data){
			row.push(
				<div className="col-xs-6 col-sm-6 col-md-4 col-lg-3">
					<Badge data = {data} />
				</div>
			);
		});

		return (
			<div>
				{row}			
			</div>
		);
	}
});

module.exports = Badges;

