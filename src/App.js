import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import Home from "./pages/home/home.component";
import Checkout from "./pages/checkout/checkout.component";
import Login from "./pages/login/login.component";
import * as firebaseUtils from "./firebase/firebase.utils";
import { useStateValue } from "./contexts/StateContextProvider";

const App = () => {
  const [_, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = firebaseUtils.auth.onAuthStateChanged((authUser) =>
      dispatch({ type: "SET_USER", authUser })
    );
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
