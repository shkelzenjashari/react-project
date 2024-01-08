import React, { useEffect, useState } from "react";
import "./heroComponent.css";

const HeroComponent = () => {
  const [keyword, setKeyword] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="hero-component">
      <h1>Welcome to Meta Blog!</h1>
      <div className="heroComponentBackground">
        <input
          type="search"
          placeholder="Search posts here"
          value={keyword}
          onChange={(evt) => setKeyword(evt.target.value)}
        />
      </div>
      <div className="post-grid">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroComponent;
