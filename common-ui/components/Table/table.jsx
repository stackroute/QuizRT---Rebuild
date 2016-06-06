import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import Paper from 'material-ui/Paper';

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

export default class TableExampleComplex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

 componentDidMount() {
   $.ajax({
     url: '/result',
     dataType: 'json',
     success: function(tableData) {
       this.setState({data: tableData});
     }.bind(this),
    //  error: function(xhr, status, err) {
    //    console.error(this.props.url, status, err.toString());
    //    //console.log(err);
    //  }.bind(this)
   });
 }


  render() {
    return (
      <div>
        <Table height={'300px'} >
          <TableHeader>

            <TableRow>
              <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="Rank">Rank</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody >
          {this.state.data.map( (row, index) => (
            <TableRow key={index} >
              <TableRowColumn>{index}</TableRowColumn>
              <TableRowColumn>{row.name}</TableRowColumn>
              <TableRowColumn>{row.status}</TableRowColumn>
            </TableRow>
            ))}
          </TableBody>
        </Table>
        <Paper zDepth={5}>
          <Table>
            <TableHeader>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Address</TableHeaderColumn>
              <TableHeaderColumn>City</TableHeaderColumn>
            </TableRow>
            </TableHeader>
          </Table>
        </Paper>
        </div>
    );
  }
}
