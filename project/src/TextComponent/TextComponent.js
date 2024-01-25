import React from "react";
import img from "../Images/heroComponent.jpeg";
import { useNavigate } from "react-router-dom";
import "./TextComponent.css";

const TextComponent = (type) => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className="text-component">
      <h1>Welcome to MetaBlog page!</h1>
      <img className="text-component-logo" src={img} alt="foto" />
      <button onClick={handleClick}>Kthehu ne homepage</button>
    </div>
  );
};

export default TextComponent;
