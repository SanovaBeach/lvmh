import React, { useState } from "react";
import "./submenu.scss";
import Dropdown from "./Dropdown";

const Submenu = ({ item }) => {
  const [dropDown, setDropDown] = useState(false);
  const [borderActive, setBorderActive] = useState(false);

  const mouseEnterEvent = () => {
    setDropDown(true);
    setBorderActive(true);
  };
  const mouseLeaveEvent = () => {
    setDropDown(false);
    setBorderActive(false);
  };

  return (
    <>
      <div className="Submenu">
        <p
          className="Submenu_item"
          style={{ borderBottom: borderActive ? "5px solid black" : "" }}
          onMouseEnter={mouseEnterEvent}
        >
          {item.title}
        </p>
      </div>
      {dropDown && <Dropdown item={item} mouseLeaveEvent={mouseLeaveEvent} />}
    </>
  );
};

export default Submenu;
