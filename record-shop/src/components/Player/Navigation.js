import React from "react";
import { NavLink } from "react-router-dom";
import {
  Nav,
  Dropdown,
  Form,
  FormControl,
  Button,
  Navbar,
} from "react-bootstrap";
import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";


export const Navigation = () => {
  return (
    <>
      <div className="headerTop">
        <ul className="navigation">
          <li>
            <NavLink exact to="/">
              HOME
            </NavLink>{" "}
          </li>
          <li>
            <NavLink exact to="/cart">
              CART
            </NavLink>{" "}
          </li>
          <li>
            <NavLink exact to="/about">
              ABOUT
            </NavLink>{" "}
          </li>
          <li>
            <NavLink exact to="/genre">
              GENRE
            </NavLink>{" "}
          </li>
          <li>
            <NavLink exact to="/contact">
              CONTACT
            </NavLink>{" "}
          </li>
        </ul>
        <div className="icons">
          <Button variant="outline-success">
            <FontAwesomeIcon icon={faUser} />
          </Button>
          <Button variant="outline-danger">
            <FontAwesomeIcon icon={faHeart} />
          </Button>
          <Dropdown>
            <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <Navbar bg="light" className="navbar">
        <Navbar.Brand href="#">SECRET TRACK RECORD STORE</Navbar.Brand>
        
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar>
    </>
  );
};
