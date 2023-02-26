import PropTypes from "prop-types";
import { BsAlarm } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { HiOutlineChartBar } from "react-icons/hi";
import {
  Image,
  Title,
  ItemContainer,
  RecipeInfo,
  Bagge1,
  ControlRecipeWrapper,
} from "./RecipeListStyled";

export default function OneRecipe(oneRecipeProps) {
  const {
    id,
    image,
    time,
    servings,
    calories,
    dishName,
    difficulty,
    deleteRecipe,
    toggleModal,
    addImgUrl,
  } = oneRecipeProps;

  return (
    <ItemContainer>
      {" "}
      <div style={{ with: "150px", position: "relative" }}>
        <Image src={image} alt={oneRecipeProps.name} width="240" />
        <Title>{dishName}</Title>

        <ControlRecipeWrapper>
          <button onClick={() => deleteRecipe(id)}> Delete </button>
          <button
            onClick={(event) => {
              toggleModal();

              addImgUrl(image);
            }}
          >
            Zoom
          </button>
        </ControlRecipeWrapper>
      </div>
      <RecipeInfo>
        <p>
          <BsAlarm />
          {time} min
        </p>
        <p>
          {" "}
          <AiOutlinePieChart />
          {servings}servings
        </p>
        <p>
          {" "}
          <HiOutlineChartBar />
          {calories}calories
        </p>
      </RecipeInfo>
      <div>
        <Title>Difficulty</Title>
        <RecipeInfo>
          <Bagge1 isActive={difficulty === "easy"}>Easy</Bagge1>
          <Bagge1 isActive={difficulty === "medium"}>Medium</Bagge1>
          <Bagge1 isActive={difficulty === "hard"}>Hard</Bagge1>
        </RecipeInfo>
      </div>
    </ItemContainer>
  );
}

OneRecipe.propTypes = {
  deleteRecipe: PropTypes.func,
  dishName: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  servings: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  difficulty: PropTypes.oneOf(["easy", "medium", "hard"]),
};
