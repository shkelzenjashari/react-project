import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import img from "../Images/typing.jpg";
import Modal from "../Modal/Modal";
import LoginModal from "./SignUpModal";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    age: "",
    name: "",
    surname: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!formData.email.trim().endsWith(".com")) {
      newErrors.email = "Email must end with '.com'";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.trim().length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 4) {
      newErrors.name = "Name must be at least 4 characters";
    }

    if (!formData.surname.trim()) {
      newErrors.surname = "Surname is required";
    } else if (formData.surname.trim().length < 4) {
      newErrors.surname = "Surname must be at least 4 characters";
    }

    if (!formData.age.trim()) {
      newErrors.age = "Age is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const navigate = useNavigate();

  const submit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
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

        navigate("/loginmodal");
      } catch (error) {
        console.error(error);
        setFormData({
          ...formData,
          error: "Registration failed. Please try again.",
        });
      }
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
            <img src={img} alt="Background" />
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
              {errors && <p className="error">{errors.email}</p>}
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={handleChange("password")}
              />
              {errors && <p className="error">{errors.password}</p>}
            </div>
            <div className="mb-3">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                onChange={handleChange("name")}
              />
              {errors && <p className="error">{errors.name}</p>}
            </div>
            <div className="mb-3">
              <label>Surname</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter Surname"
                onChange={handleChange("surname")}
              />
              {errors && <p className="error">{errors.surname}</p>}
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
                <Link to="/loginmodal">Sign In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
