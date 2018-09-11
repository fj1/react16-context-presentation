import React from "react";

import { ThemeContext } from "../themeContext";

const Header = () => {
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

export default Header;
