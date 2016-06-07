import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {orange500} from 'material-ui/styles/colors';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import {grey600,grey500, grey100, red900, teal500} from 'material-ui/styles/colors';
import ActionHome from 'material-ui/svg-icons/action/home';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import People from 'material-ui/svg-icons/social/people';
import PeopleOutline from 'material-ui/svg-icons/social/people-outline';
var baseUrl = 'http://localhost:8080/';

const TitleStyle={
  fontSize:"1em",
    width:"100%",
  fontWeight:"1em"
}

const SubtitleStyle={
  fontSize:"0.8em",
    width:"100%"
}
var style1= {
  margin:"5px",

}
var imgStyle={
  height:"50%",
  margin:"auto"
}

const BtnStyle ={
  marginLeft:'35%'
}

var style1= {
  background:'#c6ecc6'
}

var cardDivStyle={
   margin:10,
}

var title1={
    paddingLeft:10,
    paddingTop:10,
    marginBottom:5
}
var title2={
  paddingLeft:10,
  marginTop:10,
  marginBottom:10
}
var title3={
    margin:'auto',
    width:'60%'
}
var title4={
     width:"30%",
     margin:'auto'
}

const style_fav={
    width:'5%',
    marginTop:10,
    marginBottom:10,
    float:'right',
}
const style_followers={
    width:'12%',
    marginTop:15,
    marginBottom:10,
    float:'right',
    fontWeight:'bold',
    fontSize:'small'
}
const style_favorite={
    width:'10%',
    marginTop:15,
    marginBottom:10,
    float:'right',
    fontWeight:'bold',
    fontSize:'small'
}
const iconStyles = {
  marginRight: 24,
  height:60,
  width:60,
};

var SubTopicCard = React.createClass({
  getInitialState:function(){
     return{incre:false,no:this.props.topics.topicFollower}
 },
 handleCheck:function(){
console.log('hiii');
this.state.incre=!this.state.incre;
console.log(this.state.incre+'---');
console.log(this.props.topics.topicName+'-------------');
var data1 = {
  incre: this.state.incre,
  id:this.props.topics.topicName
}
$.ajax({
  type:'POST',
  data :JSON.stringify(data1),
  contentType : 'application/json',
  url:baseUrl+'api/check',
  success:(function(data){
    console.log('folowers increamented--------------'+data.topicFollowers+'now -----------');
    this.setState({no:data.topicFollowers})
  }).bind(this),
  error:function(err){
    console.log(err);
    console.log('error hai');
  }
})
},
  render: function(){
    return(


<Card style ={cardDivStyle}>
    <p style={style_favorite}>{this.props.topics.playersPerMatch}</p>
    <Checkbox
      checkedIcon={<ActionFavorite />}
      uncheckedIcon={<ActionFavoriteBorder />}
      style={style_fav}
      iconStyle={{fill: '#B71C1C'}}
      onCheck={this.handleCheck.bind(this)}

    />
    <p style={style_followers}>{this.state.no} </p>
    <Checkbox
      checkedIcon={<People />}
      uncheckedIcon={<PeopleOutline />}
      style={style_fav}
      iconStyle={{fill: '#009688'}}

      />
    <h4 style={title1}>
      {this.props.topics.topicName}
    </h4>
    <h5 style={title2} color={grey500}>{this.props.topics.topicDescription}</h5>

    <CardMedia overlay={
      <div>
      <CardTitle subtitle="No of Users played:15" style={title3} color={grey100}/>
      <MapsPersonPin color={grey100}/>
      </div>
     }>
      <img src={this.props.topics.topicIcon} />
    </CardMedia>


    <CardActions >
      <div className="col-md col-xs col-lg col-sm">
        <RaisedButton label="Play" secondary={true} style={BtnStyle} />
        </div>
     </CardActions>

    </Card>

   );
}
});

module.exports= SubTopicCard;
