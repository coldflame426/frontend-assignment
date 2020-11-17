import React from "react";

import headshot from "images/headshot.jpg";

import "./Blog.scss";

const Blog = () => {
  return (
    <div className="blog__wrapper">
      <img alt="avatar" className="poster__avatar" src={headshot} />
      <div className="blog__content">
        <h1>A little about me</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default Blog;
