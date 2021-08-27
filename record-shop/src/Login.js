import React, { useState } from "react";
import LoginForm from "./component/LoginForm";
import SignupForm from "./component/SignupForm";
import Player from "./components/Player/Player";
import { CartState } from "./Context/Context";
import ReadyPlayer from "./ReadyPlayer";

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
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
    console.log("Logout");
  };

  return (
    <div>
      {user.email != "" ? (
        <div className="welcome">
          <h2>
            {" "}
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
          <ReadyPlayer />;
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {/* <SignupForm /> */}
          <LoginForm
            Login={Login}
            error={error}
            style={{ marginLeft: "80px" }}
          />
        </div>
      )}
    </div>
  );
};

export default Login;
