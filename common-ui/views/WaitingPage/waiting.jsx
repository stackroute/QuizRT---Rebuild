import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
const Style1= {
    "text-align": "center",
    //"margin-top":'18%',
    //"height":'100%',
    "margin":"auto",

  }
  const Style2= {
    "margin-top":'12%'
  }
export default class Test extends React.Component{
  constructor(props){
    super(props);
  }

  render (){
    return(
  <div style={Style1}>
  <div>
  <h2>Waiting for the opponents</h2>
</div>
<div style={Style2}>
    <CircularProgress size={1.8}  />
  </div>
  </div>
);
}
};
