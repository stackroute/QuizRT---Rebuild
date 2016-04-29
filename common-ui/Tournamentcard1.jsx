import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


  <Card>
    <CardHeader
    title: "Music",
    AvatarURL: '.imgs1/muavtar.jpg',
    URL:'./imgs1/mumain.jpg',
    OverlayTitle: "Musicquiz"
    OverlaySubtitle: "Let's play a quiz on music",

     TabContent{
      description: "Music is found in every known culture, past and present, varying widely between times and places. Since all people of the world, including the most isolated tribal groups, have a form of music, it may be concluded that music is likely to have been present in the ancestral population prior to the dispersal of humans around the world.",
      rules:"Rules to be followed",
      prizes:"Someprizes"
    }
    />
    <CardActions>
      <RaisedButton label="Register" />
      <RaisedButton label="Play" />
    </CardActions>
  </Card>
);
module.exports=TournamentCard1;
