import React, { Component } from 'react';
import './TodoEditor.css';

class TodoEditor extends Component {
  state = {
    text: ' ',
  };
  render() {
    return (
      <form className="TodoEditor">
        <textarea
          value={this.state.text}
          className="TodoEditor__textarea"
          onChange={() => this.handelTextAreaChange}
        ></textarea>
        <button
          type="submit"
          onclick={() => this.handelSubmit}
          className="TodoEditor__button"
        >
          Сохранить
        </button>
      </form>
    );
  }
}

export default TodoEditor;
