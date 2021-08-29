import React from "react";
import { CartState } from "../../../Context/Context";
import Filter from "../../Filter";
import SingleHiphop from "./SingleHiphop";

const Hiphop = () => {
  const {
    state: { songs },
    productState: { searchQuery, sort },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = songs;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.artist.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };
  return (
    <div>
      <div className="home">
        <Filter />
        <div className="productContainer">
          {transformProducts().map((item) => {
            return <SingleHiphop item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Hiphop;
