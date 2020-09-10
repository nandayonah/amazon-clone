import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./login.styles.css";
import Button from "../../components/uikit/button/button.component";
import * as firebaseUtils from "./../../firebase/firebase.utils";

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (event) => setEmail(event.target.value);
  const handleChangePassword = (event) => setPassword(event.target.value);

  const handleSignIn = (event) => {
    event.preventDefault();

    firebaseUtils
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err));
  };

  const handleRegister = () => {
    firebaseUtils
      .registerNewAccount(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG7.png"
          alt=""
          className="login__logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form onSubmit={handleSignIn}>
          <h5>Email</h5>
          <input type="text" value={email} onChange={handleChangeEmail} />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={handleChangePassword}
          />

          <button className="login__signInButton" type="submit">
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={handleRegister} className="login__registerButton">
          Create your amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
