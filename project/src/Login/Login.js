import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import img from "../Images/typing.jpg";
import CongratulationsModal from "../Modal/CongratulationsModal";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const validateSignInForm = () => {
    let isValid = true;

    if (!credentials.email || !credentials.email.includes("@")) {
      setEmailError("Valid email address is required");
      isValid = false;
    } else {
      setEmailError(null);
    }

    if (!credentials.password || credentials.password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      isValid = false;
    } else {
      setPasswordError(null);
    }

    return isValid;
  };

  const submit = async (event) => {
    event.preventDefault();

    if (validateSignInForm()) {
      const fetchUrl = "http://localhost:8000/api/user/login";

      try {
        const response = await fetch(fetchUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });

        if (!response.ok) {
          const responseData = await response.json();

          if (response.status === 401) {
            setEmailError(responseData.emailError || null);
          } else {
            throw new Error("Login failed");
          }
        } else {
          setEmailError(null);
          setPasswordError(null);

          const data = await response.json();
          localStorage.setItem("user", JSON.stringify(data));

          navigate("/home");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleChange = (type) => (e) => {
    setCredentials({ ...credentials, [type]: e.target.value });
  };

  return (
    <div className="container">
      <div className="signinBx">
        <div className="imgBx">
          <img src={img} alt="Background" />
        </div>
        <div className="formBx">
          <form onSubmit={submit} className="signinForm">
            <h3>Sign In</h3>

            <div className="formGroup mb-3">
              <label>Email</label>
              <input
                type="text"
                className={`form-control ${emailError ? "is-invalid" : ""}`}
                placeholder="Enter Email"
                onChange={handleChange("email")}
              />
              {emailError && <div className="error-message">{emailError}</div>}
            </div>
            <div className="formGroup mb-3">
              <label>Password</label>
              <input
                type="password"
                className={`form-control ${passwordError ? "is-invalid" : ""}`}
                placeholder="Enter password"
                onChange={handleChange("password")}
              />
              {passwordError && (
                <div className="error-message">{passwordError}</div>
              )}
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p>
              Doesn't have an account?
              <Link to="/signupmodal">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
