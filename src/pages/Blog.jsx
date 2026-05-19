import React, { useEffect, useState } from "react";
import { getBlogs } from "../api/blogApi";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await getBlogs();

      console.log(res.data); // debugging

      setBlogs(res.data);
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        Blog Posts
      </h1>

      {blogs.length === 0 ? (
        <p>No blogs available</p>
      ) : (
        blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow rounded-xl p-6 mb-6"
          >
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
            )}

            <h2 className="text-2xl font-bold">
              {blog.title}
            </h2>

            <p className="text-gray-500 mt-1">
              By {blog.author}
            </p>

            <p className="mt-4">
              {blog.content}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Blog;