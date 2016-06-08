import React from 'react';
import Recentcard from './recentcard';

var description=[
  {
    description:"Congratulations, You have won Star of the Week Badge in Cricket.",
    image:"img/cricket.jpg",
  },
  {
    description:"Whao..!!, You have been entitled with the Roockies Batch in Sports Tournament.",
    image:"img/dharmashala.jpg",
  },
  {
    description:"Whao..!!, You have been entitled with the Roockies Batch in Sports Tournament.",
    image:"img/dharmashala.jpg",
  },
  {
    description:"Whao..!!, You have been entitled with the Roockies Batch in Sports Tournament.",
    image:"img/dharmashala.jpg",
  },
  {
    description:"Whao..!!, You have been entitled with the Roockies Batch in Sports Tournament.",
    image:"img/dharmashala.jpg",
  },
];

const styles = {
  textAlign : 'center',
};

const div={
  padding:0,
};

const style = {
  margin: 12,
};

var RecentcardInfo= React.createClass({

  render: function () {

     var initialData = description;
     var rows = [];
     initialData.forEach(function(activity){
       rows.push(<div><Recentcard activity={activity}/></div>)
     });

    return(
      <div>
            {rows}
      </div>

    );
  }
});


module.exports=RecentcardInfo;
