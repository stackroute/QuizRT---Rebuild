import Paper from 'material-ui/Paper';
import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  marginBottom:12,
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
    $.ajax({
      type: "POST",
      url: '/signup',
      data: JSON.stringify(this.state.formInput),
      success: function(data){
        console.log('lfdkg');
      },
      error:function(xhr,status,err){
        console.error(this.props.url,status,err.toString());
      }
     });
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
          <div className='row'>
            <div className='col-lg-4 col-xs-12 col-sm-6 col-md-6 col-lg-offset-4 col-sm-offset-3 col-md-offset-3'>
            <h1 style={text}>QuizRT</h1><br/>
            <p style={text}>Sign-Up to continue with QuizRT</p>
            <form onSubmit={this.handleSubmit.bind(this)} >
                  <TextField hintText="name001" floatingLabelText="Username" fullWidth={true} onChange={this.usernameChanged.bind(this)} type="text" />
                  <TextField fullWidth={true}  floatingLabelText="Password" type="password" onChange={this.passwordChanged.bind(this)} />
                  <RaisedButton type="submit" label="Sign Up" primary={true} style={style} />
            </form>
            <div className='row'>
              <div className='col-xs-12'>
                <div className='center-xs'>
                  <p>OR</p>
                </div>
              </div>
            </div>
            <RaisedButton label="Sign-Up with Facebook" primary={true} style={style} />
            <RaisedButton label="Sign-Up with google" primary={true} style={style} />
            <RaisedButton label="Login" style={style} />
            </div>
          </div>
        </div>
      </div>

    );
  }
};
