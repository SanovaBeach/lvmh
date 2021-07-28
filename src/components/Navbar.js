import React from "react";
import "./navbar.scss";
import { data } from "../data";
import Submenu from "./Submenu";

const Navbar = () => {
  return (
    <>
      <nav className="Navbar">
        <div className="Navbar_container">
          <div className="Navbar_menu">
            {data.map((item, index) => {
              return <Submenu key={index} item={item} />;
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
