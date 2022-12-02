import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: "Improving trust instantly",
    text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad facere doloribus, beatae libero officia amet fugiat dicta laudantium fuga unde deserunt obcaecati nam iste dignissimos voluptatibus quae! Eaque, delectus consequatur.",
  },
  {
    title: "Become active",
    text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad facere doloribus, beatae libero officia amet fugiat dicta laudantium fuga unde deserunt obcaecati nam iste dignissimos voluptatibus quae! Eaque, delectus consequatur.",
  },
  {
    title: "Improving trust instantly",
    text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad facere doloribus, beatae libero officia amet fugiat dicta laudantium fuga unde deserunt obcaecati nam iste dignissimos voluptatibus quae! Eaque, delectus consequatur.",
  },
  {
    title: "Become active",
    text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad facere doloribus, beatae libero officia amet fugiat dicta laudantium fuga unde deserunt obcaecati nam iste dignissimos voluptatibus quae! Eaque, delectus consequatur.",
  },
];

const Features = () => {
  return (
    <div className="home__features section__padding" id="possibility">
      <div className="home__features-heading">
        <h1 className="gradient__text">
          {" "}
          The future is now and you just need to realize it. Step into the
          future today and make it happen.
        </h1>
        <p>Rquest early access.</p>
      </div>
      <div className="home__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
