import React from 'react';
import Paper from 'material-ui/Paper';



var x = React.createClass({
  render: function(){
    return(


<Paper>

    <h3>
      {this.props.badge.title}

    </h3>

    <div>
      <img src={this.props.badge.img} />
    </div>

    <h4>Description</h4>








    </Paper>

  );
}
});

module.exports= x;
