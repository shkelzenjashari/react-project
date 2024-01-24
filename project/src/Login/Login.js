// import React, { useState } from "react";
// import Navbar from "../Navbar/Navbar";
// import "./Login.css";
// import image from "../Images/typing.jpg";
// import { Link, useNavigate } from "react-router-dom";
// import useFormValidation from "../Hooks/useFormValidation";

// // const Login = () => {
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// //   const navigate = useNavigate();

// //   const { errors, validateForm } = useFormValidation();

// //   const [formData, setFormData] = useState({
// //     email: "",
// //     password: "",
// //   });

// //   const handleSignUpClick = () => {
// //     navigate("/signup");
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     if (validateForm(formData, "signin")) {
// //       console.log("Form submitted successfully");
// //       setIsLoggedIn(true);
// //     }
// //   };

// //   const handleChange = (evt) => {
// //     setFormData({ ...formData, [evt.target.name]: evt.target.value });
// //   };

// //   return (
// //     <>
// //       <Navbar />
// //       <div className="login-container">
// //         <div className="form-container">
// //           <form onSubmit={handleSubmit}>
// //             <h2>Sign In</h2>
// //             <label>Email:</label>
// //             <input
// //               type="email"
// //               name="email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               required
// //             />
// //             {errors.email && <p className="error">{errors.email}</p>}
// //             <label>Password:</label>
// //             <input
// //               type="password"
// //               name="password"
// //               value={formData.password}
// //               onChange={handleChange}
// //               required
// //             />
// //             {errors.password && <p className="error">{errors.password}</p>}
// //             <button className="loginFormButton" type="submit">
// //               Sign in
// //             </button>
// //           </form>
// //         </div>
// //         <div className="image-container">
// //           <img src={image} alt="Login" />
// //           <button
// //             className="loginFormButton switch-button login"
// //             onClick={handleSignUpClick}
// //           >
// //             Don't have an account? Sign Up
// //           </button>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// export default Login;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const submit = async (event) => {
    event.preventDefault();
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
          setPasswordError(
            responseData.passwordError ||
              "Incorrect password. Please try again."
          );
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
  };

  const handleChange = (type) => (e) => {
    setCredentials({ ...credentials, [type.toLowerCase()]: e.target.value });
  };

  return (
    <div className="container">
      <div className="signinBx">
        <div className="imgBx">
          <img src={""} alt="Background" />
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
                onChange={handleChange("Email")}
              />
              {emailError && <div className="error-message">{emailError}</div>}
            </div>
            <div className="formGroup mb-3">
              <label>Password</label>
              <input
                type="password"
                className={`form-control ${passwordError ? "is-invalid" : ""}`}
                placeholder="Enter password"
                onChange={handleChange("Password")}
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
