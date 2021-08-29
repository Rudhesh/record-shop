import React, { useState, useEffect } from "react";
import { FaPlay,FaPause } from "react-icons/fa";
import { CartState } from "../../Context/Context";


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
      <button  type="button" class="btnPlayer" onClick={toggle}>
        {playing ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default Music;
