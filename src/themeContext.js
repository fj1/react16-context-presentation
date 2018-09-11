import React from 'react';

export const themes = {
  blue: {
    color: 'blue'
  },
  green: {
    color: 'green'
  }
}

export const ThemeContext = React.createContext(themes.blue);