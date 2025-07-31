import React, { useState } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Main from "./components/Main";
import data from "./db/data";
import { productsData } from "./Context/context";
import { filteredData } from "./Context/context";
import { querryData } from "./Context/context";

const App = () => {
  const dataState = useState(data);
  const filteredState = useState(data);
  const querryState = useState("");
  return (
    <div className="h-[100vh] w-[100vw]">
      <div className="flex h-[100vh] items-center absolute">
        <div className="absolute left-45 h-[90vh] m-auto border border-[#e6e3e3]"></div>
      </div>
      <div className="flex w-[100vw] justify-center absolute">
        <div className="absolute top-18 w-[90vw] m-auto border border-[#e6e3e3]"></div>
      </div>

      <productsData.Provider value={dataState}>
        <filteredData.Provider value={filteredState}>
          <querryData.Provider value={querryState}>
            <Header />

            <div className="flex">
              <Filter />
              <Main />
            </div>
          </querryData.Provider>
        </filteredData.Provider>
      </productsData.Provider>
    </div>
  );
};

export default App;
