import React, { useState } from "react";
import LoginForm from "./component/LoginForm";
import SignupForm from "./component/SignupForm";
import Player from "./components/Player/Player";
import { CartState } from "./Context/Context";
import ReadyPlayer from "./ReadyPlayer";
import { Alert, Button } from "react-bootstrap";
import SingleProduct2 from "./components/Player/SingleProduct2";

const Login = () => {
  const {
    state: { cart },
    user,
    setUser,
    error,
    setError,
  } = CartState();

  const adminUser = {
    email: "user@user.com",
    password: "123",
  };
  //   const [user, setUser] = useState({ name: "", email: "" });
  //   const [error, setError] = useState("");

  const Login = (details) => {
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
      alert("Details do not match");
      <Alert variant="success">hello</Alert>;
    }
  };

  return (
    <div className="profilePage">
      {user.email != "" ? (
        <>
          <div className="welcome">
            <div className="profile">
              <img src={"/images/dog.jpg"} alt="" />
              <h2>
                {" "}
                Welcome, <span>{user.name}</span>
              </h2>
              <div className="productContainer">
                {cart.map((item) => {
                  return <SingleProduct2 item={item} key={item.id} />;
                })}
              </div>
            </div>
          </div>
          <ReadyPlayer />;
        </>
      ) : (
        <div>
          {/* <SignupForm /> */}
          <LoginForm Login={Login} error={error} />
        </div>
      )}
    </div>
  );
};

export default Login;
