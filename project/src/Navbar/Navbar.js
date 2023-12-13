import logo from "../Images/Logo.png";
import userLogin from "../Images/userLogin.png";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="navbar-list">
        <ul>
          <li>
            <Link to={Home}>Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>

      <div className="user-login">
        <img src={userLogin} alt="user-login" />
        <button>
          <Link to="/login">Sign in</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
