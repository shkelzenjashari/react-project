import logo from "../Images/Logo.png";
import userLogin from "../Images/userLogin.png";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
      </div>

      <div className={`navbar-list ${menuVisible ? "visible" : ""}`}>
        <ul>
          <li>
            <Link to={Home} onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>

          {/* <div className={`user-login ${menuVisible ? "visible" : ""}`}> */}
          <img src={userLogin} alt="user-login" />
          <button>Login</button>
        </ul>
        {/* </div> */}
      </div>

      <div
        className={`menu-icon ${menuVisible ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </div>
  );
};

export default Navbar;
