import React from "react";

const Brandmenu = ({ item, closeSideMenu }) => {
  console.log("brandmenu", item);

  const house = item.brandMenu.map((item) => item.title);
  console.log("houses", house);

  return (
    <div className="Brandmenu">
      {item.brandMenu.map((item, index) => {
        return (
          <p className="Brandmenu_title" key={index}>
            {item.title}
          </p>
        );
      })}
    </div>
  );
};

export default Brandmenu;
