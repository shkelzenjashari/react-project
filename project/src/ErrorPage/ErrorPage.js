import React from "react";
import { Link, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div>
      <h1>404: Page not found</h1>
      <button onClick={handleClick}>Kthehu ne homepage</button>
    </div>
  );
};

export default ErrorPage;
