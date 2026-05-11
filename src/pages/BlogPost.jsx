import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../data/blogData";

const BlogPost = () => {
  const { slug } = useParams();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <p className="p-10">Post not found</p>;
  }

  return (
    <article className="px-6 md:px-16 py-20 max-w-3xl mx-auto">

      <p className="text-sm text-gray-500 mb-3">{post.category}</p>

      <h1 className="text-4xl font-bold mb-4 text-[#2f3d2f]">
        {post.title}
      </h1>

      <p className="text-sm text-gray-500 mb-8">{post.date}</p>

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>{post.excerpt}</p>

        <p>
          (This is where full blog content will go. Later you can replace this
          with CMS content from Sanity or Strapi.)
        </p>
      </div>

    </article>
  );
};

export default BlogPost;