import React from "react";

import { ThemeContext } from "../themeContext";

const NewPostButton = () => {
  return (
    <ThemeContext.Consumer>
      {value => <button style={{ color: value.theme.color }}>Create New Post</button>}
    </ThemeContext.Consumer>
  );
};

export default NewPostButton;
