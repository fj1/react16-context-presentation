import React from "react";

import LinkList from "./LinkList";
import NewPostButton from "./NewPostButton";

const SideBar = () => {
  return (
    <section>
      <LinkList />
      <NewPostButton />
    </section>
  );
};

export default SideBar;
