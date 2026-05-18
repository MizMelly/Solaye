import React, { useState } from "react";
import { createBlog } from "../api/blogApi";

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await createBlog(formData);
      console.log("Blog created:", res.data);

      // clear form after success
      setFormData({
        title: "",
        content: "",
        author: "",
      });
    } catch (err) {
      console.log("Error creating blog:", err);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Create Blog</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <br /><br />

        <textarea
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Create Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;