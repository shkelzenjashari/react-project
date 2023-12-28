import React from "react";
import "./navbar.css";
import Logo from "../Images/Logo.svg";
import userLogin from "../Images/user-login.svg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="logo" />
      <ul className="navbar-list">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/about" ? "active" : ""}>
          <Link to="/about">About</Link>
        </li>
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <li>
        <Link to="/login">
          <img
            className="user-login img-responsive"
            src={userLogin}
            alt="user-login"
          />
        </Link>
      </li>

      <button className="night-button">Dark Mode</button>
    </div>
  );
};

export default Navbar;
