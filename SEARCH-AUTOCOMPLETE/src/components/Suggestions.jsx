/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Suggestions = ({ data, handleClick }) => {
  return (
    <ul>
      {data && data.length
        ? data.map((item, index) => (
            <li onClick={handleClick} key={index}>
              {item}
            </li>
          ))
        : null}
    </ul>
  );
};

export default Suggestions;
