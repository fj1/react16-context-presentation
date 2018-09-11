import React from "react";

import BlogPost from "./BlogPost";
import Header from "./Header";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { ThemeContext, themes } from "../themeContext";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: themes.BLUE,
      toggleTheme: this.toggleTheme
    };
  }

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.BLUE ? themes.GREEN : themes.BLUE
    }));
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <div className="page">
          <NavBar />
          <Header />
          <main>
            <BlogPost />
            <BlogPost />
          </main>
          <SideBar />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default LandingPage;
