import React from "react";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../../Context/Context";
import Music from "./Music";

// import Rating from "./Rating";

const SingleProduct = ({ item }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
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
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
