import PropTypes from "prop-types";
import Painting from "./Painting";
import { List } from "../Recipes/RecipeListStyled";
import { Item } from "../Recipes/RecipeListStyled";

export default function PaintingList({ items }) {
  return (
    <List>
      {items.map((item) => (
        <Item key={item.id}>
          <Painting
            imgUrl={item.url}
            title={item.title}
            autorUrl={item.autor.url}
            autor={item.autor.tag}
            price={item.price}
            quantity={item.quantity}
          />
          <div> social links</div>
        </Item>
      ))}
    </List>
  );
}
PaintingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
