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
import Piechart from '../piechart';


const optionStyle = {
  margin:12,
  width:'100%'
}

import {
blue300,
indigo900,
orange200,
deepOrange300,
pink400,
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
  constructor(props){
    super(props);
    this.state = {
      ques:{},
      seconds:0,
      progress: 10
    };
  }
  static get contextTypes(){
    return {
      socket: PropTypes.object
    }
  }

  onClick(value,e){
    this.context.socket.emit('my answer',value);
    this.setState({answered:true});

  }
  componentDidMount(){
     this.context.socket = io();
     var that = this;
    this.context.socket.on('end quiz',function(msg){
      that.setState({seconds:0});
      that.setState({progress:1});
    })
    this.context.socket.on('new question',function(data){
      console.log('receiving question');
      that.setState({ques:data});
      that.setState({enabled:true});
      that.setState({answered:false});
      that.setState({seconds:0})
    })
    this.context.socket.emit('send first question');
    this.context.socket.on('timer',function(msg){
      that.setState({seconds:msg});
      console.log(that.state.seconds);
    })
    this.context.socket.on('end timer',function(msg){
      that.setState({seconds:0});
      console.log(that.state.seconds);
    })
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
    return (
      <div>
        <div className="container-fluid">
          <div >
            <Slider {...settings}>
            <div><Paper style={style} zDepth={2} ><Piechart /></Paper></div>
            <div><Paper style={style} zDepth={2} ><Piechart /></Paper></div>
            <div><Paper style={style} zDepth={2} ><Piechart /></Paper></div>
            <div><Paper style={style} zDepth={2} ><Piechart /></Paper></div>
            <div><Paper style={style} zDepth={2} ><Piechart /></Paper></div>
            <div><Paper style={style} zDepth={2} ><Piechart /></Paper></div>
            <div><Paper style={style} zDepth={2} ><Piechart /></Paper></div>
            <div><Paper style={style} zDepth={2} ><Piechart /></Paper></div>
            <div><Paper style={style} zDepth={2} ><Piechart /></Paper></div>
            <div><Paper style={style} zDepth={2} ><Piechart /></Paper></div>
            <div><Paper style={style} zDepth={2} ><Piechart /></Paper></div>
            <div><Paper style={style} zDepth={2} ><Piechart /></Paper></div>
            <div><Paper style={style} zDepth={2} ><Piechart /></Paper></div>
            <div><Paper style={style} zDepth={2} ><Piechart /></Paper></div>
            <div><Paper style={style} zDepth={2} ><Piechart /></Paper></div>
            <div><Paper style={style} zDepth={2} ><Piechart /></Paper></div>
            <div><Paper style={style} zDepth={2} ><Piechart /></Paper></div>
            <div><Paper style={style} zDepth={2} ><Piechart /></Paper></div>
            <div><Paper style={style} zDepth={2} ><Piechart /></Paper></div>
            <div><Paper style={style} zDepth={2} ><Piechart /></Paper></div>
            <div><Paper style={style} zDepth={2} ><Piechart /></Paper></div>
            <div><Paper style={style} zDepth={2} ><Piechart /></Paper></div>
            <div><Paper style={style} zDepth={2} ><Piechart /></Paper></div>
            <div><Paper style={style} zDepth={2} ><Piechart /></Paper></div>
            <div><Paper style={style} zDepth={2} ><Piechart /></Paper></div>
            <div><Paper style={style} zDepth={2} ><Piechart /></Paper></div>
            <div><Paper style={style} zDepth={2} ><Piechart /></Paper></div>
            <div><Paper style={style} zDepth={2} ><Piechart /></Paper></div>
          </Slider>
          </div>
          <hr/>
          <ProgressBar seconds={this.state.progress}  height={15} />
          <div className='row'  >
            <div className='col-lg-4 col-xs-4 col-md-4 col-sm-4'>
              <List>
                <ListItem disabled={true} leftAvatar={<Avatar color={deepOrange300} backgroundColor={purple500} >D</Avatar>}>
                </ListItem>
              </List>
            </div>
            <div className='col-lg-4 col-xs-4 col-md-4 col-sm-4'>
              <div className='row center-xs'><Timer seconds = {this.state.progress} /></div>
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
              <div className='col-xs-6 col-sm-6 col-lg-6 col-md-6'>
                <RaisedButton disabled={this.state.answered || !this.state.enabled} label={this.state.ques.options[0]} onClick={this.onClick.bind(this,this.state.ques.options[0])} primary={true} style={optionStyle} />


              </div>
              <div className='col-xs-6 col-sm-6 col-lg-6 col-md-6'>
                <RaisedButton disabled={this.state.answered || !this.state.enabled} label={this.state.ques.options[1]} onClick={this.onClick.bind(this,this.state.ques.options[1])} primary={true} style={optionStyle} />
              </div>
              <div className='col-xs-6 col-sm-6 col-lg-6 col-md-6'>
                <RaisedButton disabled={this.state.answered || !this.state.enabled} label={this.state.ques.options[2]} onClick={this.onClick.bind(this,this.state.ques.options[2])} primary={true} style={optionStyle} />
              </div>
              <div className='col-xs-6 col-sm-6 col-lg-6 col-md-6'>
                <RaisedButton disabled={this.state.answered || !this.state.enabled} label={this.state.ques.options[3]} onClick={this.onClick.bind(this,this.state.ques.options[3])} primary={true} style={optionStyle} />
              </div>

            </div>

          </div>

        </div>
      </div>
    );
  }
}
