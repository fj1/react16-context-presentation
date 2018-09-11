import React from "react";

export const themes = {
  BLUE: {
    color: "blue"
  },
  GREEN: {
    color: "green"
  }
};

export const ThemeContext = React.createContext({
  theme: themes.BLUE,
  toggleTheme: () => {}
});
