import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="home__footer section__padding">
      <div className="home__footer-heading">
        <h1 className="gradient__text">
          Do you want to step into the future before others?
        </h1>
      </div>
      <div className="home__footer-btn">
        <p>Rquest early access</p>
      </div>
      <div className="home__footer-links">
        <div className="home__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>address here</p>
        </div>
        <div className="home__footer-links_div">
          <h4>Links</h4>
          <p>Home</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="home__footer-links_div">
          <h4>Company</h4>
          <p>Terms & conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="home__footer-links_div">
          <h4>Get in Touch</h4>
          <p>Address</p>
          <p>Phone number</p>
          <p>Email</p>
        </div>
      </div>
      <div className="home__footer-copyright">
        <p>All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
