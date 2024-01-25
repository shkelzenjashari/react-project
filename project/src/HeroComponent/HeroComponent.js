import React, { useEffect, useState } from "react";
import axios from "axios";
import "./heroComponent.css";

const HeroComponent = () => {
  const [keyword, setKeyword] = useState("");
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [activePost, setActivePost] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (activePost) {
      await editPost(title, body, activePost);
    } else {
      await addPost(title, body);
    }

    // Reset form fields and activePost state
    setTitle("");
    setBody("");
    setActivePost(null);
  };

  const editPost = async (title, body, activePost) => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${activePost.id}`,
        {
          id: activePost.id,
          title,
          body,
          userId: activePost.userId,
        }
      );

      const updatedPost = response.data;
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === updatedPost.id ? updatedPost : post
        )
      );
      setActivePost(null);
    } catch (error) {
      console.error("Error editing post:", error);
    }
  };

  const addPost = async (title, body) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title,
          body,
          userId: Math.random(),
        }
      );

      const newPost = response.data;
      setPosts((prevPosts) => [newPost, ...prevPosts]);
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  const searchPosts = (keyword) => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const filteredPosts = response.data.filter(
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

  const deletePost = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  useEffect(() => {
    if (keyword.trim() !== "") {
      searchPosts(keyword);
    } else {
      setFilteredPosts(posts);
    }
  }, [keyword]);

  return (
    <div className="hero-component">
      <h1 className="hero-title">Welcome to Meta Blog!</h1>
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
                value={activePost ? activePost.title : title}
                onChange={(evt) => {
                  const updatedTitle = evt.target.value;
                  setTitle(updatedTitle);
                  if (activePost) {
                    setActivePost((prevActivePost) => ({
                      ...prevActivePost,
                      title: updatedTitle,
                    }));
                  }
                }}
              />
            </label>
          </div>
          <div className="input-container">
            <label htmlFor="body">
              Body
              <textarea
                type="text"
                value={activePost ? activePost.body : body}
                onChange={(evt) => {
                  const updatedBody = evt.target.value;
                  setBody(updatedBody);
                  if (activePost) {
                    setActivePost((prevActivePost) => ({
                      ...prevActivePost,
                      body: updatedBody,
                    }));
                  }
                }}
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
            <button onClick={() => setActivePost(post)}>Edit</button>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroComponent;
