// import React, { useState } from "react";
// import Navbar from "../Navbar/Navbar";
// import "./SignUp.css";
// import image from "../Images/typing.jpg";
// import { useNavigate } from "react-router-dom";
// import useFormValidation from "../Hooks/useFormValidation";

// const SignUp = () => {
//   const navigate = useNavigate();
//   const { errors, validateForm } = useFormValidation();

//   const [formData, setFormData] = useState({
//     name: "",
//     surname: "",
//     email: "",
//     password: "",
//   });

//   const handleSignUpClick = () => {
//     navigate("/login");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm(formData, "signup")) {
//       console.log("Form submitted successfully");
//     }
//   };

//   const handleChange = (evt) => {
//     setFormData({ ...formData, [evt.target.name]: evt.target.value });
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="login-container">
//         <div className="image-container">
//           <img src={image} alt="Login" />
//           <button
//             className="loginFormButton switch-button signup"
//             onClick={handleSignUpClick}
//           >
//             Already have an account? Log In
//           </button>
//         </div>
//         <div className="form-container">
//           <form onSubmit={handleSubmit}>
//             <h2>Sign Up</h2>
//             <label>Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//             {errors.name && <p className="error">{errors.name}</p>}
//             <label>Surname:</label>
//             <input
//               type="text"
//               name="surname"
//               value={formData.surname}
//               onChange={handleChange}
//               required
//             />
//             {errors.surname && <p className="error">{errors.surname}</p>}
//             <label>Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//             {errors.email && <p className="error">{errors.email}</p>}
//             <label>Password:</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//             {errors.password && <p className="error">{errors.password}</p>}
//             <button className="loginFormButton" type="submit">
//               Sign Up
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUp;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    age: "",
    name: "",
    surname: "",
  });

  const navigate = useNavigate();

  const submit = async (event) => {
    event.preventDefault();
    const fetchUrl = "http://localhost:8000/api/user/";
    try {
      const response = await fetch(fetchUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();
      localStorage.setItem("user", JSON.stringify(data));

      navigate("/login");
    } catch (error) {
      console.error(error);
      setFormData({
        ...formData,
        error: "Registration failed. Please try again.",
      });
    }
  };

  const handleChange = (type) => (e) => {
    setFormData({ ...formData, [type]: e.target.value });
  };

  return (
    <form onSubmit={submit}>
      <div className="container">
        <div className="signupBx">
          <div className="imgBx">
            <img src={"img2"} alt="Background" />
          </div>
          <div className="formBx">
            <h3>Sign Up</h3>
            <div className="mb-3">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email"
                onChange={handleChange("email")}
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={handleChange("password")}
              />
            </div>
            <div className="mb-3">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                onChange={handleChange("name")}
              />
            </div>
            <div className="mb-3">
              <label>Surname</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter Surname"
                onChange={handleChange("surname")}
              />
            </div>
            <div className="mb-3">
              <label>Age</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter Age"
                onChange={handleChange("age")}
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <p>
                Already have an account?
                <Link to="/login">Sign In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
