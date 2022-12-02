import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="home__possibility section__padding" id="features">
      <div className="home__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="home__possibility-content">
        <h4>Request early access to get started!</h4>
        <h1 className="gradient__text">
          The possibilities are beyound your imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
          temporibus incidunt quo omnis unde ut commodi reprehenderit veritatis
          exercitationem rem enim possimus consequatur nesciunt aut adipisci
          aliquam expedita magni.
        </p>
        <h4>Request early access to get started!</h4>
      </div>
    </div>
  );
};

export default Possibility;
