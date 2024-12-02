/* eslint-disable no-unused-vars */
import React from "react";
import Image from "./components/Image";

const App = () => {
  return (
    <div>
      <Image url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} />
    </div>
  );
};

export default App;
