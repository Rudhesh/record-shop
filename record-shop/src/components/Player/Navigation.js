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

export const Navigation = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();
  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#">
          <h3>
            <span>SECRET TRACK</span> RECORD STORE
          </h3>
        </Navbar.Brand>
        <div style={{ display: "block" }}>
          <div style={{ display: "flex" }}>
            {" "}
            <Nav style={{ marginTop: "18px" }}>
              <NavLink exact to="/">
                HOME
              </NavLink>{" "}
              <NavLink exact to="/about">
                ABOUT
              </NavLink>{" "}
              <NavLink exact to="/genre">
                GENRE
              </NavLink>{" "}
              <NavLink exact to="/contact">
                CONTACT
              </NavLink>{" "}
            </Nav>
            <Navbar className="icons">
              <Button variant="outline-success">
                <FontAwesomeIcon icon={faUser} />
              </Button>
              <Button variant="outline-danger">
                <FontAwesomeIcon icon={faHeart} />
              </Button>
              <Dropdown alignRight>
                <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <Badge>{cart.length}</Badge>
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ minWidth: "30%" }}>
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
