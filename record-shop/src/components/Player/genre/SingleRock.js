import React from "react";
import { Card } from "react-bootstrap";
import { CartState } from "../../../Context/Context";
import Music from "../Music";
import Button from "@material-ui/core/Button";

const SingleRock = ({ item }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  if (item.genre === "Electronic / Dance" || item.genre === "Electronic") {
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
              <Button
                className="removeFromCart"
                color="secondary"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: item,
                  });
                }}
              >
                REMOVE
              </Button>
            ) : (
              <Button
                className="addToCart"
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: item,
                  });
                }}
              >
                ADD TO CART
              </Button>
            )}
            <Button
              className="favorite"
              onClick={() => {
                dispatch({
                  type: "FAVORITE",
                  payload: item,
                });
              }}
            >
              Favorite
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
  return <div>{null}</div>;
};

export default SingleRock;
