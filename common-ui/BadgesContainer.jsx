import React from 'react';
import x from './x';
var BadgesContainer = React.createClass({

  render: function(){
    var allTheBadges = [];
    this.props.badge.forEach(function(badge){
      allTheBadges.push(
        <div className="col-xs-12 col-lg-3 col-md-3 col-sm-3">
        <x badge={badge} key={badge.title}/>
        </div>
      );
    })

    return(
      <div className="container-fluid">
      <div className="row">
      {allTheBadges}
      </div>
      </div>
    );
  }

});

module.exports = BadgesContainer;
