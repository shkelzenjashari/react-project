import React, { useEffect, useState } from "react";
import "./heroComponent.css";

const HeroComponent = () => {
  const [keyword, setKeyword] = useState("");
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [activePost, setActivePost] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (activePost) {
      editPost(activePost.id);
    } else {
      addPost();
    }
  };

  const editPost = (postId) => {
    const updatedPost = {
      title: title,
      body: body,
    };

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedPosts = posts.map((post) =>
          post.id === postId ? data : post
        );
        setPosts(updatedPosts);
      })
      .catch((error) => console.error("Error editing post:", error));
  };

  const addPost = () => {
    const newPost = {
      title: title,
      body: body,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((data) => setPosts([data, ...posts]))
      .catch((error) => console.error("Error adding post:", error));
  };

  const searchPosts = (keyword) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        const filteredPosts = data.filter(
          (post) =>
            (post.title &&
              post.title.toLowerCase().includes(keyword.toLowerCase())) ||
            (post.body &&
              post.body.toLowerCase().includes(keyword.toLowerCase()))
        );
        setPosts(filteredPosts);
      })
      .catch((error) => console.error("Error searching posts:", error));
  };

  const deletePost = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setPosts(posts.filter((post) => post.id !== id));
        } else {
          console.error(
            `Failed to delete post with ID ${id}. Status code: ${response.status}`
          );
        }
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  useEffect(() => {
    searchPosts(keyword);
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
