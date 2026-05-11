import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api/fetchPosts";
import { Link } from "react-router-dom";
import { urlFor } from "../sanityClient";

const BlogHighlights = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);

  if (!posts.length) return null;

  const featured = posts[0];
  const latest = posts.slice(1, 5);

  return (
    <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto">

      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-10">Latest Insights</h2>

      <div className="grid md:grid-cols-3 gap-8">

        {/* 🔥 FEATURED POST */}
        {featured && (
          <Link
            to={`/blog/${featured.slug.current}`}
            className="md:col-span-2 rounded-2xl overflow-hidden shadow-md bg-white"
          >
            {featured.mainImage && (
              <img
                src={urlFor(featured.mainImage).width(900).url()}
                className="h-80 w-full object-cover"
                alt={featured.title}
              />
            )}

            <div className="p-6">
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                {featured.category}
              </p>

              <h3 className="text-2xl font-bold mb-3">
                {featured.title}
              </h3>

              <p className="text-gray-600">
                {featured.excerpt}
              </p>
            </div>
          </Link>
        )}

        {/* 🟢 SIDE POSTS */}
        <div className="flex flex-col gap-6">

          {latest.map((post) => (
            <Link
              key={post.slug.current}
              to={`/blog/${post.slug.current}`}
              className="flex gap-4 items-start bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              {post.mainImage && (
                <img
                  src={urlFor(post.mainImage).width(200).url()}
                  className="w-20 h-20 object-cover rounded-lg"
                  alt={post.title}
                />
              )}

              <div>
                <p className="text-xs text-gray-400 uppercase">
                  {post.category}
                </p>

                <h4 className="font-semibold text-sm leading-snug">
                  {post.title}
                </h4>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
};

export default BlogHighlights;