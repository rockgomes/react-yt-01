import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="home__header section__padding" id="home">
      <div className="home__header-content">
        <h1 className="gradient__text">
          Let's build something amazing with OpenAI
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          numquam atque illum explicabo vitae laudantium repellat maxime, dolore
          accusantium vel quos eaque illo consectetur blanditiis possimus
          architecto consequuntur iusto. Magnam.
        </p>
        <div className="home__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="home__header-content__people">
          <img src={people} alt="people" />
          <p>1.600 people requested access in the last 24 hours.</p>
        </div>
      </div>
      <div className="home__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
