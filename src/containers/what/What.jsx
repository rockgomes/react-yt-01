import React from "react";
import { Feature } from "../../components";
import "./what.css";

const What = () => {
  return (
    <div className="home__what section__margin" id="what">
      <div className="home__what-feature">
        <Feature
          title="What is GPT3?"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad facere doloribus, beatae libero officia amet fugiat dicta laudantium fuga unde deserunt obcaecati nam iste dignissimos voluptatibus quae! Eaque, delectus consequatur."
        />
      </div>
      <div className="home__what-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="home__what-container">
        <Feature
          title="Chatbots"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad facere doloribus, beatae libero officia amet fugiat dicta laudantium fuga unde deserunt obcaecati nam iste dignissimos voluptatibus quae! Eaque, delectus consequatur."
        />
        <Feature
          title="Knowledgebase"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad facere doloribus, beatae libero officia amet fugiat dicta laudantium fuga unde deserunt obcaecati nam iste dignissimos voluptatibus quae! Eaque, delectus consequatur."
        />
        <Feature
          title="Education"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad facere doloribus, beatae libero officia amet fugiat dicta laudantium fuga unde deserunt obcaecati nam iste dignissimos voluptatibus quae! Eaque, delectus consequatur."
        />
      </div>
    </div>
  );
};

export default What;
