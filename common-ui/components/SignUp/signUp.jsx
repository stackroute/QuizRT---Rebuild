import React from 'react';
import {Link} from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
  marginLeft:0,
  width:'100%',
};
const text = {
  margin:0,
  padding:0,
  textAlign:'center'
}


export default class Test extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formInput: { username: '', password: ''}
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('FormData: ' + this.state.formInput.username);
  }
  usernameChanged(event) {
    this.state.formInput.username = event.target.value;
  }
  passwordChanged(event) {
    this.state.formInput.password = event.target.value;
  }
  render (){
    return (
      <div>
        <div className='container-fluid'>
          <h1 style={text}>QuizRT</h1><br/>
          <p style={text}>Sign-Up to continue with QuizRT</p>
          <div className='row'>
            <div className='col-lg-4 col-xs-12 col-sm-6 col-md-6 col-lg-offset-4 col-sm-offset-3 col-md-offset-3'>
            <form onSubmit={this.handleSubmit.bind(this)} >
                  <TextField hintText="Hint Text" floatingLabelText="Username" style={style} onChange={this.usernameChanged.bind(this)} type="text" />
                  <TextField hintText="Hint Text" style={style} floatingLabelText="Password" type="password" onChange={this.passwordChanged.bind(this)} />
                  <RaisedButton type="submit" label="Sign Up" primary={true} style={style} />
            </form>
            <div className='row'>
              <div className='col-xs-12'>
                <div className=' row center-xs'>
                  <p>OR</p>
                </div>
              </div>
            </div>
            <Link to='/quiz'>
            <RaisedButton label="Sign-Up with Facebook" primary={true} style={style} />
            </Link>
            <RaisedButton label="Sign-Up with google" primary={true} style={style} />
            <RaisedButton label="Create account" style={style} />
            </div>
          </div>
        </div>
      </div>

    );
  }
};
