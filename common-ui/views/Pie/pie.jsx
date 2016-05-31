import React from 'react';
import PieChart from 'react-simple-pie-chart';
var styles ={
  height :50,
  width : 60,
  color:'grey',
  textAlign : 'center'
}

var data = [
  {
    name:'abhi',
    color: 'green',
    value: 20,
    score: 10,
  },
  {
    name:'abhi',
    value: 20,
    score:20,
  },
  {
    name:'abhi',
    value: 20,
  },
  {
    name:'abhi',
    color: 'red',
    value: 20,
  },
  {
    name:'abhi',
    color : 'green',
    value: 20,
  },
  {
    name:'abhi',
    value: 20,
  },
];
export default class Piechart extends React.Component{

  render() {
    return (
      <div className = "container-fluid">{data[0].name}
      <div className="row" style={styles}>
            <PieChart
        slices={data}
      />
      </div>
  </div>

    );
  }
};
