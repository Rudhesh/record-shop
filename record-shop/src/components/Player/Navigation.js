import React from "react";
import { NavLink } from "react-router-dom";
import {
  Nav,
  Dropdown,
  FormControl,
  Button,
  Navbar,
  Badge,
} from "react-bootstrap";
import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faUser,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { CartState } from "../../Context/Context";
import "./styles.css";
import "../../App.css";
import Login from "../../Login";

// import Button from "@material-ui/core/Button";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import { makeStyles } from "@material-ui/core/styles";

export const Navigation = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
    Logout,
    user,
  } = CartState();

  return (
    <>
      <Navbar bg="light" variant="light" className="smallNav">
        <Navbar.Brand href="#">
          <h3 className="title">
            <span className="title">SECRET TRACK</span> RECORD STORE
          </h3>
        </Navbar.Brand>
        <div style={{ display: "block" }}>
          <div style={{ display: "flex" }}>
            {" "}
            <Nav style={{ marginTop: "18px" }}>
              <NavLink className="navBarText" exact to="/">
                HOME
              </NavLink>{" "}
              <NavLink className="navBarText" exact to="/genre">
                GENRE
              </NavLink>{" "}
              <NavLink className="navBarText" exact to="/about">
                ABOUT
              </NavLink>{" "}
              <NavLink className="navBarText" exact to="/contact">
                CONTACT
              </NavLink>{" "}
            </Nav>
            <Navbar className="icons">
              <Dropdown>
                <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                  <FontAwesomeIcon icon={faUser} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <NavLink exact to="/profile">
                      Profile
                    </NavLink>{" "}
                  </Dropdown.Item>
                  {user.email ? (
                    <Dropdown.Item onClick={Logout}> Logout</Dropdown.Item>
                  ) : null}
                </Dropdown.Menu>
              </Dropdown>

              <Button variant="outline-danger">
                <FontAwesomeIcon icon={faHeart} />
              </Button>

              <Dropdown>
                <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <span className={cart.length === 0 ? null : "cartCount"}>
                    {" "}
                    {cart.length === 0 ? null : cart.length}
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu
                  className="dropdownM"
                  style={{ minWidth: "30%" }}
                >
                  {cart.length > 0 ? (
                    <>
                      {cart.map((items) => (
                        <span className="cartItem" key={items.id}>
                          <img
                            src={items.img_src}
                            className="cartItemImg"
                            alt={items.artist}
                          />
                          <div className="cartItemDetail">
                            <span>{items.title}</span>
                            <span>{items.artist}</span>

                            <span>€{items.price}</span>
                          </div>
                          <FontAwesomeIcon
                            icon={faTrash}
                            style={{ cursur: "pointer" }}
                            onClick={() =>
                              dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: items,
                              })
                            }
                          />
                        </span>
                      ))}
                      <NavLink to="/cart">
                        <Button style={{ width: "95%", margin: "0 10px" }}>
                          Go To Cart
                        </Button>
                      </NavLink>
                    </>
                  ) : (
                    <span style={{ padding: 10 }}>Cart is Empty</span>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </Navbar>
          </div>
          <Navbar.Text className="search">
            <FormControl
              size="sm"
              style={{ width: 500 }}
              placeholder="Search a product"
              className="m-auto"
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
            />
          </Navbar.Text>
        </div>
      </Navbar>
    </>
  );
};
