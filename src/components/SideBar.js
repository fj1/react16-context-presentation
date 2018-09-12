import React from "react";

import LinkList from "./LinkList";
import NewPostButton from "./NewPostButton";

const SideBar = props => {
  return (
    <section>
      <LinkList />
      <NewPostButton theme={props.theme} />
    </section>
  );
};

export default SideBar;
