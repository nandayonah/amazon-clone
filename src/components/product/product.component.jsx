import React from "react";
import "./product.styles.css";
import { useStateValue } from "../../contexts/StateContextProvider";
import Button from "../uikit/button/button.component";
import Rating from "../uikit/rating/rating.component";

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const handleClickAdd = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <Rating rating={rating} />
      </div>

      <img src={image} alt="" />

      <Button onClick={handleClickAdd}>Add to Basket</Button>
    </div>
  );
};

export default Product;
