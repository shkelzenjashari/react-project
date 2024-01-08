import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Login.css";
import image from "../Images/typing.jpg";
import { Link, useNavigate } from "react-router-dom";
import useFormValidation from "../Hooks/useFormValidation";

const Login = () => {
  const navigate = useNavigate();

  const { errors, validateForm } = useFormValidation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm(formData, "signin")) {
      console.log("Form submitted successfully");
    }
  };

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h2>Sign In</h2>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <p className="error">{errors.password}</p>}
            <button className="loginFormButton" type="submit">
              Sign in
            </button>
          </form>
        </div>
        <div className="image-container">
          <img src={image} alt="Login" />
          <button
            className="loginFormButton switch-button login"
            onClick={handleSignUpClick}
          >
            Don't have an account? Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
