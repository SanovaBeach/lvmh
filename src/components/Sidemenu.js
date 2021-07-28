import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import Brandmenu from "./Brandmenu";
import "./brandmenu.scss";

const Sidemenu = ({ item }) => {
  const [sidemenu, setSidemenu] = useState(false);

  const openSidemenu = () => setSidemenu(true);
  const closeSidemenu = () => setSidemenu(false);

  console.log(item);
  return (
    <div className="Sidemenu">
      <p className="Sidemenu_title" onMouseEnter={openSidemenu}>
        {item.title} <FaAngleRight />
      </p>
      {sidemenu && <Brandmenu item={item} closeSidemenu={closeSidemenu} />}
    </div>
  );
};

export default Sidemenu;
