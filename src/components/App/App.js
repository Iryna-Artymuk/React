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
class App extends Component {
  state = {
    todo: [
      { id: "id-1", name: "Learn React.js", complited: false },
      { id: "id-2", name: "Find job", complited: false },
      { id: "id-3", name: "Go for vacation to Tunisia", complited: false },
    ],
    modalActive: false,
    selectedImg: null,
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

  render() {
    return (
      <Layout>
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
