import React from "react";
import FlipMove from "react-flip-move";
import "./checkout.styles.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Subtotal from "../../components/subtotal/subtotal.component";
import { useStateValue } from "../../contexts/StateContextProvider";
import { getSubtotal } from "../../contexts/reducer";
import CheckoutProduct from "../../components/checkout-product/checkout-product.component";

const Checkout = () => {
  const [{ basket }] = useStateValue();

  const isEmptyBasket = basket?.length === 0;

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg"
          alt=""
        />

        <div>
          {isEmptyBasket ? (
            <div className="checkout__empty">
              <ShoppingCartIcon fontSize="large" /> Your Basket is Empty, See on
              Shopping!
            </div>
          ) : (
            <h2 className="checkout__title">Your Shopping Basket</h2>
          )}

          <FlipMove staggerDurationBy="30" duration={500}>
            {basket?.map((product) => (
              <CheckoutProduct key={product.id} product={product} />
            ))}
          </FlipMove>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal subtotal={getSubtotal(basket)} itemsCount={basket?.length} />
      </div>
    </div>
  );
};

export default Checkout;
