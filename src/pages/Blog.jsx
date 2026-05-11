import React from "react";
import { blogPosts } from "../data/blogData";
import BlogCard from "../components/BlogCard";

const Blog = () => {
  return (
    <section className="px-6 md:px-16 py-20 bg-[#f7f1e3]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#2f3d2f] mb-6">
          Blog & Resources
        </h1>

        <p className="text-gray-600 max-w-2xl mb-12">
          Maternal health insights, wellness education, and community stories
          from Solayo Africa.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;