import React, { Component } from "react";
// import data from "../data.json";
import options from "../data/color.json";
// import recipes from "../Recipes/recipes.json";
// import PaintingList from "../Painting/PaintingList";
// import RecipesList from "../Recipes/RecipesList";
import { Layout } from "../Layout/Layout.styled";
import { Global } from "@emotion/react";
import { emotionReset } from "../Global/Global.styled";

import Counter from "../Counter";
import Dropdown from "../Dropdown/Dropdown";
import ColorPicker from "../ColorPicker/ColorPicker";
import TodoList from "../TodoList";
import Modal from "./Modal";
import Form from "../Form";
class App extends Component {
  state = {
    todo: [
      { id: "id-1", name: "Learn React.js", complited: false },
      { id: "id-2", name: "Find job", complited: false },
      { id: "id-3", name: "Go for vacation to Tunisia", complited: false },
    ],
    modalActive: false,
    selectedImg: null,
    inputValue: "iryna",
  };
  deleteToDo = (toDoId) => {
    console.log("delete");
    this.setState((prevState) => ({
      todo: prevState.todo.filter((toDoItem) => toDoItem.id !== toDoId),
    }));
  };
  toggleModal = () => {
    this.setState((prevState) => ({
      modalActive: !prevState.modalActive,
    }));
  };

  addImgUrl = (url) =>
    this.setState({
      selectedImg: url,
    });
  formSubmitHandler = (data) => {
    console.log(data);
  };
  // hendelInputChange = (event) => {
  //   console.log(event.currentTarget.value);
  //   this.setState({ inputValue: event.currentTarget.value });
  // };

  // hendelNameChange = (event) => {
  //   console.log(event.currentTarget.value);
  //   this.setState({ name: event.currentTarget.value });
  // };

  render() {
    return (
      <Layout>
        {/* <input
          style={{
            border: "2px solid purple",
            height: 50,
            background: "wheat",
            fontSize: 32,
            padding: 10,
          }}
          type="text"
          value={this.state.inputValue}
          onChange={this.hendelChange}
        ></input> */}
        <Form FormSubmit={this.formSubmitHandler} />
        {this.state.modalActive && (
          <Modal
            toggleModal={this.toggleModal}
            selectedImg={this.state.selectedImg}
          />
        )}
        <Counter startValue={1} />
        <TodoList todo={this.state.todo} deleteToDo={this.deleteToDo} />
        <ColorPicker options={options} />
        <Dropdown toggleModal={this.toggleModal} addImgUrl={this.addImgUrl} />
        <Global styles={emotionReset} />
        {/* <PaintingList items={data} /> */}
        {/* <RecipesList items={recipes} /> */}
      </Layout>
    );
  }
}
export default App;
