import React from "react";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../../Context/Context";
import Music from "./Music";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";
import Details from "./Details";

const SingleProduct2 = ({ item }) => {
  const {
    state: { cart },
    dispatch,
    isPlaying,
    setIsPlaying,
  } = CartState();

  return (
    <div className="productsOne">
      <div>
        <div className="body">
          <img
            variant="top"
            src={item.img_src}
            alt={item.artist}
            style={{ padding: "10px" }}
          />

          <section className="musicData">
            <p className="artist">{item.artist}</p>

            <p className="titleRecord">{item.title}</p>
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
                REMOVE
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
          </section>
          {/* <button className="play-btn" onClick={() => setIsPlaying(!isPlaying)}>
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct2;
