import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api/fetchPosts";
import { Link } from "react-router-dom";
import { urlFor } from "../sanityClient";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p className="p-10 text-gray-500">Loading blog posts...</p>;
  }

  return (
    <section className="px-6 md:px-16 py-20 max-w-6xl mx-auto">

      {/* Header */}
      <h1 className="text-4xl font-bold mb-10">Blog</h1>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8">

        {posts.map((post) => (
          <Link
            to={`/blog/${post.slug.current}`}
            key={post.slug.current}
            className="border rounded-xl overflow-hidden hover:shadow-md transition bg-white"
          >

            {/* Image */}
            {post.mainImage && (
              <img
                src={urlFor(post.mainImage).width(600).url()}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
            )}

            {/* Content */}
            <div className="p-5">

              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                {post.category}
              </p>

              <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                {post.title}
              </h2>

              <p className="text-sm text-gray-600 line-clamp-3">
                {post.excerpt}
              </p>

            </div>
          </Link>
        ))}

      </div>
    </section>
  );
};

export default Blog;