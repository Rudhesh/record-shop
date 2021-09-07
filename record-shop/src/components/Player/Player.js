import React, { useState, useRef, useEffect, useContext } from "react";
import Controls from "./Controls";
import Details from "./Details";
import Image from "react-bootstrap/Image";
import { CartState } from "../../Context/Context";

function Player() {
  const {
    state: { favorite },
    setSong,
    currentSongIndex,
    setCurrentSongIndex,
    nextSongIndex,
    setNextSongIndex,
    isPlaying,
    setIsPlaying,
  } = CartState();

  const audioEl = useRef(null);
  // const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp++;

        if (temp > favorite.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = favorite.length - 1;
        }

        return temp;
      });
    }
  };
  // console.log(props.songs);

  console.log(favorite);

  return (
    <div className="backgroundImg">
      {/* <Image src={props.songs[props.currentSongIndex].img_src} rounded /> */}
      <div className="c-player">
        {!favorite ? (
          favorite[0]
        ) : (
          <>
            {" "}
            <div>
              <audio src={favorite[currentSongIndex].src} ref={audioEl}></audio>

              <Details song={favorite[currentSongIndex]} />
            </div>
            <div className="controls">
              <Controls
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                SkipSong={SkipSong}
              />
              {/* <p>
            Next up:{" "}
            <span>
              {favorite[nextSongIndex].title} by{" "}
              {favorite[nextSongIndex].artist}
            </span>
          </p> */}
            </div>{" "}
          </>
        )}
      </div>
    </div>
  );
}

export default Player;
