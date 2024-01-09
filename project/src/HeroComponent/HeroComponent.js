import React, { useEffect, useState } from "react";
import "./heroComponent.css";

const HeroComponent = () => {
  const [keyword, setKeyword] = useState("");
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const searchPosts = (keyword) => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        if (response.status === 200) {
          setPosts(
            posts.filter((post) => post.title.toLowerCase().startsWith(keyword))
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deletePost = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 200) {
          setPosts(posts.filter((post) => post.id !== id));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const editPost = (post) => {
    setTitle(post.title);
    setBody(post.body);
  };

  // const addPost = (title, body) => {
  //   fetch("https://jsonplaceholder.typicode.com/posts"),
  //     {
  //       method: "POST",
  //       body: JSON.stringify({
  //         title,
  //         body,
  //         userId: Math.random(),
  //       }),
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //     }
  //       .then((response) => response.json())
  //       .then((object) => {
  //         setPosts([object, ...posts]);
  //       });
  // };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  useEffect(() => {
    searchPosts();
    console.log(keyword);
  }, [keyword]);

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
      <div className="pre-post-grid">
        <form>
          <h3>Add/Edit new post</h3>
          <div className="input-container">
            <label htmlFor="title">
              Title
              <input
                type="text"
                value={title}
                onChange={(evt) => setTitle(evt.target.value)}
              />
            </label>
          </div>
          <div className="input-container">
            <label htmlFor="body">
              Body
              <textarea
                type="text"
                value={body}
                onChange={(evt) => setBody(evt.target.value)}
              />
            </label>
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
      <div className="post-grid">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => editPost(post)}>Edit</button>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroComponent;
