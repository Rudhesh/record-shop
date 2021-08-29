import React, { useState, useRef, useEffect, useContext } from "react";
import Controls from "./Controls";
import Details from "./Details";
import Image from "react-bootstrap/Image";

function Player(props) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };
  // console.log(props.songs);

  console.log(props.songs);

  return (
    <div className="backgroundImg">
      <Image src={props.songs[props.currentSongIndex].img_src} rounded />
      <div className="c-player">
        <div>
          <audio
            src={props.songs[props.currentSongIndex].src}
            ref={audioEl}
          ></audio>

          <Details song={props.songs[props.currentSongIndex]} />
        </div>
        <div className="controls">
          <Controls
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            SkipSong={SkipSong}
          />
          <p>
            Next up:{" "}
            <span>
              {props.songs[props.nextSongIndex].title} by{" "}
              {props.songs[props.nextSongIndex].artist}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Player;
