import React from "react";

import { ThemeContext } from "../themeContext";

const NavBar = () => {
  return (
    <nav>
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <button onClick={toggleTheme} style={{ color: theme.color }}>
            Toggle Theme
          </button>
        )}
      </ThemeContext.Consumer>
    </nav>
  );
};

export default NavBar;
