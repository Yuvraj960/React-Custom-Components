/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import "./scroll.css";

const Scroll = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <div>Loading Data... Please Wait</div>;
  }

  return (
    <div>
      <div className="topContainer">
        <h1>Custom Scroll Indicator</h1>
        <div className="scrollProgress">
          <div
            className="currentProgress"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
};

export default Scroll;
