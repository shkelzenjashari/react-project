import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./SignUp.css";
import image from "../Images/typing.jpg";
import { useNavigate } from "react-router-dom";
import useFormValidation from "../Hooks/useFormValidation";

const SignUp = () => {
  const navigate = useNavigate();
  const { errors, validateForm } = useFormValidation();

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const handleSignUpClick = () => {
    navigate("/login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm(formData, "signup")) {
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
        <div className="image-container">
          <img src={image} alt="Login" />
          <button
            className="loginFormButton switch-button signup"
            onClick={handleSignUpClick}
          >
            Already have an account? Log In
          </button>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}
            <label>Surname:</label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
            />
            {errors.surname && <p className="error">{errors.surname}</p>}
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
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
