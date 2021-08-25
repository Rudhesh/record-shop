import React from "react";
import Header from "./components/Player/Header";
import SingleProduct from "./components/Player/SingleProduct";
import { CartState } from "./Context/Context";
import "./home.css";
export const Home = () => {
  const {
    state: { songs },
  } = CartState();
  console.log(songs);
  return (
    <div className="home">
      <Header />
      <div className="productContainer">
        {songs.map((item) => {
          return <SingleProduct item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
