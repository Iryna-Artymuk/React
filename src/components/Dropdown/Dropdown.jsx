import React from 'react';
import './Dropdown.css';
import RecipesList from '../Recipes/RecipesList';
import recipes from '../Recipes/recipes.json';
import RecipeForm from '../RecipeForm/RecipeForm';
class Dropdown extends React.Component {
  state = {
    visible: true,
    recipes: [],
  };

  componentDidMount() {
    const StorageRecipes = localStorage.getItem('recipes');
    const parsedResipes = JSON.parse(StorageRecipes);
    // первірка якшо в сторедж уже є рецепти записати їх в стейт і зарендирити якщо ні записати початковий стейт
    // ? перeвірка чи   StoregeRecipes має значення true
    StorageRecipes !== null
      ? this.setState({ recipes: parsedResipes })
      : this.setState({ recipes: recipes });
  }

  // якщо попередній стейт відрізняється ід попередньго значить є зміни і їх треба додати в локалсторедж
  //щоб потім пререзавантаженні сорінки їх звідти взяти і зарендирити
  componentDidUpdate(_, prevState) {
    if (prevState.recipes !== this.state.recipes) {
      localStorage.setItem(
        'recipes',
        JSON.stringify(this.state.recipes)
      );
    }
  }

  toggle = () => {
    this.setState(prevState => ({
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
  deleteRecipe = id => {
    this.setState(prevState => ({
      recipes: prevState.recipes.filter(
        item => item.id !== id
      ),
    }));
  };

  addNewRecipe = newRecipe => {
    this.setState(prevState => {
      return {
        recipes: [...prevState.recipes, newRecipe],
      };
    });
  };
  render() {
    return (
      <div className="Dropdow">
        <button
          type="button"
          className="dropdownToggle"
          onClick={this.toggle}
        >
          {this.state.visible
            ? 'Hide Recipes'
            : 'Show Recipes'}
        </button>

        {this.state.visible && (
          <div className="Dropdown__menu">
            <RecipeForm addNewRecipe={this.addNewRecipe} />
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
