import React, { Component } from 'react';
import './TodoEditor.css';

class TodoEditor extends Component {
  state = {
    text: ' ',
  };

  handelTextAreaChange = event => {
    this.setState({
      text: event.currentTarget.value,
    });
    this.setState({ text: event.currentTarget.value });
  };

  handelSubmit = event => {
    event.preventDefault();

    this.props.addTodo(this.state.text);
  };
  render() {
    return (
      <form className="TodoEditor" onSubmit={this.handelSubmit}>
        <textarea
          value={this.state.text}
          className="TodoEditor__textarea"
          onChange={this.handelTextAreaChange}
        ></textarea>
        <button type="submit" className="TodoEditor__button">
          add
        </button>
      </form>
    );
  }
}

export default TodoEditor;
