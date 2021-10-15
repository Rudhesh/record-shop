import React, { useEffect, useState } from "react";
import SingleProduct2 from "../components/Player/SingleProduct2";
import { CartState } from "../Context/Context";
import ReadyPlayer from "../ReadyPlayer";
import MainLogin from "./MainLogin";
import MainSignup from "./MainSignup";
import "./main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { Button, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import "./login.css";
import Player from "../components/Player/Player";
const Main = () => {
  const {
    state: { favorite },
    login,
    setLogin,
    user,
    setUser,
    error,
    setError,
    user1,
    setLoginUser1,
    products,
    setProducts,
  } = CartState();

  useEffect(getProducts, []);
  useEffect(updateProducts, []);

  function updateProducts() {
    if (products.length === 0) {
      return false;
    } else {
      return true;
    }
  }

  function getProducts() {
    console.log("getProducts");
    axios
      .get("http://localhost:9002/main", { params: { answer: user1._id } })
      .then((res) => {
        // alert(res.data.message);
        console.log("user Status: ", user1);
        setProducts(res.data);
      });
    // const url = "http://localhost:9002/main";
    // const loginData = { id: 1 };
    // fetch(url, { data: loginData })
    //   .then((response) => response.json())
    //   .then((results) => {
    //     console.log(results);
    //     setProducts(results);
    //   })
    //   .catch((error) => console.log("ERROR FETCHING DATA", error));
  }

  function deleteProduct(product) {
    const url = "http://localhost:9002/main/" + product._id;
    const config = {
      method: "DELETE",
    };

    fetch(url, config)
      .then((response) => response.json())
      .then((result) => {
        getProducts();
      })
      .catch((err) => console.log("OH NO, ERROR", err));
  }

  return (
    <div className="Main">
      <Router>
        <Switch>
          <Route exact path="/main">
            {user1 && user1._id ? (
              <div className="favoritePlayer">
                <div className="welcome">
                  <div className="profile">
                    <section className="mobileProfile">
                      <img src={"/images/dog.jpg"} alt="" />

                      <h4>
                        {" "}
                        Welcome, <span>{user1.name}</span>
                      </h4>
                    </section>
                    <div className="productContainer">
                      {products.map((item) => {
                        // console.log("songs:-", item);

                        return (
                          <div>
                            {user1._id === item.user ? (
                              <div className="productsOne">
                                {console.log("songs:-", item)}
                                <div>
                                  <div className="boxBody">
                                    <img
                                      variant="top"
                                      src={item.img_src}
                                      alt={item.artist}
                                      style={{
                                        padding: "10px",
                                        borderRadius: "50%",
                                      }}
                                    />

                                    <section className="musicData">
                                      <div>
                                        <p className="artist">{item.artist}</p>
                                        <h3 style={{ margin: "10px auto" }}>
                                          {item.Main}
                                        </h3>

                                        <p className="titleRecord">
                                          {item.title}
                                        </p>
                                      </div>
                                      <span>
                                        {item.id !== 0 ? (
                                          <IconButton
                                            className="removeFromCart"
                                            onClick={() => {
                                              console.log(item);
                                              deleteProduct(item);
                                            }}
                                            variant="danger"
                                          >
                                            <CloseIcon />
                                          </IconButton>
                                        ) : null}
                                      </span>
                                    </section>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div></div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <ReadyPlayer setLoginUser1={setLoginUser1} />
              </div>
            ) : (
              <MainLogin setLoginUser1={setLoginUser1} />
            )}
          </Route>
          <Route path="/mainlogin">
            <MainLogin setLoginUser1={setLoginUser1} />
          </Route>
          <Route path="/mainsignup">
            <MainSignup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Main;
