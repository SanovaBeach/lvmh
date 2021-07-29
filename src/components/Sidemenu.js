import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import Brandmenu from "./Brandmenu";
import "./brandmenu.scss";

const Sidemenu = ({ item, index }) => {
  const [sidemenu, setSidemenu] = useState(false);
  const [brandMenu, setBrandMenu] = useState(false);

  const openSidemenu = () => {
    setSidemenu(true);
    setBrandMenu(true);
  };
  const closeSidemenu = () => {
    setBrandMenu(false);
  };

  return (
    <div className="Sidemenu" onMouseEnter={openSidemenu}>
      <p className="Sidemenu_title">
        {item.title} <FaAngleRight />
      </p>
      {sidemenu && brandMenu && (
        <Brandmenu
          item={item}
          sidemenu={sidemenu}
          closeSidemenu={closeSidemenu}
        />
      )}
    </div>
  );
};

export default Sidemenu;
