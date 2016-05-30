var React = require('react');
var Slider = require('react-slick');
import Paper from 'material-ui/Paper';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ProgressBar from './progressBar';
import Timer from './timer';
import Questions from './questions';
import Piechart from '../piechart';


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
      ques:{}
    };
  }
  componentDidMount(){
    this.socket = io();
    var that = this;
    this.socket.on('new question',function(data){
      console.log(data);
      that.setState({ques:data})
    })

  }

  render(){
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
      <ProgressBar seconds={10} height={15} />
      <div className='row'  >
        <div className='col-lg-4 col-xs-4 col-md-4 col-sm-4'>
          <List>
            <ListItem disabled={true} leftAvatar={<Avatar color={deepOrange300} backgroundColor={purple500} >D</Avatar>}>
            </ListItem>
          </List>
        </div>
        <div className='col-lg-4 col-xs-4 col-md-4 col-sm-4'>
          <div className='row center-xs'><Timer seconds={10} /></div>
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
      <Questions data={this.state.ques} />
      </div>
    );
  }
}
