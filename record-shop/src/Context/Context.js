import React, { useContext, useEffect, useReducer, useState } from "react";
import { cartReducer, productReducer } from "./Reducers";

const ShoppingCart = React.createContext();

export const Context = ({ children }) => {
  const songs = [
    {
      id: 11,
<<<<<<< HEAD
      title:"Fidelity Radio Club",
      artist:"S.Fidelity",
      genre:"	Electronic / Dance",
      format:	'Vinyl 12"',
      releaseDate:	2021,
      img_src: "./images/S.Fidelity2.jpg",
      src:"./music/S. Fidelity Me At The Zoo (Cody Currie Remix) (feat. Àbáse).mp3",
=======
      title: "Fidelity Radio Club",
      artist: "S.Fidelity",
      genre: "Electronic / Dance",
      format: 'Vinyl 12"',
      releaseDate: 2021,
      img_src: "/images/S.Fidelity2.jpg",
      src: "",
>>>>>>> 6fbe735fb3779d0289bd44a1b038e04c0ab50715
      price: 12.99,
      rating: 4,
    },

    {
      id: 12,
<<<<<<< HEAD
      title:"A Safe Place To Be Naked",
      artist:"S.Fidelity",
      genre:"	Hip Hop",
      format:	"Vinyl LP",
      releaseDate:	2017,
      img_src: "./images/S.Fidelity3.jpg",
      src:"./music/PPP (feat. Harleighblu).mp3",
=======
      title: "A Safe Place To Be Naked",
      artist: "S.Fidelity",
      genre: "Hip Hop",
      format: "Vinyl LP",
      releaseDate: 2017,
      img_src: "/images/S.Fidelity3.jpg",
      src: "",
>>>>>>> 6fbe735fb3779d0289bd44a1b038e04c0ab50715
      price: 15.29,
      rating: 5,
    },

    {
      id: 13,
<<<<<<< HEAD
      title:"IGOR",
      artist:"Tyler, The Creator",
      genre:"Hip Hop",
      format:	"Vinyl LP",
      releaseDate:	2019,
      img_src: "./images/Tyler.jpg",
      src:"./music/Tyler The Creator - Earfquake.mp3",
=======
      title: "IGOR",
      artist: "Tyler, The Creator",
      genre: "Hip Hop",
      format: "Vinyl LP",
      releaseDate: 2019,
      img_src: "/images/Tyler.jpg",
      src: "",
>>>>>>> 6fbe735fb3779d0289bd44a1b038e04c0ab50715
      price: 34.99,
      rating: 5,
    },

    {
      id: 14,
<<<<<<< HEAD
      title:"Stylish Tantrum",
      artist:"Roza Terenzi",
      genre:"	Electronic / Dance",
      format:	'Vinyl 12"',
      releaseDate:	2020,
      img_src: "./images/RozaTerenzi.jpg",
      src:"./music/Roza Terenzi - That Track (Rewired Mix).mp3",
      price: 11.99,
      rating: 2,
    },
    {
      id: 30,
      title:"S P A C E",
      artist:"Amber Mark",
      genre:"Soul",
      format:	'Vinyl LP',
      releaseDate:	2019,
      img_src: "./images/AmberMark.png",
      src:"./music/Amber Mark - S P A C E.mp3",
=======
      title: "Stylish Tantrum",
      artist: "Roza Terenzi",
      genre: "Electronic / Dance",
      format: 'Vinyl 12"',
      releaseDate: 2020,
      img_src: "/images/RozaTerenzi.jpg",
      src: "",
>>>>>>> 6fbe735fb3779d0289bd44a1b038e04c0ab50715
      price: 11.99,
      rating: 2,
    },

    {
      id: 15,
<<<<<<< HEAD
      title:"Summer Love Gherking Jerks Aka Larry Heard Remixes",
      artist:"Basic Realities",
      genre:"	Electronic / Dance",
      format:	'Vinyl 12"',
      releaseDate:	2021,
      img_src: "./images/LarryHeard.jpg",
      src:"./music/Larry Heard Presents Mr. White The Sun Can't Compare (Long Version).mp3",
=======
      title: "Summer Love Gherking Jerks Aka Larry Heard Remixes",
      artist: "Basic Realities",
      genre: "Electronic / Dance",
      format: 'Vinyl 12"',
      releaseDate: 2021,
      img_src: "/images/LarryHeard.jpg",
      src: "",
>>>>>>> 6fbe735fb3779d0289bd44a1b038e04c0ab50715
      price: 10.99,
      rating: 3,
    },

    {
      id: 16,
      title: "I Can Make You A Big Freak",
      artist: "Paul Johnson",
      genre: "Electronic",
      format: 'Vinyl 12"',
      releaseDate: 2020,
      img_src: "/images/PaulJ.jpg",
      src: "",
      price: 9.99,
      rating: 4,
    },
    {
      id: 17,
      title: "Sweet Nothing Feat. Ebony Rose",
      artist: "Vibration Black Finger",
      genre: "	Soul",
      format: 'Vinyl 7"',
      releaseDate: 1985,
      img_src: "/images/EbonyRose.jpeg",
      src: "",
      price: 8.24,
      rating: 4,
    },

    {
      id: 18,
      title: "Spacer Woman",
      artist: "Charlie",
      genre: "Electronic",
      format: 'Vinyl 12"',
      releaseDate: 2018,
      img_src: "/images/Charlie.jpg",
      src: "",
      price: 13.5,
      rating: 5,
    },

    {
      id: 19,
      title: "Straight From The Heart",
      artist: "Patrice Rushen",
      genre: "Soul",
      format: "Vinyl LP",
      releaseDate: 1982,
      img_src: "/images/PatriceRushen.jpg",
      src: "",
      price: 26.99,
      rating: 2,
    },

    {
      id: 20,
      title: "Gee Wiz",
      artist: "Doctor's Cat",
      genre: "Electronic",
      format: "Vinyl LP",
      releaseDate: 1984,
      img_src: "/images/DoctorsCat.jpg",
      src: "",
      price: 26.99,
      rating: 2,
    },
    {
      id: 21,
      title: "4 The Heartbroken",
      artist: "Ottonian",
      genre: "Electronic",
      format: "Vinyl LP",
      releaseDate: 2017,
      img_src: "/images/Ottonian.jpg",
      src: "",
      price: 15.99,
      rating: 3,
    },
    {
      id: 22,
      title: "Deep Inside (Remixes)",
      artist: "Hardrive",
      genre: "Electronic",
      format: 'Vinyl 12"',
      releaseDate: 1995,
      img_src: "/images/hardDrive.jpg",
      src: "",
      price: 8.99,
      rating: 5,
    },
    {
      id: 23,
      title: "Millionaire",
      artist: "Kelis feat André 300",
      genre: "hip Hop",
      format: 'Vinyl 12"',
      releaseDate: 2004,
      img_src: "/images/Kelis.jpg",
      src: "",
      price: 10.49,
      rating: 5,
    },

    {
      id: 24,
      title: "My Body. My Future.",
      artist: "Kristy Harper",
      genre: "Electronic",
      format: "Vinyl LP",
      releaseDate: 2006,
      img_src: "/images/Kristy.jpg",
      src: "",
      price: 7.89,
      rating: 3,
    },

    {
      id: 25,
      title: "Virgin Ubiquity II",
      artist: "Roy Ayers",
      genre: "Jazz",
      format: "Vinyl 3LP",
      releaseDate: 2005,
      img_src: "/images/RoyAyers.jpg",
      src: "",
      price: 33.99,
      rating: 2,
    },

    {
      id: 26,
      title: "Black Focus",
      artist: "Yussef Kamaal",
      genre: "Jazz",
      format: "Vinyl LP",
      releaseDate: 2016,
      img_src: "/images/YussefKamal.jpg",
      src: "",
      price: 17.99,
      rating: 5,
    },

    {
      id: 27,
      title: "Waiting EP",
      artist: "Hidden Spheres",
      genre: "Electronic",
      format: 'Vinyl  12"',
      releaseDate: 2015,
      img_src: "/images/HiddenSpheres.jpg",
      src: "",
      price: 39.99,
      rating: 4,
    },
    {
      id: 28,
      title: "Primary",
      artist: "Kari Faux",
      genre: "Hip Hop",
      format: "Vinyl  LP",
      releaseDate: 2007,
      img_src: "/images/KariFaux.jpg",
      src: "",
      price: 19.99,
      rating: 3,
    },

    {
      id: 1,
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      genre: "Pop",
      img_src: "/images/song-1.jpg",
      src: "./music/on-n-on.mp3",
      price: 44,

      quantity: 1,
      genre: "Hip Hop",
    },
    {
      id: 2,
      title: "Song 2",
      artist: "Artist 2",
      genre: "Pop",
      img_src: "/images/song-2.jpg",
      src: "./music/somebody-new.mp3",
      price: 44,
      rating: 3,
    },
    {
      id: 3,
      title: "Song 3",
      artist: "Artist 3",
      genre: "Pop",
      img_src: "/images/song-3.jpg",
      src: "./music/on-n-on.mp3",
      price: 44,
      rating: 3,
    },
    {
      id: 4,
      title: "Song 4",
      artist: "Artist 4",
      genre: "Pop",
      img_src: "/images/song-4.jpg",
      src: "./music/file_example_MP3_1MG.mp3",
      price: 44,
      rating: 3,
    },

    {
      id: 5,
      title: "Song 5",
      artist: "Artist 5",
      genre: "Pop",
      format: "Vinyl  LP",
      img_src: "/images/alive.jpg",
      src: "./music/Midranger - Apocalypse [NCS Release].mp3",
      price: 76,
      rating: 3,
    },
    {
      id: 6,
      title: "me too ft. Halsey",
      artist: "Gun Kelly",
      format: "Vinyl  LP",

      img_src: "/images/song-1.jpg",
      src: "./music/on-n-on.mp3",
      price: 34,
      rating: 3,
    },
    {
      id: 7,
      title: "fun",
      artist: "byan ",
      format: "Vinyl  LP",

      img_src: "/images/song-2.jpg",
      src: "./music/somebody-new.mp3",
      price: 94,
      rating: 3,
    },
  ];

  const [state, dispatch] = useReducer(cartReducer, {
    songs: songs,
    favorite: [
      {
        completed: false,
        id: 1,
        title: "Forget me too ft. Halsey",
        artist: "Machine Gun Kelly",
        genre: "Pop",
        img_src: "/images/song-1.jpg",
        src: "./music/on-n-on.mp3",
        price: 44,
        quantity: 1,
        genre: "Hiphop",
      },
    ],
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    searchQuery: "",
  });

  // console.log(songs[0].id);

  const [song, setSong] = useState(songs);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);

  const [show, setShow] = useState(false);

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Logout = () => {
    setUser({ name: "", email: "" });
    console.log("Logout");
  };

  const [styling, setStyling] = useState("light")

  return (
    <div>
      <ShoppingCart.Provider
<<<<<<< HEAD
        value={{ state, dispatch, productState, productDispatch, styling, setStyling }}
=======
        value={{
          state,
          dispatch,
          productState,
          productDispatch,
          show,
          setShow,
          song,
          setSong,
          currentSongIndex,
          setCurrentSongIndex,
          nextSongIndex,
          setNextSongIndex,
          user,
          setUser,
          error,
          setError,
          Logout,
          isPlaying,
          setIsPlaying,
        }}
>>>>>>> 6fbe735fb3779d0289bd44a1b038e04c0ab50715
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
