import React, { useState, useRef, useEffect, useContext } from "react";
import Controls from "./Controls";
import Details from "./Details";
import Image from "react-bootstrap/Image";
import { CartState } from "../../Context/Context";

function Player({ item }) {
  const {
    state: { favorite },
    setSong,
    currentSongIndex,
    setCurrentSongIndex,
    nextSongIndex,
    setNextSongIndex,
    isPlaying,
    setIsPlaying,
    products,
    setProducts,
    user1,
  } = CartState();

  const audioEl = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const p = products.filter((e) => {
    if (e.user === user1._id) {
      console.log("Array!!!", e);
      return e;
    }
  });
  const SkipSong = (forwards = true) => {
    if (forwards) {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp++;

        if (temp > p.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = p.length - 1;
        }

        return temp;
      });
    }
  };
  // console.log(props.songs);
  // products.map((e) => console.log("products :", e));
  // console.log("products :", item);

  function favoriteSongs() {
    return p[currentSongIndex] ? p[currentSongIndex].src : null;
  }

  return (
    <div className="backgroundImg">
      {/* <Image src={products.songs[products.currentSongIndex].img_src} rounded /> */}
      <div className="c-player">
        {user1 && user1._id ? (
          <>
            {" "}
            <div>
              <audio
                src={favoriteSongs() ? favoriteSongs() : null}
                ref={audioEl}
              ></audio>

              <Details
                song={
                  p[currentSongIndex]
                    ? p[currentSongIndex]
                    : "/images/notAvailable.jpg"
                }
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                SkipSong={SkipSong}
              />
            </div>
            {/* <div className="controls">
              <Controls
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                SkipSong={SkipSong}
              />
               </div> */}
            {/* <p>
                Next up:{" "}
                <span>
                  {products[nextSongIndex].title} by{" "}
                  {products[nextSongIndex].artist}
                </span>
              </p> */}
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Player;
