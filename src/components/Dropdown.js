import React, { useState } from "react";
import "./dropdown.scss";
import { FaAngleRight } from "react-icons/fa";
import Sidemenu from "./Sidemenu";

const Dropdown = ({ item, mouseLeaveEvent }) => {
  return (
    <>
      <div className="Dropdown" onMouseLeave={mouseLeaveEvent}>
        <h3 className="Dropdown_title">
          {item.title} Homepage <FaAngleRight />
        </h3>
        <ul className="Dropdown_menu">
          {item.subMenu.map((item, index) => {
            return <Sidemenu item={item} key={index} index={index} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
