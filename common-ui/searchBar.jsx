import React from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';

var style={
  float:'right'
}

var SearchBar = React.createClass({
  filterTopics: function(){
    console.log('inside searchbar');
  },
  render:function(){
    return(  <div style={style}>
        <TextField
          hintText="Hint Text"
        />
      <IconButton>
      <i className="material-icons">search</i>
      </IconButton>
      </div>);
  }


})
module.exports = SearchBar;
