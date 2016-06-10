var React = require('react');
var Slider = require('react-slick');
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import List from 'material-ui/List/List';
import {PropTypes} from 'react';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ProgressBar from './progressBar';
import Timer from './timer';
import Wait from '../WaitingPage';


const optionStyle = {
  margin:12,
  width:'100%'
}

import {
blue300,
cyan500,
blue600,
green600,
indigo900,
orange200,
orange600,
deepOrange500,
pink400,
grey100,
purple500,
} from 'material-ui/styles/colors';



const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class SampleNextArrow extends React.Component{
  render(){
    return(
      <div {...this.props} style={{display: 'circle', background: 'blue'}}></div>
    );
  }
}

class SamplePrevArrow extends React.Component{
  render(){
    return(
      <div {...this.props} style={{display: 'circle', background: 'blue'}}></div>
    );
  }
}
export default class Rank extends React.Component{
  state = {
   check:true
 };
  constructor(props){
    super(props);
    this.state = {
      ques:{},
      seconds:0,
      progress: 10,
      option0Color: grey100,
      option1Color: grey100,
      option2Color: grey100,
      option3Color: grey100

    };
    console.log('form constructror ----------------');

  }
  static get contextTypes(){
    return {
      socket: PropTypes.object
    }
  }
  componentWillMount(){
    console.log('tis form componentWillMount');
  }
  componentDidMount(){
    console.log('this is componentDidMount in quiz page98-----------------------');
        this.context.socket = io('http://localhost:8080');
        var that = this;
        this.context.socket.on('newQuestion',function(data){
           console.log((data.msg));
          that.setState({ques:data.msg})
          that.setState({enabled:true});
          that.setState({answered:false});
          that.setState({option0Color:grey100})
          that.setState({option1Color:grey100})
          that.setState({option2Color:grey100})
          that.setState({option3Color:grey100})
        })
        // console.log('Mounting the component: ', (++countMount));
        this.context.socket.emit('playGame',{username:'anshul',tournamentId:'1234'});
        this.context.socket.on('queued',function(msg){

        })
        this.context.socket.on('gameStarting',function(msg){
        that.state.check=false;
        console.log('its a game starting ------------------------'+that.state.check+'its ending ============');
        })
        this.context.socket.on('yourAnswer',function(obj){
            alert('getting the right answer');
            that.changeOptionColor(obj.answer.answerOfQuestion,green600);
        })
        this.context.socket.on('leaderboard',function(leaderboard){
          alert('final score is: '+leaderboard['anshul']);
        })
  }
  changeOptionColor(value,color){
    switch(value){
    case this.state.ques.options[0]: this.setState({option0Color:color})
    break;
    case this.state.ques.options[1]: this.setState({option1Color:color})
    break;
    case this.state.ques.options[2]: this.setState({option2Color:color})
    break;
    case this.state.ques.options[3]: this.setState({option3Color:color})
    break;
  }
  }
    onClick(value,e){
      this.setState({answered:true});
      this.setState({enabled:false});
      var socketObj ={
        answer: value
      }
      this.changeOptionColor(socketObj.answer,deepOrange500);
      console.log('Sending answer to server as '+ value)
      this.context.socket.emit('myAnswer',socketObj);
      switch(value){
      }
    }
  render(){
    if(!this.state.ques.options) return null;
    var settings = {
          dots: false,
          nextArrow:<SampleNextArrow />,
          prevArrow:<SamplePrevArrow />,
          infinite:false,
          speed: 500,
          slidesToShow: 9,
          slidesToScroll: 5,
          touchMove:true,
          responsive: [{
              breakpoint: 1024,
              settings: {
                  dots: false,
                  slidesToShow: 5,
                  slidesToScroll: 3,
                  infinite: true,

              }
          }, {
              breakpoint: 600,
              settings: {
                  dots: false,
                  slidesToShow: 3,
                  slidesToScroll: 3
              }
          }, {
              breakpoint: 480,
              settings: {
                  dots: false,
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          }]
      };
      const {check} = this.state;

    return (
      <div>
      {check ?(
        <Wait />
                ):(
      <div className="container-fluid">
          <div >
            <Slider {...settings}>
              <div><Paper style={style} zDepth={2} >1 <p></p> 24</Paper></div>
              <div><Paper style={style} zDepth={2} /></div>
              <div><Paper style={style} zDepth={2} /></div>
              <div><Paper style={style} zDepth={2} /></div>
              <div><Paper style={style} zDepth={2} /></div>
              <div><Paper style={style} zDepth={2} /></div>
              <div><Paper style={style} zDepth={2} /></div>
              <div><Paper style={style} zDepth={2} /></div>
              <div><Paper style={style} zDepth={2} /></div>
              <div><Paper style={style} zDepth={2} /></div>
              <div><Paper style={style} zDepth={2} /></div>
              <div><Paper style={style} zDepth={2} /></div>
              <div><Paper style={style} zDepth={2} /></div>
              <div><Paper style={style} zDepth={2} /></div>
              <div><Paper style={style} zDepth={2} /></div>
              <div><Paper style={style} zDepth={2} /></div>
              <div><Paper style={style} zDepth={2} /></div>
              <div><Paper style={style} zDepth={2} /></div>
              <div><Paper style={style} zDepth={2} /></div>
              <div><Paper style={style} zDepth={2} /></div>
              <div><Paper style={style} zDepth={2} /></div>
              <div><Paper style={style} zDepth={2} /></div>
              <div><Paper style={style} zDepth={2} /></div>
              <div><Paper style={style} zDepth={2} /></div>
              <div><Paper style={style} zDepth={2} /></div>
              <div><Paper style={style} zDepth={2} /></div>
              <div><Paper style={style} zDepth={2} /></div>
              <div><Paper style={style} zDepth={2} >35 <p>Last</p> 100</Paper></div>
            </Slider>
          </div>
          <hr/>

          <div className='row'  >
            <div className='col-lg-4 col-xs-4 col-md-4 col-sm-4'>
              <List>
                <ListItem disabled={true} leftAvatar={<Avatar color={deepOrange500} backgroundColor={purple500} >D</Avatar>}>
                </ListItem>
              </List>
            </div>
            <div className='col-lg-4 col-xs-4 col-md-4 col-sm-4'>
              <div className='row center-xs'> {this.state.seconds} </div>
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

          <div class="ques">
            <div >
              <div className='row' >
                <div className='col-xs-12'>
                  <div className='row center-xs'>
                    <p>{this.state.ques.question}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row' >
              <div className='col-xs-6 col-sm-6 col-lg-6 col-md-6' >
                <RaisedButton disabled={this.state.answered || !this.state.enabled}  label={this.state.ques.options[0]} onClick={this.onClick.bind(this,this.state.ques.options[0])} disabledBackgroundColor={this.state.option0Color} backgroundColor={cyan500}  style={optionStyle}/>
              </div>
              <div className='col-xs-6 col-sm-6 col-lg-6 col-md-6'>
                <RaisedButton disabled={this.state.answered || !this.state.enabled} label={this.state.ques.options[1]} onClick={this.onClick.bind(this,this.state.ques.options[1])}  disabledBackgroundColor={this.state.option1Color} backgroundColor={cyan500} style={optionStyle} />
              </div>
              <div className='col-xs-6 col-sm-6 col-lg-6 col-md-6'>
                <RaisedButton disabled={this.state.answered || !this.state.enabled} label={this.state.ques.options[2]} onClick={this.onClick.bind(this,this.state.ques.options[2])}  disabledBackgroundColor={this.state.option2Color} backgroundColor={cyan500} style={optionStyle} />
              </div>
              <div className='col-xs-6 col-sm-6 col-lg-6 col-md-6'>
                <RaisedButton disabled={this.state.answered || !this.state.enabled} label={this.state.ques.options[3]} onClick={this.onClick.bind(this,this.state.ques.options[3])}  disabledBackgroundColor={this.state.option3Color} backgroundColor={cyan500} style={optionStyle}/>
              </div>

            </div>

          </div>

        </div>
        )
      }
      </div>
    );
  }
}
