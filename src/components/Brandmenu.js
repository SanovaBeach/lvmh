import React from "react";

const Brandmenu = ({ item, sidemenu, closeSidemenu }) => {
  return (
    <div className="Brandmenu">
      {sidemenu && (
        <div className="Brandmenu_container">
          {item.brandMenu.map((item, index) => {
            return (
              <p className="Brandmenu_title" key={index}>
                {item.title}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Brandmenu;
