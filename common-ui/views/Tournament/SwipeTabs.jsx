import {Tabs, Tab} from 'material-ui/Tabs';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';

//Styles
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};


var SwipeTabs = React.createClass({

  getInitialState: function(){
    return ({slideIndex:0});
  },

  handleChange: function(value){
    this.setState({slideIndex:value});
  },
  render: function(){

    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
          >
          <Tab label="Description" value={0} />
          <Tab label="Rules" value={1} />
          <Tab label="Prizes" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
           >
          <div>
            <div style={styles.slide}>{this.props.TabContent.description}</div>
            <br />
          </div>
          <div style={styles.slide}>
            {this.props.TabContent.rules}
          </div>
          <div style={styles.slide}>
            {this.props.TabContent.prizes}
          </div>
        </SwipeableViews>
      </div>
    );
  }
});
module.exports = SwipeTabs;
