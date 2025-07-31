import React, { useEffect, useRef, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";
import { productsData } from "../Context/context";
import { filteredData } from "../Context/context";
import { querryData } from "../Context/context";

const Header = () => {
  const [products, setProducts] = useContext(productsData);
  const [filteredProducts, setFilteredProducts] = useContext(filteredData);
  const [querry, setQuerry] = useContext(querryData)

  const handleInput = (evt) => {
    setQuerry(evt.target.value);
  };

  useEffect(() => {
    // console.log(querry)
    if (querry !== "") {
      setProducts(
        filteredProducts.filter((prod) => {
          return prod.title.toLowerCase().includes(querry.toLowerCase());
        })
      );
    } else {
      setProducts(filteredProducts);
    }
  }, [querry, filteredProducts]);

  return (
    <header className="flex items-center justify-between gap-10 px-5 py-3 ">
      <div className="flex gap-10   h-full">
        <div className="flex items-center justify-center  px-5 ">
          <img
            src="/logo.png"
            alt="Logo Image"
            width={120}
            className=""
          />
        </div>

        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Search for products..."
            className="p-2 px-4 rounded-2xl bg-[#e4e1e1]"
            value={querry}
            onChange={handleInput}
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <IoCartOutline size={25} />
        <MdFavoriteBorder size={25} />
        <CgProfile size={25} />
      </div>
    </header>
  );
};

export default Header;
