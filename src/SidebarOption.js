import React from "react";
import "./SidebarOption.css";

function SidebarOption({ active, text, Icon }) {
  // inside the bracket 'Icon' is a component and thus it is capital
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
