import React from "react";
import { Card } from "react-bootstrap";
import { Button, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

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
  console.log(item.img_src);
  const {
    state: { favorite },
    dispatch,
    isPlaying,
    setIsPlaying,
  } = CartState();

  return (
    <div>
      {item.msg === "No song selected" ? (
        <span>No song selected</span>
      ) : (
        <div className="productsOne">
          <div>
            <div className="boxBody">
              <img
                variant="top"
                src={item.img_src}
                alt={item.artist}
                style={{ padding: "10px" }}
              />

              <section className="musicData">
                <div>
                  <p className="artist">{item.artist}</p>

                  <p className="titleRecord">{item.title}</p>
                </div>
                <span>
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
                    <CloseIcon />
                  </IconButton>
                </span>
              </section>

              {/* <button className="play-btn" onClick={() => setIsPlaying(!isPlaying)}>
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
          </button> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct2;
