var React = require('react');
var Slider = require('react-slick');
import Paper from 'material-ui/Paper';

const style = {
  height: 120,
  width: 120,
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
                  dots: true
              }
          }, {
              breakpoint: 600,
              settings: {
                  dots: false,
                  slidesToShow: 4,
                  slidesToScroll: 3
              }
          }, {
              breakpoint: 480,
              settings: {
                  dots: false,
                  slidesToShow: 4,
                  slidesToScroll: 3
              }
          }]
      };
    return (
      <div>
        <Slider {...settings}>
          <div><Paper style={style} zDepth={2} >1 <p>First</p> 24</Paper></div>
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
    );
  }
}
