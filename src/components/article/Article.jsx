import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="home__blog-container_article">
      <div className="home__blog-container_article-img">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="home__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read full article</p>
      </div>
    </div>
  );
};

export default Article;
