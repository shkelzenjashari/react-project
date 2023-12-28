// LoginForm.js
import React, { useState } from "react";
import "./LoginForm.css";
import Navbar from "../Navbar/Navbar";
import image from "../Images/typing.jpg";

const LoginForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div
          className="form-container"
          style={{ transform: `translateX(${isSignIn ? "0%" : "100%"})` }}
        >
          <form>
            <h2>{isSignIn ? "Sign In" : "Sign Up"}</h2>
            {!isSignIn && (
              <>
                <label>Name:</label>
                <input type="text" name="name" required />
                <label>Surname:</label>
                <input type="text" name="surname" required />
              </>
            )}
            <label>Email:</label>
            <input type="email" name="email" required />
            <label>Password:</label>
            <input type="password" name="password" required />
            <button className="loginFormButton" type="submit">
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </form>
        </div>
        <div
          className="image-container"
          style={{ transform: `translateX(${isSignIn ? "0%" : "-100%"})` }}
        >
          <img
            className="loginImage"
            src={image}
            alt={isSignIn ? "Sign In" : "Sign Up"}
          />
        </div>
        <button className="loginFormButton switch-button" onClick={toggleForm}>
          {isSignIn ? "Don't have an account? Sign up" : "Log in"}
        </button>
      </div>
    </>
  );
};

export default LoginForm;
