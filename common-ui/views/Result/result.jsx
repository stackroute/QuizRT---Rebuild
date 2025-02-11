import React from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import Table from '../../components/Table'
const style = {
  width:'100%',
  marginBottom:12,
  marginTop:12
}
export default class Result extends React.Component{

  render(){
    return(
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-12'>
            <div className='center-xs center-lg center-md center-sm'>
              <h1>Quiz Result</h1>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4 col-lg-offset-4'>
          <Table />
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12 col-lg-offset-4 col-md-offset-4 col-sm-offset-4'>
            <RaisedButton style={style} label='Rematch' primary={true} />
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12 col-lg-offset-4 col-md-offset-4 col-sm-offset-4'>
            <RaisedButton style={style} label='Home' primary={true} />
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12 col-lg-offset-4 col-md-offset-4 col-sm-offset-4'>
            <RaisedButton style={style} label='Share' primary={true} />
          </div>
        </div>
      </div>
    );
  }
};
