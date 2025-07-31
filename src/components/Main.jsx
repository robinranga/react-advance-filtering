import React from "react";
import Product from "./Product";
import { useContext } from "react";
import { productsData } from "../Context/context";

const Main = () => {

  const [products, setProducts] = useContext(productsData);

  return (
    <main
      className="p-8 h-[80vh] scrolly overflow-y-scroll grid grid-cols-3 lg:grid-cols-4 justify-items-center gap-y-9 justify-center w-full "
      style={{ scrollbarWidth: "none" }}
    >
      {products.length !== 0 ? products.map((product, i) => {
        return <Product data={product} key={i} />;
      }) : "No Products to Show"}
    </main>
  );
};

export default Main;
