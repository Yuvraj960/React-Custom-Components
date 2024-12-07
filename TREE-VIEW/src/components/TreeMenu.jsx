/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import MenuList from "./MenuList";
import "./TreeMenu.css";

const TreeMenu = ({ menus = [] }) => {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
};

export default TreeMenu;
