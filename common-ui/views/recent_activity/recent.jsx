import React from 'react';
import Recentcard from './recentcard';

// var description=[
//   {
//     username:"",
//     title:"Topics",
//     cardType:"topics",
//     analytics:[
//       {
//         "contentPlayed":"Movies",
//         "noOfPlayers":"15",
//         "rank":"2",
//         "score":"6",
//         "winnigStreak":"12"
//       }
//     ]
//   },
//   {
//     username:"",
//     title:"Tournament",
//     cardType:"tournaments",
//     analytics:[
//       {
//         "contentPlayed":"Sports",
//         "noOfPlayers":"20",
//         "rank":"4",
//         "score":"9",
//         "winnigStreak":"14"
//       }
//     ]
//   },
//   {
//     username:"",
//     title:"Topics",
//     cardType:"topics",
//     analytics:[
//       {
//         "contentPlayed":"Sports",
//         "noOfPlayers":"20",
//         "rank":"4",
//         "score":"9",
//         "winnigStreak":"14"
//       }
//     ]
//   },
//   {
//     username:"",
//     title:"Tournament",
//     cardType:"tournaments",
//     analytics:[
//       {
//         contentPlayed:"Music",
//         "noOfPlayers":"20",
//         "rank":"4",
//         "score":"9",
//         "winnigStreak":"14"
//       }
//     ]
//   },
//   {
//     username:"",
//     title:"Topics",
//     cardType:"topics",
//     analytics:[
//       {
//         "contentPlayed":"Sports",
//         "noOfPlayers":"20",
//         "rank":"4",
//         "score":"9",
//         "winnigStreak":"14"
//       }
//     ]
//   }
// ];

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

    //  var initialData = description;
     var rows = [];
     this.props.activity.forEach(function(activity){
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
