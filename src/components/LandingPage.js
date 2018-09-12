import React from "react";

import BlogPost from "./BlogPost";
import Header from "./Header";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const themes = {
  BLUE: { color: "blue" },
  GREEN: { color: "green" }
};

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: themes.BLUE
    };
  }

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === themes.BLUE ? themes.GREEN : themes.BLUE
    });
  };

  render() {
    return (
      <div className="page">
        <NavBar theme={this.state.theme} toggleTheme={this.toggleTheme} />
        <Header />
        <main>
          <BlogPost />
          <BlogPost />
        </main>
        <SideBar theme={this.state.theme} />
      </div>
    );
  }
}

export default LandingPage;
