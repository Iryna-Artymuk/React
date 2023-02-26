import React from "react";
import PropTypes from "prop-types";
import Controls from "./Controls";
class Counter extends React.Component {
  static defaultProps = {
    startValue: 0,
  };
  static propTypes = {
    startValue: PropTypes.number.isRequired,
  };

  state = {
    value: this.props.startValue,
  };
  hendelIncrement = (event) => {
    console.log("клік на кнопку збільшити");
    // setTimeout(() => {
    //   console.log(event.target);
    // }, 3000);
    // this.setState({
    //   value: this.state.value + 1,
    // });

    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  };
  hendelDecrement = () => {
    console.log("клік на кнопку зменшити");
    //     this.setState({
    //       value: 1,
    //     });
    //   };
    this.setState((prevState) => ({ value: prevState.value - 1 }));
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          padding: "15px",

          border: "2px solid red",
          fontSize: "48px",
        }}
      >
        <span> {this.state.value}</span>
        <Controls
          OnDecrement={this.hendelDecrement}
          OnIncrement={this.hendelIncrement}
        />
      </div>
    );
  }
}

export default Counter;
