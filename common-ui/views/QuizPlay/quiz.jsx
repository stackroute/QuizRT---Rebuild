import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
// import Timer from '../../components/Timer';
//import ProgressBar from '../../components/ProgressBar';
import ProgressBar from './progressBar';
import Timer from './timer';
import {
blue300,
indigo900,
orange200,
deepOrange300,
pink400,
purple500,
} from 'material-ui/styles/colors';


const style = {
  width:'100%',
  margin:12,
  height:'400%'

}
const space = {
  marginBottom:100
}

const style1 = {
  marginBottom:50
}
export default class Quiz extends React.Component{
  render (){
  return (
  <div>
    <div className='container-fluid'>
    <div className='row'>
      <div className='col-xs-12'>
        <div className='row center-xs'>
          <h1>QuizRT</h1>
        </div>
      </div>
    </div>
    <hr/>
    <ProgressBar seconds={30} height={15} />
    <div className='row' style={space} >
      <div className='col-lg-4 col-xs-4 col-md-4 col-sm-4'>
        <List>
          <ListItem disabled={true} leftAvatar={<Avatar color={deepOrange300} backgroundColor={purple500} >D</Avatar>}>
          </ListItem>
        </List>
      </div>
      <div className='col-lg-4 col-xs-4 col-md-4 col-sm-4'>
        <div className='row center-xs'><Timer seconds={30} /></div>
      </div>
      <div className='col-lg-4 col-xs-4 col-md-4 col-sm-4'>
        <div className='row end-xs'>
        <List>
          <ListItem disabled={true} rightAvatar={<Avatar icon={<FileFolder />} color={orange200} backgroundColor={pink400} />  } >
          </ListItem>
        </List>
        </div>
      </div>
    </div>
    <div className='row' style={style1} >
      <div className='col-xs-12'>
        <div className='row center-xs'>
          <p>Which Tagore play, featuring a mother and a son, is set against the backdrop of Kurukshetra war?</p>
        </div>
      </div>
    </div>
    <div className='row' >
      <div className='col-xs-6 col-sm-6 col-lg-4 col-md-4'>
          <RaisedButton label='Kolkata' primary={true} style={style} />
      </div>
      <div className='col-xs-6 col-sm-6 col-lg-4 col-md-4'>
          <RaisedButton label='Kolkata' primary={true} style={style} />
      </div>
      <div className='col-xs-6 col-sm-6 col-lg-4 col-md-4'>
          <RaisedButton label='Kolkata' primary={true} style={style} />
      </div>
      <div className='col-xs-6 col-sm-6 col-lg-4 col-md-4'>
          <RaisedButton label='Kolkata' primary={true} style={style} />
      </div>
      <div className='col-xs-6 col-sm-6 col-lg-4 col-md-4'>
          <RaisedButton label='Kolkata' primary={true} style={style} />
      </div>
      <div className='col-xs-6 col-sm-6 col-lg-4 col-md-4'>
          <RaisedButton label='Kolkata' primary={true} style={style} />
      </div>

    </div>
    </div>

  </div>
  );
  }
};
