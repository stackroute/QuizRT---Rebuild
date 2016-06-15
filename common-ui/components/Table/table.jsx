import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import Paper from 'material-ui/Paper';
var baseURL = '/';

// const tableData = [
//   {
//     name: 'smith',
//     status: 1,
//   },
//   {
//     name: 'Randal White',
//     status: 2,
//   },
//   {
//     name: 'Stephanie Sanders',
//     status: 3
//   },
//   {
//     name: 'Steve Brown',
//     status: 4
//   },
//   {
//     name: 'Joyce Whitten',
//     status: 5
//   },
//   {
//     name: 'Samuel Roberts',
//     status: 6,
//   },
//   {
//     name: 'Adam Moore',
//     status: 7,
//   },
// ];

  function compare(a,b) {
    if (a.score < b.score)
       return 1;
    if (a.score > b.score)
      return -1;
    return 0;
  }

export default class TableExampleComplex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      scores: []
    };
  }

 componentDidMount() {
  console.log("------------------------>>>>>>>>>>>>>>>> inside table.jsx componentDidMount");


  var scores = [];
  this.setState({data: cookie.load('leaderboard')});
  console.log('\n========Leaderboard from cookie is: '+cookie.load('leaderboard')+'===\n');
  Object.keys(this.state.data).forEach(function(key) {
      if(key != 'gameId' && key != 'id' && key != 'entity$'){
        //console.log("-------------------->>>>>>>>>>>>>> "+data[key]);
        var scoreInfo = {
          'name' : key,
          'score' : data[key]
        }
        scores.push(scoreInfo)
      }
  });

  var sorted = scores.sort(compare);
  this.setState({scores: sorted});


 }


  render() {
    return (
      <div>
        <Table height={'300px'}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>

            <TableRow>
              <TableHeaderColumn tooltip="Serial">Rank</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="Rank">Scores</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox = {false}>
            {this.state.scores.map( (row, index) => (
            <TableRow key={index} >
              <TableRowColumn>{index+1}</TableRowColumn>
              <TableRowColumn>{row.name}</TableRowColumn>
              <TableRowColumn>{row.score}</TableRowColumn>
            </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
    );
  }
}
