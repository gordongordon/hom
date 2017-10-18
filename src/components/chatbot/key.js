import React from 'react';
import KeyboardedInput from 'react-touch-screen-keyboard';
import 'react-touch-screen-keyboard/src/Keyboard.css';
 
class Key extends React.Component {
  render() {
    return (
      <KeyboardedInput
        enabled
        type={this.props.type}
        onChange={this.props.onChange}
        value={this.props.value}
        min={this.props.min}
        max={this.props.max}
        step={this.props.step}
        name={this.props.name}
        className={this.props.className}
        placeholder={this.props.placeholder}
        defaultKeyboard="num"
        secondaryKeyboard="en" // optional
        readOnly={this.props.readOnly}
        opacity={0.9} // optional
      />
    );
  }
}
export default Key;