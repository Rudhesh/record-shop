import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, IconButton } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Card } from "react-bootstrap";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

import { CartState } from "../../Context/Context";
import Music from "./Music";

const SingleProduct = ({ item }) => {
  const {
    state: { cart, favorite, songs },
    dispatch,
    styling,
    setIsPlaying,
    isPlaying,
  } = CartState();

  return (
    <div className="products">
      <Card>
        <div className={styling === "dark" ? "imageRecordDark" : ""}>
          <Card.Img
            variant="top"
            src={item.img_src}
            alt={item.artist}
            style={{ padding: "10px" }}
          />
        </div>
        <Card.Body>
          <Music url={item.src} />
          {/* <button className="play-btn" onClick={() => setIsPlaying(!isPlaying)}>
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
          </button> */}
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

          <span
            style={{
              position: "absolute",
              right: 10,
              bottom: 10,
            }}
          >
            {favorite.some((p) => p.id === item.id) ? (
              <IconButton
                className="removeFromCart"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FAVORITE",
                    payload: item,
                  });
                }}
                variant="danger"
              >
                <FavoriteIcon style={{ color: "red" }} />
              </IconButton>
            ) : (
              <IconButton
                className="favorite"
                onClick={() => {
                  dispatch({
                    type: "FAVORITE",
                    payload: item,
                  });
                }}
              >
                <FavoriteIcon />
              </IconButton>
            )}
          </span>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
