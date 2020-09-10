import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./header.styles.css";
import { useStateValue } from "../../contexts/StateContextProvider";
import * as firebaseUtils from "./../../firebase/firebase.utils";

const Header = () => {
  const [{ basket, currentUser }] = useStateValue();

  const handleAuthentication = () => {
    if (currentUser) {
      firebaseUtils.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt=""
          className="header__logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!currentUser && "/login"}>
          <div onClick={handleAuthentication}>
            <div className="header__option">
              <span className="header__optionLineOne">
                Hello {currentUser ? currentUser.email : "Guest"}
              </span>
              <span className="header__optionLineTwo">
                {currentUser ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">&amp; Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>

      <Link to="/checkout">
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
