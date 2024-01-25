import React, { useState } from "react";
import "./navbar.css";
import Logo from "../Images/Logo.svg";
import userLogin from "../Images/user-login.svg";
import { Link, useLocation } from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import Modal from "../Modal/Modal";
import Login from "../Login/Login";

const Navbar = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar ${isMenuOpen ? "menu-open" : ""}`}>
      <img className="logo" src={Logo} alt="logo" />
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`navbar-list ${isMenuOpen ? "menu-open" : ""}`}>
        <li className={location.pathname === "/home" ? "active" : ""}>
          <Link to="/home" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li className={location.pathname === "/about" ? "active" : ""}>
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>
      <li>
        <img
          onClick={() => setIsModalOpen(true)}
          src={userLogin}
          className="modalLogo"
          alt="foto"
        />
        {isModalOpen && (
          <Modal setIsModalOpen={setIsModalOpen}>
            <Login />
          </Modal>
        )}
      </li>
    </div>
  );
};

export default Navbar;
