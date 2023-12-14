import React from "react";
import "./navbar.css";
import Logo from "../Images/Logo.svg";
import userLogin from "../Images/user-login.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="logo" />
      <ul className="navbar-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <img
        onClick={() => {
          console.log("clicked");
        }}
        className="user-login img-responsive"
        src={userLogin}
        alt="user-login"
      />
      <button className="night-button">Night mode</button>
    </div>
  );
};

export default Navbar;
