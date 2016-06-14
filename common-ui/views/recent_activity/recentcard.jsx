import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import ContentSend from 'material-ui/svg-icons/content/send';
import Paper from 'material-ui/Paper';
import PaperTopic from '../Paper/paper_topic';
import PaperTournament from '../Paper/paper_tournament';
import SocialPlugin from '../socialPlugins';
import Avatar from 'material-ui/Avatar';
import {indigo900,red400} from 'material-ui/styles/colors';


 const style1 = {
   margin: 12,
 };

 const img_style ={
   width : "100%"
 };

const description={
  textAlign:'center'
}

 const styleshare = {
     margin: 12,
 };

 const style = {
  margin: 5,
  textAlign: 'center',

};

const card={
  textAlign: 'left',
};
//fix me
const badge={
  height: 250,
  width: "50%",
  maxWidth:"70%",
  minWidth: "50%",
};

class Recentcard extends React.Component {



  render() {
    var cardType = this.props.activity.cardType;

    return (
      <div class="col-xs-12 col-sm-8 col-md-6 col-lg-4">
        {cardType === "topics" ? (
          <Card>
            <CardHeader style={card}
               title={this.props.activity.title}
               subtitle="Challenge is the way to aspire game."
               avatar={
                       <Avatar
                        size={30}
                        style={style}
                        backgroundColor={indigo900}
                        > T
                        </Avatar>
                     }
            />
            <div className="container-fluid">
                <div className="row">
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4"  >
                    <img class="img-responsive"  style = {img_style} src="https://donnasbookshelf.files.wordpress.com/2015/02/congratulations1.jpg"  alt="abc" />
                  </div>
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4"  >
                  <p style={description}>
                    We're proud of you and your Accomplishments.
                  </p>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4"  >
            <PaperTopic analytics={this.props.activity.analytics}/>
            </div>
            </div>
            </div>
              <SocialPlugin />
          </Card>
        ) : (
          <Card>
            <CardHeader style={card}
               title={this.props.activity.title}
               subtitle="You just pick them up at Competetions."
               avatar={
                       <Avatar
                        size={30}
                        style={style}
                        backgroundColor={red400}
                        > T
                        </Avatar>
                     }
            />
            <div className="container-fluid">
                <div className="row">
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4"  >
                    <img class="img-responsive"  style = {img_style} src="http://weneedfun.com/wp-content/uploads/2016/04/Congratulations-Quotes-201.jpg"  alt="abc" />
                  </div>
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4"  >
                  <p style={description}>
                    Every Accomplishment starts with the decision to try.Challenging is Tournament.
                  </p>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4"  >
            <PaperTournament analytics={this.props.activity.analytics}/>
            </div>
            </div>
            </div>
              <SocialPlugin/>
          </Card>
        )}
    </div>
    );
  }
}

export default Recentcard;
