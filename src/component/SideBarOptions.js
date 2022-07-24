import React from "react";
import "./SideBarOptions.css";

const SideBarOptions = ({ Icon, title, number, seleted }) => {
  return (
    <div className={`sidebaroptions ${seleted && "sidebar--active"}`}>
      <Icon />
      <h3> {title}</h3>
      <p>{number}</p>
    </div>
  );
};

export default SideBarOptions;
