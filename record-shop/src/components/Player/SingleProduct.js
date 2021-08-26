import React from "react";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../../Context/Context";
import Music from "./Music";
import { useState } from "react";

// import Rating from "./Rating";

const SingleProduct = ({ item }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [cartRecords, setCartRecords] = useState(cart);

  function onAdd(product) {
    console.log("add to cart");
    setCartRecords([...cartRecords, product]);
    console.log(cartRecords.length);
  }
  return (
    <div className="products">
      <Card>
        <Card.Img
          variant="top"
          src={item.img_src}
          alt={item.artist}
          style={{ padding: "10px" }}
        />
        <Card.Body>
          <Music url={item.src} />
          <Card.Title>{item.title}</Card.Title>
          <Card.Title>{item.artist}</Card.Title>

          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>€ {item.price}</span>

            {/* <Rating rating={item.ratings} /> */}
          </Card.Subtitle>
          {cart.some((p) => p.id === item.id) ? (
            <Button
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: item,
                });
              }}
              variant="danger"
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: item,
                });
              }}
            >
              Add to cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
