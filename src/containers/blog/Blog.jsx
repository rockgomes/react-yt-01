import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="home__blog section__padding" id="blog">
      <div className="home__blog-heading">
        <h1 className="gradient__text">
          A lot is happening. We are blogging about it.
        </h1>
      </div>
      <div className="home__blog-container">
        <div className="home__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="Dec 2, 2022"
            title="Article title goes here!"
          />
        </div>
        <div className="home__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Dec 2, 2022"
            title="Article title goes here!"
          />
          <Article
            imgUrl={blog03}
            date="Dec 2, 2022"
            title="Article title goes here!"
          />
          <Article
            imgUrl={blog04}
            date="Dec 2, 2022"
            title="Article title goes here!"
          />
          <Article
            imgUrl={blog05}
            date="Dec 2, 2022"
            title="Article title goes here!"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
