/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useState } from "react";
import "./Color.css";

const Color = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000");

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    setColor(hexColor);
  };

  const handleCreateRandomRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    setColor(rgbColor);
  };

  useEffect(() => {
    if (typeOfColor === "hex") {
      handleCreateRandomHexColor();
    } else {
      handleCreateRandomRgbColor();
    }
  }, [typeOfColor]);

  return (
    <div
      className="container"
      style={{
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Set HEX Color Mode</button>
      <button onClick={() => setTypeOfColor("rgb")}>Set RGB Color Mode</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>

      <div className="display"></div>
      <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX "}</h3>
      <h1>{color}</h1>
    </div>
  );
};

export default Color;
