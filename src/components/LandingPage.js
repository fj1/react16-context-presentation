import React from "react";

import BlogPost from "./BlogPost";
import Header from "./Header";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="page">
        <NavBar />
        <Header />
        <main>
          <BlogPost />
          <BlogPost />
        </main>
        <SideBar />
      </div>
    );
  }
}

export default LandingPage;
