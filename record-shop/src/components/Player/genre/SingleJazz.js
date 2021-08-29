import React from "react";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../../../Context/Context";
import Music from "../Music";

const SingleJazz = ({ item }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  if (item.genre === "Jazz") {
    console.log(item.genre);
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
            <Card.Title className="artist">{item.artist}</Card.Title>
            <Card.Title>
              <h6 className="titleRecord">{item.title}</h6>
            </Card.Title>

            <Card.Subtitle style={{ paddingBottom: 10 }}>
              <p className="formatPrice">
                {item.format} | {item.price} €
              </p>
            </Card.Subtitle>
            {cart.some((p) => p.id === item.id) ? (
              <button
                className="removeFromCart"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: item,
                  });
                }}
                variant="danger"
              >
                REMOVE FROM CART
              </button>
            ) : (
              <button
                className="addToCart"
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: item,
                  });
                }}
              >
                ADD TO CART
              </button>
            )}
          </Card.Body>
        </Card>
      </div>
    );
  }
  return <div>{null}</div>;
};

export default SingleJazz;
