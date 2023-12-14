import React, { useState } from "react";
import "./heroComponent.css";

const HeroComponent = () => {
  const [keyword, setKeyword] = useState("");
  return (
    <div className="hero-component">
      <h1>Welcome to Meta Blog!</h1>
      <div className="heroComponentBackground">
        <input
          type="text"
          placeholder="Search posts here"
          value={keyword}
          onChange={(evt) => setKeyword(evt.target.value)}
        />
      </div>
    </div>
  );
};

export default HeroComponent;
