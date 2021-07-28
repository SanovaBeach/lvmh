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
            return (
              <Sidemenu
                // openSideMenu={openSidemenu}
                // closeSidemenu={closeSidemenu}
                item={item}
                key={index}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;

{
  /* {item.subMenu.map((item, index) => {
  const { title, brandMenu } = item;
  console.log("brand menu", brandMenu);
  return (
    <li
      className="Dropdown_subtitle"
      key={index}
      onMouseEnter={openSidemenu}
    >
      {title} <FaAngleRight />
      {sidemenu && <Sidemenu />}
    </li>
  );
})} */
}
