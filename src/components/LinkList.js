import React from "react";

const LinkList = () => {
  return (
    <ul>
      <li>
        <span role="img" aria-label="emoji hand pointing at text">
          👉
        </span>{" "}
        Your Friends
      </li>
      <li>
        <span role="img" aria-label="emoji hand pointing at text">
          👉
        </span>{" "}
        Your Followers
      </li>
      <li>
        <span role="img" aria-label="emoji hand pointing at text">
          👉
        </span>{" "}
        Most Read
      </li>
      <li>
        <span role="img" aria-label="emoji hand pointing at text">
          👉
        </span>{" "}
        Recommended
      </li>
    </ul>
  );
};

export default LinkList;
