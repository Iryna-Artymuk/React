import React, { Component } from 'react';
import './ColorPicker.css';

import classNames from 'classnames/bind';
class ColorPicker extends Component {
  state = {
    activeButtonIndex: 0,
  };

  // шоб попередити повторний рендер уже активного компоненту шоб

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState.activeButtonIndex !==
      this.state.activeButtonIndex
    );

    // або як алтернатива ехпортуват pureComponent
    //import React, { PureComponent } from 'react';
    // class ColorPicker extends Component
    // в ньому автоматично прівнюється попередній стейт і наступний
  }

  setActiveIndexToState = index => {
    return this.setState({
      activeButtonIndex: index,
    });
  };
  makeClassList = index => {
    // const cx = classNames.bind(styles);
    // let className = cx({
    //   activeButtonIndx: index,
    // });

    // return className;
    return classNames('button', {
      activeButton: index === this.state.activeButtonIndex,
    });
    // const classes = ['button'];
    // if (index === this.state.activeButtonIndx) {
    //   classes.push('activeButton');
    // }
    // return classes.join(' ');
  };

  render() {
    // console.log('render');
    const { options } = this.props;
    const { activeButtonIndex } = this.state;
    const activeButton = options[activeButtonIndex];
    // console.log('activeButtonIndex', activeButtonIndex);
    // console.log('activeButton', activeButton);
    // const activeButton =this.props.options[this.state.activeButtonIndx];
    // в в масиві обєктів знайти обєкт індекс якого співпадає з активним індексом в state(його передаєм під час кліку на кнопку) це є кнопка на яку нажали
    const activeBackground = activeButton.color;
    return (
      <div
        className="colorContainer"
        style={{
          backgroundColor: activeBackground,
        }}
      >
        <h2 className="title"> Color Picker</h2>
        <div className="colorBox">
          {this.props.options.map(
            ({ lable, color }, index) => (
              <button
                key={lable}
                className={this.makeClassList(index)}
                style={{
                  backgroundColor: color,
                }}
                onClick={() =>
                  this.setActiveIndexToState(index)
                }
              ></button>
            )
          )}
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
