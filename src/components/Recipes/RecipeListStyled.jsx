import styled from "@emotion/styled";
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

// export const Item = styled.div``;
// export const Image = styled.img``;
const Item = styled.li`
  width: 300px;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  padding: 10px;
`;
const ItemContainer = styled.div`
  justify-content: space-between;
  height: 350px;
  display: flex;

  border: 2px solid #c01212;
  border-radius: 5px;
  padding: 10px;
  flex-direction: column;
`;

const RecipeInfo = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  font-size: 16px;
  svg {
    color: red;
    margin-right: 5px;
  }

  span {
  }
`;

const Bagge1 = styled.span`
  width: 100px;
  padding: 5px;
  border: 2px solid black;
  background: ${(props) => {
    return props.isActive ? "red" : "white";
  }};
`;

const ControlRecipeWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    width: 50px;
    padding: 5px;
    border-radius: 5px;
    text-align: center;
    font-weight: 600;
  }
`;
export {
  ControlRecipeWrapper,
  Item,
  List,
  Image,
  Title,
  ItemContainer,
  RecipeInfo,
  Bagge1,
};
