import TournamentsContainer from './TournamentsContainer';
import SwipeTabs from './SwipeTabs';
import TournamentCard from './TournamentCard';
import React from 'react';

export default class TC extends React.component {
  constructor()
  {
    super(props);
  }
  render(){
    return(
      <TournamentsContainer />
    );
  }
}
