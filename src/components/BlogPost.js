import React from "react";

import loremIpsum from "../loremIpsum";

const BlogPost = () => {
  return (
    <article>
      <h1>Breaking News</h1>
      <p>{loremIpsum}</p>
    </article>
  );
};

export default BlogPost;
