import React, { useEffect, useState } from "react";
import { ListGroup, Button, Col, Image, Row } from "react-bootstrap";
import { CartState } from "./Context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  const subTotal = cart.reduce(
    (acc, curr) => acc + Number(curr.price) * curr.qty,
    0
  );
  const shippingPrice = 8;
  const totalPrice = subTotal + shippingPrice;

  useEffect(() => {
    setTotal(totalPrice);
  }, [cart]);

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((item1) => (
            <ListGroup.Item key={item1.id}>
              <Row>
                <Col md={2}>
                  <Image src={item1.img_src} alt={item1.name} fluid rounded />
                </Col>

                <Col md={2}>
                  <span>Title: {item1.title}</span>
                  <br />
                  <span>Artist: {item1.artist}</span>
                </Col>

                <Col md={2}>€ {item1.price}</Col>

                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={item1.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: item1.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[0, 1, 2, 3, 4, 5].map((x) => (
                      <option key={x + 1}>{x}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: item1,
                      })
                    }
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      {/* <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: € {total} </span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </div> */}
      <div className="filters summary">
        <h3>Order Summary</h3>
        <hr></hr>
        <span className="title">Item count: ({cart.length})</span>
        <span>
          Subtotal<span>{subTotal.toFixed(2)}</span>
        </span>
        <span>
          Shipping<span>8,00€</span>
        </span>
        <span>Berlin, Germany</span>

        <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
          Select buying Method
        </Form.Label>
        <Form.Control
          as="select"
          className="my-1 mr-sm-2"
          id="inlineFormCustomSelectPref"
          custom
        >
          <option>Choose...</option>
          <option>Germany - 8,00€</option>
          <option>Pick up at the store</option>
        </Form.Control>
        <hr></hr>
        <h3>
          Total<pan>{total}</pan>
        </h3>
        <span>Tax included</span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
