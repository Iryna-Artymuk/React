import React from "react";
import "./Dropdown.css";
import RecipesList from "../Recipes/RecipesList";
import recipes from "../Recipes/recipes.json";
class Dropdown extends React.Component {
  state = {
    visible: true,
    recipes,
  };

  toggle = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };
  //   show = () => {
  //     this.setState({
  //       visible: true,
  //     });
  //   };
  //   hide = () => {
  //     this.setState({
  //       visible: false,
  //     });
  //   };
  deleteRecipe = (id) => {
    this.setState((prevState) => ({
      recipes: prevState.recipes.filter((item) => item.id !== id),
    }));
  };
  render() {
    return (
      <div className="Dropdow">
        <button type="button" className="dropdownToggle" onClick={this.toggle}>
          {this.state.visible ? "Hide Recipes" : "Show Recipes"}
        </button>

        {this.state.visible && (
          <div className="Dropdown__menu">
            <RecipesList
              addImgUrl={this.props.addImgUrl}
              toggleModal={this.props.toggleModal}
              items={this.state.recipes}
              deleteRecipe={this.deleteRecipe}
            />
          </div>
        )}
      </div>
    );
  }
}
export default Dropdown;
