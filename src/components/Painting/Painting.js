import PropTypes from "prop-types";
import defaultImg from "./error.jpg";
import { FcBusinessman } from "react-icons/fc";
import { FcCurrencyExchange } from "react-icons/fc";
import { FcShipped } from "react-icons/fc";

console.log(defaultImg);
export default function Painting(props) {
  // console.log(props);
  const {
    imgUrl = defaultImg,
    title,
    autorUrl,
    autor = "unknown",
    price,
    quantity,
  } = props;
  return (
    <div
      style={{
        border: "2px solid red",

        padding: "30px",
      }}
    >
      <img src={imgUrl} width="250px" height="200px" alt="" />
      <h2>{title} </h2>
      <p>
        <FcBusinessman size={32} />
        Автор:
        <a href={autorUrl} target="blank">
          {" "}
          {autor}
        </a>
      </p>
      <p>
        {" "}
        <FcCurrencyExchange size={32} /> Цена:{price}
      </p>
      <p>Доступность: {quantity < 10 ? "Заканчивается" : "есть в наличии"}</p>
      <button
        type="button"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <FcShipped size={32} /> Добавить в корзину
      </button>
    </div>
  );
}
Painting.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  autorUrl: PropTypes.string.isRequired,
  autor: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
