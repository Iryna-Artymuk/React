import React, { Component } from 'react';
import './ColorPicker.css';

import classNames from 'classnames';
class ColorPicker extends Component {
  state = {
    activeButtonIndx: 0,
  };
  setActiveIndexToState = index => {
    return this.setState({
      activeButtonIndx: index,
    });
  };
  makeClassList = index => {
    return classNames('button', {
      activeButton: index === this.state.activeButtonIndx,
    });
    // const classes = ['button'];
    // if (index === this.state.activeButtonIndx) {
    //   classes.push('activeButton');
    // }
    // return classes.join(' ');
  };

  render() {
    const { options } = this.props;
    const { activeButtonIndx } = this.state;
    const activeButtonIndex = options[activeButtonIndx];
    // const activeButtonIndex =this.props.options[this.state.activeButtonIndx];
    const activeBackground = activeButtonIndex.color;
    return (
      <div
        className="colorContainer"
        style={{
          backgroundColor: activeBackground,
        }}
      >
        <h2 className="title"> Color Picker</h2>
        <div className="colorBox">
          {this.props.options.map(({ lable, color }, index) => (
            <button
              key={lable}
              className={this.makeClassList(index)}
              style={{
                backgroundColor: color,
              }}
              onClick={() => this.setActiveIndexToState(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

// const ColorPicker = ({ options }) => {
//   console.log(options);
//   return (
//     <div className="colorContainer">
//       <h2 className="title"> Color Picker</h2>
//       <div className="colorBox">
//         {options.map(({ label, color }) => (
//           <div
//             key={label}
//             style={{ backgroundColor: color, width: "30vw", height: "10vw" }}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };
export default ColorPicker;
