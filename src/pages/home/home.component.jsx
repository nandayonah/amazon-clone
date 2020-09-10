import React from "react";
import "./home.styles.css";
import Product from "../../components/product/product.component";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1"
            title="The Lean Startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={3}
          />

          <Product
            id="2"
            title="Dell 27 LED backlit LCD Monitor SE2719H IPS Full HD 1080p 1920 x 1080 at 60 Hz HDMI VGA,Black"
            price={165.55}
            image="https://images-na.ssl-images-amazon.com/images/I/81nSaeP3AvL._AC_SX679_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="RUNMUS Gaming Headset Xbox One Headset with 7.1 Surround Sound"
            price={49.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61lnzTv2a0L._AC_SX679_.jpg"
            rating={5}
          />
          <Product
            id="4"
            title="Apple Watch Series 3 (GPS, 38mm) - Silver Aluminum Case with White Sport Band"
            price={99.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71vCuRn4CkL._AC_SX522_.jpg"
            rating={4}
          />
          <Product
            title="DualShock 4 Wireless Controller for PlayStation 4 - Magma Red"
            price={64.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81L9%2B4dTIgL._SX522_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="5"
            title="Final Fantasy VII Remake - PlayStation 4 Deluxe Edition"
            price={95.0}
            image="https://images-na.ssl-images-amazon.com/images/I/713-OtN4-8L._SX385_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
