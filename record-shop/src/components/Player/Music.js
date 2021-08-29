import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { FaPlay,FaPause } from "react-icons/fa";
import { CartState } from "../../Context/Context";

=======
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
>>>>>>> 6fbe735fb3779d0289bd44a1b038e04c0ab50715

const useAudio = (url) => {
  const {
    state: { cart },
    dispatch, styling, setStyling
  } = CartState();
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    setPlaying(!playing)

    if(styling === "light") {
            setStyling("dark")
            console.log("them switched to dark")
        } else {
            setStyling("light")
            console.log("theme switched to light")
        }
  };


  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Music = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
<<<<<<< HEAD
      <button  type="button" class="btnPlayer" onClick={toggle}>
        {playing ? <FaPause /> : <FaPlay />}
=======
      <button type="button" class="btnPlayer" onClick={toggle}>
        {playing ? (
          <FontAwesomeIcon icon={faPause} />
        ) : (
          <FontAwesomeIcon icon={faPlay} />
        )}
>>>>>>> 6fbe735fb3779d0289bd44a1b038e04c0ab50715
      </button>
    </div>
  );
};

export default Music;
