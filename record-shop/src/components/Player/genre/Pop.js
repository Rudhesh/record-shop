import React from "react";
import { CartState } from "../../../Context/Context";
import Filter from "../../Filter";
import SinglePop from "./SinglePop";

const Pop = () => {
  const {
    state: { songs },
  } = CartState();
  return (
    <div>
      <div className="home">
        <Filter />
        <div className="productContainer">
          {songs.map((item) => {
            return <SinglePop item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Pop;
