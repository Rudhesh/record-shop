import React, { useContext, useReducer, useState } from "react";
import { cartReducer, productReducer } from "./Reducers";

const ShoppingCart = React.createContext();

export const Context = ({ children }) => {
  const songs = [
    {
      id: 1,
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "./images/song-1.jpg",
      src: "./music/on-n-on.mp3",
      price: 44,
      rating: 3,
      quantity: 1,
    },
    {
      id: 2,
      title: "Song 2",
      artist: "Artist 2",
      img_src: "./images/song-2.jpg",
      src: "./music/somebody-new.mp3",
      price: 44,
      rating: 3,
    },
    {
      id: 3,
      title: "Song 3",
      artist: "Artist 3",
      img_src: "./images/song-3.jpg",
      src: "./music/on-n-on.mp3",
      price: 44,
      rating: 3,
    },
    {
      id: 4,
      title: "Song 4",
      artist: "Artist 4",
      img_src: "./images/song-4.jpg",
      src: "./music/file_example_MP3_1MG.mp3",
      price: 44,
      rating: 3,
    },

    {
      id: 5,
      title: "Song 5",
      artist: "Artist 5",
      img_src: "./images/alive.jpg",
      src: "./music/Midranger - Apocalypse [NCS Release].mp3",
      price: 76,
      rating: 3,
    },
    {
      id: 6,
      title: "me too ft. Halsey",
      artist: "Gun Kelly",
      img_src: "./images/song-1.jpg",
      src: "./music/on-n-on.mp3",
      price: 34,
      rating: 3,
    },
    {
      id: 7,
      title: "fun",
      artist: "byan ",
      img_src: "./images/song-2.jpg",
      src: "./music/somebody-new.mp3",
      price: 94,
      rating: 3,
    },
    {
      id: 8,
      title: "Song 3",
      artist: "Artist 3",
      img_src: "./images/song-3.jpg",
      src: "./music/on-n-on.mp3",
      price: 44,
      rating: 3,
    },
    {
      id: 9,
      title: "Song 4",
      artist: "Artist 4",
      img_src: "./images/song-4.jpg",
      src: "./music/file_example_MP3_1MG.mp3",
      price: 84,
      rating: 3,
    },

    {
      id: 10,
      title: "Song 5",
      artist: "Artist 5",
      img_src: "./images/alive.jpg",
      src: "./music/Midranger - Apocalypse [NCS Release].mp3",
      price: 45,
      rating: 3,
    },
  ];

  const [state, dispatch] = useReducer(cartReducer, {
    songs: songs,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    searchQuery: "",
  });

  // console.log(songs[0].id);

  // const [song, setSong] = useState(songs);

  // const [currentSongIndex, setCurrentSongIndex] = useState(0);
  // const [nextSongIndex, setNextSongIndex] = useState(0);

  return (
    <div>
      <ShoppingCart.Provider
        value={{ state, dispatch, productState, productDispatch }}
      >
        {children}
      </ShoppingCart.Provider>
    </div>
  );
};

export default Context;

export const CartState = () => {
  return useContext(ShoppingCart);
};
