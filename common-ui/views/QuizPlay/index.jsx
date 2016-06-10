import React from 'react';

import QuizPlay from './quiz';
import Wait from '../WaitingPage';

export default class Quiz extends React.Component{
  state = {
   check:true
 };
  render(){
    this.state.check=true;

    const {check} = this.state;

    return(
      <div>
      {check ?(
        <Wait />
                ):(
                  <Wait />
                )
      }
      </div>
    )
  }
};
