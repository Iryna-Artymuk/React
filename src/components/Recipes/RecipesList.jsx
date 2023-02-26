import PropTypes from "prop-types";
import OneRecipe from "./OneRecipe";
import { List } from "./RecipeListStyled";
import { Item } from "./RecipeListStyled";

export default function RecipesList(props) {
  const { items, deleteRecipe, toggleModal, addImgUrl } = props;

  return (
    <List>
      {items.map((item) => (
        <Item key={item.id}>
          <OneRecipe
            addImgUrl={addImgUrl}
            toggleModal={toggleModal}
            deleteRecipe={deleteRecipe}
            id={item.id}
            dishName={item.name}
            image={item.image}
            time={item.time}
            servings={item.servings}
            calories={item.calories}
            difficulty={item.difficulty}
          />
        </Item>
      ))}
    </List>
  );
}

RecipesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
};
