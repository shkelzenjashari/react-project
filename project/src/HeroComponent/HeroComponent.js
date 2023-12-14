import React, { useState } from "react";
import "./HeroComponent.css";
import heroImage from "../Images/hero-component.webp";

const HeroComponent = () => {
  const [keyword, setKeyword] = useState("");
  return (
    <div className="hero">
      <img src={heroImage} alt="Hero" />
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for posts"
          value={keyword}
          onChange={(evt) => {
            setKeyword(evt.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default HeroComponent;
