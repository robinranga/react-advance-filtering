import React, { useState } from "react";
import { useContext } from "react";
import { productsData } from "../Context/context";
import { filteredData } from "../Context/context";
import { querryData } from "../Context/context";
import { useRef, useEffect } from "react";

const Filter = () => {
  const [products, setProducts] = useContext(productsData);
  const [filteredProducts, setFilteredProducts] = useContext(filteredData);
  const [querry, setQuerry] = useContext(querryData);

  const ogData = useRef(null);
  const [filter, setFilter] = useState({});

  const handleFilter = (evt) => {
    if (evt.target.name === "newPrice") {
      evt.target.value !== "all"
        ? setFilter({ ...filter, newPrice: [evt.target.min, evt.target.max] })
        : setFilter({ ...filter, [evt.target.name]: evt.target.value });
    } else {
      setFilter({ ...filter, [evt.target.name]: evt.target.value });
    }
  };

  useEffect(() => {
    ogData.current = [...products];
  }, []);

  useEffect(() => {
    if (filter) {
      const data = ogData.current.filter((prod) => {
        for (let key in filter) {
          const val = filter[key];
          if (key === "newPrice") {
            if (val === "all") {
              continue;
            }
            if (!(+val[0] <= +prod[key] && +prod[key] <= +val[1])) {
              return false;
            }
          } else {
            if (val.toLowerCase() === "all") {
              continue;
            }
            if (prod[key].toLowerCase() !== val.toLowerCase()) {
              return false;
            }
          }
        }
        return true;
      });

      if (querry === "") {
        console.log(querry);
        setProducts(data);
      }
      setFilteredProducts(data);
    }
  }, [filter]);

  return (
    <section className="pt-2 px-8 w-51">
      <div className="mb-3">
        <h2 className="font-bold text-[#4b4747] text-lg mb-1">Category</h2>
        <div className="flex flex-col justify-center">
          <label className="relative select-none cursor-pointer flex gap-2 items-center">
            <input
              style={{ opacity: 0, cursor: "pointer" }}
              className="radio-input absolute"
              onClick={handleFilter}
              type="radio"
              name="category"
              value="all"
            />{" "}
            <span className="h-3 w-3 rounded-full inline-block checkbox bg-[#ccc]"></span>
            All
          </label>
          <label className="relative select-none cursor-pointer flex gap-2 items-center">
            <input
              style={{ opacity: 0, cursor: "pointer" }}
              className="radio-input absolute"
              onClick={handleFilter}
              type="radio"
              name="category"
              value="Sneakers"
            />{" "}
            <span className="h-3 w-3 rounded-full inline-block checkbox bg-[#ccc]"></span>
            Sneakers
          </label>
          <label className="relative select-none cursor-pointer flex gap-2 items-center">
            <input
              style={{ opacity: 0, cursor: "pointer" }}
              className="radio-input absolute"
              onClick={handleFilter}
              type="radio"
              name="category"
              value="Flats"
            />{" "}
            <span className="h-3 w-3 rounded-full inline-block checkbox bg-[#ccc]"></span>
            Flats
          </label>
          <label className="relative select-none cursor-pointer flex gap-2 items-center">
            <input
              style={{ opacity: 0, cursor: "pointer" }}
              className="radio-input absolute"
              onClick={handleFilter}
              type="radio"
              name="category"
              value="Sandals"
            />{" "}
            <span className="h-3 w-3 rounded-full inline-block checkbox bg-[#ccc]"></span>
            Sandals
          </label>
          <label className="relative select-none cursor-pointer flex gap-2 items-center">
            <input
              style={{ opacity: 0, cursor: "pointer" }}
              className="radio-input absolute"
              onClick={handleFilter}
              type="radio"
              name="category"
              value="Heels"
            />{" "}
            <span className="h-3 w-3 rounded-full inline-block checkbox bg-[#ccc]"></span>
            Heels
          </label>
        </div>
      </div>

      <div className="mb-3">
        <h2 className="font-bold text-[#4b4747] text-lg mb-1">Price</h2>
        <div className="flex flex-col justify-center">
          <label className="relative select-none cursor-pointer flex gap-2 items-center">
            <input
              style={{ opacity: 0, cursor: "pointer" }}
              className="radio-input absolute"
              onClick={handleFilter}
              type="radio"
              name="newPrice"
              value="all"
            />{" "}
            <span className="h-3 w-3 rounded-full inline-block checkbox bg-[#ccc]"></span>
            All
          </label>
          <label className="relative select-none cursor-pointer flex gap-2 items-center">
            <input
              style={{ opacity: 0, cursor: "pointer" }}
              className="radio-input absolute"
              onClick={handleFilter}
              type="radio"
              min={0}
              max={50}
              name="newPrice"
              value=""
            />{" "}
            <span className="h-3 w-3 rounded-full inline-block checkbox bg-[#ccc]"></span>
            $0 - $50
          </label>
          <label className="relative select-none cursor-pointer flex gap-2 items-center">
            <input
              style={{ opacity: 0, cursor: "pointer" }}
              className="radio-input absolute"
              onClick={handleFilter}
              type="radio"
              name="newPrice"
              value=""
              min={50}
              max={100}
            />{" "}
            <span className="h-3 w-3 rounded-full inline-block checkbox bg-[#ccc]"></span>
            $50 - $100
          </label>
          <label className="relative select-none cursor-pointer flex gap-2 items-center">
            <input
              style={{ opacity: 0, cursor: "pointer" }}
              className="radio-input absolute"
              onClick={handleFilter}
              type="radio"
              name="newPrice"
              value=""
              min={100}
              max={150}
            />{" "}
            <span className="h-3 w-3 rounded-full inline-block checkbox bg-[#ccc]"></span>
            $100 - $150
          </label>
          <label className="relative select-none cursor-pointer flex gap-2 items-center">
            <input
              style={{ opacity: 0, cursor: "pointer" }}
              className="radio-input absolute"
              onClick={handleFilter}
              type="radio"
              name="newPrice"
              value=""
              min={150}
              max={500}
            />{" "}
            <span className="h-3 w-3 rounded-full inline-block checkbox bg-[#ccc]"></span>
            Over $150
          </label>
        </div>
      </div>

      <div className="mb-3">
        <h2 className="font-bold text-[#4b4747] text-lg mb-1">Color</h2>
        <div className="flex flex-col justify-center">
          <label className="relative select-none cursor-pointer flex gap-2 items-center">
            <input
              style={{ opacity: 0, cursor: "pointer" }}
              className="radio-input absolute"
              onClick={handleFilter}
              type="radio"
              name="color"
              value="all"
            />{" "}
            <span className="h-3 w-3 rounded-full inline-block checkbox bg-[#ccc]"></span>
            All
          </label>
          <label className="relative select-none cursor-pointer flex gap-2 items-center">
            <input
              style={{ opacity: 0, cursor: "pointer" }}
              className="radio-input absolute"
              onClick={handleFilter}
              type="radio"
              name="color"
              value="Black"
            />{" "}
            <span className="h-3 w-3 rounded-full inline-block checkbox bg-[#ccc]"></span>
            Black
          </label>
          <label className="relative select-none cursor-pointer flex gap-2 items-center">
            <input
              style={{ opacity: 0, cursor: "pointer" }}
              className="radio-input absolute"
              onClick={handleFilter}
              type="radio"
              name="color"
              value="Red"
            />{" "}
            <span className="h-3 w-3 rounded-full inline-block checkbox bg-[#ccc]"></span>
            Red
          </label>
          <label className="relative select-none cursor-pointer flex gap-2 items-center">
            <input
              style={{ opacity: 0, cursor: "pointer" }}
              className="radio-input absolute"
              onClick={handleFilter}
              type="radio"
              name="color"
              value="Green"
            />{" "}
            <span className="h-3 w-3 rounded-full inline-block checkbox bg-[#ccc]"></span>
            Green
          </label>
          <label className="relative select-none cursor-pointer flex gap-2 items-center">
            <input
              style={{ opacity: 0, cursor: "pointer" }}
              className="radio-input absolute"
              onClick={handleFilter}
              type="radio"
              name="color"
              value="White"
            />{" "}
            <span className="h-3 w-3 rounded-full inline-block checkbox bg-[#ccc]"></span>
            White
          </label>
        </div>
      </div>
    </section>
  );
};

export default Filter;
