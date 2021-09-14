import React, { useState } from "react";
import LoginForm from "./component/LoginForm";
import SignupForm from "./component/SignupForm";
import Player from "./components/Player/Player";
import { CartState } from "./Context/Context";
import ReadyPlayer from "./ReadyPlayer";
import { Alert, Button } from "react-bootstrap";
import SingleProduct2 from "./components/Player/SingleProduct2";
import { Favorite } from "@material-ui/icons";
import AlertBox from "./components/Player/AlertBox";

const Login = (details) => {
  console.log(details);

  const {
    state: { favorite },
    login,
    setLogin,
    user,
    setUser,
    error,
    setError,
  } = CartState();

  const adminUser = {
    email: "user@user.com",
    password: "123",
  };

  const LoginDetails = (details) => {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("Logged In ");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      // alert("Details do not match");
      setLogin(false);
    }
  };

  return (
    <div className="profilePage">
      {login ? <div></div> : <AlertBox />}

      {user.email !== "" ? (
        <div className="favoritePlayer">
          <div className="welcome">
            <div className="profile">
              <section className="mobileProfile">
                <img src={"/images/dog.jpg"} alt="" />
                <h4>
                  {" "}
                  Welcome, <span>{user.name}</span>
                </h4>
              </section>
              <div className="productContainer">
                {favorite.map((item) => {
                  console.log(item);
                  return <SingleProduct2 item={item} key={item.id} />;
                })}
              </div>
            </div>
          </div>
          <ReadyPlayer />;
        </div>
      ) : (
        <div className="loginBox">
          {/* <SignupForm /> */}
          <LoginForm Login={LoginDetails} error={error} />
        </div>
      )}
    </div>
  );
};

export default Login;
