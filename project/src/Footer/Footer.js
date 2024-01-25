import React from "react";
import "./Footer.css";
import img from "../Images/Logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="first-part">
          <Link to="/home">
            <img src={img} alt="logo" className="logo" />
          </Link>
        </div>
        <div className="second-part">
          <div className="list">
            <p>Go back to: </p>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="third-part">
          <p>Follow us on socials:</p>
          <ul className="socials-list">
            <li>
              <a href="https://www.facebook.com" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank">
                Linkedin
              </a>
            </li>
          </ul>
        </div>
        <div className="last-part">
          <p>All rights reserved.</p>
          <p>MetaBLOG</p>
          <p>2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
