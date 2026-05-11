import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <div className="p-6 rounded-2xl border bg-white hover:shadow-md transition">
      
      <p className="text-xs tracking-[0.2em] text-gray-500 mb-2">
        {post.category}
      </p>

      <h3 className="text-xl font-semibold text-[#2f3d2f] mb-3">
        {post.title}
      </h3>

      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
        {post.excerpt}
      </p>

      <div className="flex justify-between items-center text-xs text-gray-500">
        <span>{post.date}</span>

        <Link
          to={`/blog/${post.slug}`}
          className="text-green-700 font-medium hover:underline"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;