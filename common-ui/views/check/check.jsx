import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

/**
 * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * Avoid using long step names in horizontal steppers.
 *
 * Linear steppers require users to complete one step in order to move on to the next.
 */
class HorizontalLinearStepper extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: true,
    });
  };

  handlePrev = () => {
  const {stepIndex} = this.state;
  this.setState({
    stepIndex: stepIndex - 1,
    finished: false,
  });
  };

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>

        <div style={contentStyle}>
          {finished ? (
            <div style={{marginTop: 12}}>
              <RaisedButton
                label={'UnRegister'}
                primary={true}
                onClick={this.handlePrev}
              />
            </div>
          ) : (
            <div>
              <div style={{marginTop: 12}}>
                <RaisedButton
                  label={'Register'}
                  secondary={true}
                  onClick={this.handleNext}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default HorizontalLinearStepper;
