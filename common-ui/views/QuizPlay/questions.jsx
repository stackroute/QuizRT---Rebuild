import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin:12,
  width:'100%'
}
export default class Questions extends React.Component{
  constructor(props){
    super(props);
  }
render (){
return (
  <div class="ques">
    <div >
    <div className='row' >
      <div className='col-xs-12'>
        <div className='row center-xs'>
          <p>Captial of Chaina</p>
        </div>
      </div>
    </div>
    <div className='row' >
      <div className='col-xs-6 col-sm-6 col-lg-4 col-md-4'>
          <RaisedButton label="Chennai" fullWidth={true}  primary={true} style={style} />
      </div>
      <div className='col-xs-6 col-sm-6 col-lg-4 col-md-4'>
          <RaisedButton label="kolkata" primary={true} fullWidth={true} style={style} />
      </div>
      <div className='col-xs-6 col-sm-6 col-lg-4 col-md-4'>
          <RaisedButton label="kolkata" primary={true} style={style} fullWidth={true} />
      </div>
      <div className='col-xs-6 col-sm-6 col-lg-4 col-md-4'>
          <RaisedButton label="kolkata" primary={true} style={style}  fullWidth={true} />
      </div>
      <div className='col-xs-6 col-sm-6 col-lg-4 col-md-4'>
          <RaisedButton label="kolkata" primary={true} style={style} fullWidth={true} />
      </div>
      <div className='col-xs-6 col-sm-6 col-lg-4 col-md-4'>
          <RaisedButton label="kolkata" primary={true} style={style} fullWidth={true} />
      </div>
    </div>
    </div>
  </div>
);
}
};
