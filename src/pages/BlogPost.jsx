import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client, urlFor } from "../sanityClient";
import { PortableText } from "@portabletext/react";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const query = `
      *[_type == "post" && slug.current == $slug][0]{
        title,
        category,
        excerpt,
        content,
        mainImage,
        publishedAt
      }
    `;

    client.fetch(query, { slug }).then(setPost);
  }, [slug]);

  if (!post) return <p className="p-10">Loading...</p>;

  // ✅ FIX: Portable Text styling rules
  const components = {
    block: {
      h1: ({ children }) => (
        <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900">
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-900">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-xl font-semibold mt-5 mb-2 text-gray-900">
          {children}
        </h3>
      ),
      normal: ({ children }) => (
        <p className="text-gray-700 leading-7 mb-4">{children}</p>
      ),
    },

    list: {
      bullet: ({ children }) => (
        <ul className="list-disc pl-6 mb-4 text-gray-700">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal pl-6 mb-4 text-gray-700">{children}</ol>
      ),
    },
  };

  return (
    <article className="px-6 md:px-16 py-20 max-w-3xl mx-auto">

      {/* Category */}
      <p className="text-xs tracking-widest uppercase text-gray-500 mb-3">
        {post.category}
      </p>

      {/* Title */}
      <h1 className="text-4xl font-bold leading-tight mb-4 text-gray-900">
        {post.title}
      </h1>

      {/* Date */}
      <p className="text-sm text-gray-500 mb-6">
        {new Date(post.publishedAt).toDateString()}
      </p>

      {/* Featured Image */}
      {post.mainImage && (
        <img
          src={urlFor(post.mainImage).width(900).url()}
          alt={post.title}
          className="w-full rounded-xl mb-8"
        />
      )}

      {/* Excerpt */}
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        {post.excerpt}
      </p>

      {/* Content (FIXED) */}
      <div className="prose max-w-none">
        <PortableText value={post.content} components={components} />
      </div>

    </article>
  );
};

export default BlogPost;