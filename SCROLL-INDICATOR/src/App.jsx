/* eslint-disable no-unused-vars */
import React from "react";
import Scroll from "./components/scroll";

const App = () => {
  return (
    <div>
      <Scroll url={`https://dummyjson.com/products?limit=200`} />
    </div>
  );
};

export default App;
