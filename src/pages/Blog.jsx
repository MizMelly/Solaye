import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api/fetchPosts";
import { Link } from "react-router-dom";
import { urlFor } from "../sanityClient";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);

  return (
    <section className="px-6 md:px-16 py-20 max-w-6xl mx-auto">

      <h1 className="text-4xl font-bold mb-10">Blog</h1>

      <div className="grid md:grid-cols-3 gap-8">

        {posts.map((post) => (
          <Link
            key={post.slug.current}
            to={`/blog/${post.slug.current}`}
            className="rounded-xl overflow-hidden border hover:shadow-md transition bg-white"
          >

            {post.mainImage && (
              <img
                src={urlFor(post.mainImage).width(600).url()}
                className="h-48 w-full object-cover"
                alt={post.title}
              />
            )}

            <div className="p-5">

              <p className="text-xs uppercase text-gray-400 mb-2">
                {post.category}
              </p>

              <h2 className="text-lg font-semibold mb-2">
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