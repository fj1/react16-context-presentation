import React from "react";

const NavBar = props => {
  return (
    <nav>
      <button onClick={props.toggleTheme} style={{ color: props.theme.color }}>
        Toggle Theme
      </button>
    </nav>
  );
};

export default NavBar;
