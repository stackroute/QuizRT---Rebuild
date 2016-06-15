
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
import CircularProgress from 'material-ui/CircularProgress';
import cookie from 'react-cookie';

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

const Style1= {
    "text-align": "center",
    //"margin-top":'18%',
    //"height":'100%',
    "margin":"auto",

  }
  const Style2= {
    "margin-top":'12%'
  }

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};


var user1,user2,user3,username1,username2,username3;
// class SampleNextArrow extends React.Component{
//   render(){
//     return(
//       <div {...this.props} style={{display: 'circle', background: 'blue'}}></div>
//     );
//   }
// }
// class SamplePrevArrow extends React.Component{
//   render(){
//     return(
//       <div {...this.props} style={{display: 'circle', background: 'blue'}}></div>
//     );
//   }
// }

export default class Rank extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      waiting:true,
      serverId:0,
      questionReceived: false,
      ques:{},
      leaderboard:{

      },
      seconds:0,
      progress: 10,
      option0Color: grey100,
      option1Color: grey100,
      option2Color: grey100,
      option3Color: grey100

    };
  }
  static get contextTypes(){
    return {
      socket: PropTypes.object
    }
  }

  componentDidMount(){

      console.log('\n\n===========Cookie says username as: '+cookie.load('username'));

        this.context.socket = io( );
   var that = this;
        this.context.socket.on('newQuestion',function(data){

          console.log('\n User name from cookie is: '+cookie.load('username'));


           console.log((data.msg));
           that.setState({seconds:10});
           var seconds = 10;
           var timer = setInterval(function(){
            if(seconds===0)
              clearInterval(timer);
            else
            that.setState({seconds:seconds--});
           },1000)
          that.setState({ques:data.msg})
          if(that.state.waiting)
            that.setState({waiting:false})
          that.setState({enabled:true});
          that.setState({answered:false});
          that.setState({option0Color:grey100})
          that.setState({option1Color:grey100})
          that.setState({option2Color:grey100})
          that.setState({option3Color:grey100})
        })
        // console.log('Mounting the component: ', (++countMount));

        this.context.socket.emit('playGame',{username:cookie.load('username'),tournamentId:'1234'});
        this.context.socket.on('queued',function(msg){

        })
        this.context.socket.on('gameStarting',function(msg){
          console.log('\n====Your game will start in 3 seconds....\n')

         })
        this.context.socket.on('yourAnswer',function(obj){

            console.log('\n=======Received in your answer is : '+JSON.stringify(obj)+'\n')

             that.changeOptionColor(obj.answer.answerOfQuestion,green600);

             that.setState({leaderboard:obj.answer.leaderboard});
             console.log('state leaderboard is: '+ JSON.stringify(that.state.leaderboard));
             var keys = Object.keys(that.state.leaderboard) ;
             user1 = keys[1];
             user2 = keys[2];
             user3 = keys[3];
             username1 = user1.match(/^([^@]*)@/)[1];
             username2 = user2.match(/^([^@]*)@/)[1];
             username3 = user3.match(/^([^@]*)@/)[1];


             console.log('Keys are: '+ keys);



        })
        this.context.socket.on('leaderboard',function(leaderboard){
          alert('final score is: '+leaderboard[cookie.load('username')]);

        })

        this.context.socket.on('serverId',function(msg){
          that.setState({serverId:msg});
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

    var settings = {
          dots: false,
          // nextArrow:<SampleNextArrow />,
          // prevArrow:<SamplePrevArrow />,
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


      return (
          <div>
          {this.state.waiting ?(
            <div style={Style1}>
            <div>
            <h2>Waiting for the opponents</h2>
            <h6>{this.state.serverId}</h6>
          </div>
          <div style={Style2}>
              <CircularProgress size={1.8}  />

            </div>
            </div>
          ):(
            <div className="container-fluid">
              <div >
                <h6>{this.state.serverId}</h6>
              </div>
              <div>
                            <Slider {...settings}>

              <div><Paper style={style} zDepth={2} >
                        <div>{username1} </div>
                         <div> {this.state.leaderboard[user1]}</div>
              </Paper></div>

              <div><Paper style={style} zDepth={2} >
                        <div>{username2} </div>
                         <div> {this.state.leaderboard[user2]}</div>
              </Paper></div>

              <div><Paper style={style} zDepth={2} >
                        <div>{username3} </div>
                         <div> {this.state.leaderboard[user3]}</div>
              </Paper></div>

              </Slider>
              </div>
              <hr/>

              <div className='row'  >
                <div className='col-lg-4 col-xs-4 col-md-4 col-sm-4'>

                </div>
                <div className='col-lg-4 col-xs-4 col-md-4 col-sm-4'>
                  <div className='row center-xs'> {this.state.seconds} </div>
                </div>
                <div className='col-lg-4 col-xs-4 col-md-4 col-sm-4'>
                  <div className='row end-xs'>
                  </div>
                </div>
              </div>

              <div class="ques">
                <div >
                  <div className='row' >
                    <div className='col-xs-12'>
                      <div className='row center-xs'>
                        <div><img src={this.state.ques.image} /></div>
                        <div><p>{this.state.ques.question}</p></div>
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
          )}

          </div>
        );
      }
    }
