import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

const tableData = [
  {
    name: 'John Smith',
    status: 1,
  },
  {
    name: 'Randal White',
    status: 2,
  },
  {
    name: 'Stephanie Sanders',
    status: 3
  },
  {
    name: 'Steve Brown',
    status: 4
  },
  {
    name: 'Joyce Whitten',
    status: 5
  },
  {
    name: 'Samuel Roberts',
    status: 6,
  },
  {
    name: 'Adam Moore',
    status: 7,
  },
];

export default class TableExampleComplex extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Table height={'300px'} fixedHeader={true} fixedFooter={true} >
          <TableHeader>

            <TableRow>
              <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="Rank">Rank</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody showRowHover={this.state.showRowHover} stripedRows={this.state.stripedRows}   >
          {tableData.map( (row, index) => (
            <TableRow key={index}>
              <TableRowColumn>{index}</TableRowColumn>
              <TableRowColumn>{row.name}</TableRowColumn>
              <TableRowColumn>{row.status}</TableRowColumn>
            </TableRow>
            ))}
          </TableBody>
          <TableFooter adjustForCheckbox={this.state.showCheckboxes} >
            <TableRow>
              <TableRowColumn>ID</TableRowColumn>
              <TableRowColumn>Name</TableRowColumn>
              <TableRowColumn>Rank</TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>
        </div>
    );
  }
}
