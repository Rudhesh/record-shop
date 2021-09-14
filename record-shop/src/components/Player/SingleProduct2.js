import React from "react";
import { Card } from "react-bootstrap";
import { Button, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
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
import Controls from "./Controls";
import ReadyPlayer from "../../ReadyPlayer";

const SingleProduct2 = ({ item }) => {
  const {
    state: { favorite },
    dispatch,
    isPlaying,
    setIsPlaying,
    song,
  } = CartState();

  function noSong() {
    if (favorite.length === 1) {
      return favorite[1];
    } else if (favorite.length > 1) {
      console.log(favorite[0]);
      return favorite.length;
    }
  }

  return (
    <div>
      {noSong() ? (
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
                {/* <Controls setIsPlaying={setIsPlaying} /> */}

                <div>
                  <p className="artist">{item.artist}</p>
                  <h3 style={{ margin: "10px auto" }}>{item.Main}</h3>

                  <p className="titleRecord">{item.title}</p>
                </div>
                {/* <span>
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
                </span> */}
              </section>

              {/* <button className="play-btn" onClick={() => setIsPlaying(!isPlaying)}>
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
          </button> */}
            </div>
          </div>
        </div>
      ) : (
        <div>No Song Added</div>
      )}
    </div>
  );
};

export default SingleProduct2;
