import React, { forwardRef } from "react";
import "./checkout-product.styles.css";
import Rating from "../uikit/rating/rating.component";
import Button from "../uikit/button/button.component";
import { useStateValue } from "../../contexts/StateContextProvider";

const CheckoutProduct = forwardRef(
  ({ product: { id, title, image, price, rating }, onRemove }, ref) => {
    const [_, dispatch] = useStateValue();

    const handleRemoveItem = () =>
      dispatch({ type: "REMOVE_FROM_BASKET", itemId: id });

    return (
      <div className="checkoutProduct" ref={ref}>
        <div className="checkoutProduct__imageContainer">
          <img src={image} alt="" className="checkoutProduct__image" />
        </div>
        <div className="checkoutProduct__content">
          <div className="checkoutProduct__productInfo">
            <p>{title}</p>
            <p className="product__price">
              <small>$</small>
              <strong>{price}</strong>
            </p>
          </div>
          <Rating rating={rating} />
          <Button size="small" onClick={handleRemoveItem}>
            Remove from basket
          </Button>
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;
