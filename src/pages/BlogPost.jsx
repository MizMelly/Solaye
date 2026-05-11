import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { client } from "../sanityClient";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../sanityClient";
import { ArrowLeft, Clock3 } from "lucide-react";

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

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading article...
      </div>
    );
  }

  return (
    <article className="bg-[#fcfcf9] overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative border-b border-gray-200">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 py-10 md:py-16">

          {/* Back Button */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition mb-10"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          {/* Top Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div className="max-w-2xl">

              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#6f8b6b] font-medium">
                {post.category}
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-gray-900">
                {post.title}
              </h1>

              <div className="flex items-center gap-4 mt-8 text-sm text-gray-500">

                <span>
                  {new Date(post.publishedAt).toDateString()}
                </span>

                <span className="w-1 h-1 rounded-full bg-gray-400"></span>

                <span className="flex items-center gap-2">
                  <Clock3 size={15} />
                  5 min read
                </span>

              </div>

              {/* EXCERPT */}
              {post.excerpt && (
                <p className="mt-8 text-lg md:text-xl leading-9 text-gray-600 max-w-xl">
                  {post.excerpt}
                </p>
              )}

            </div>

            {/* RIGHT IMAGE */}
            {post.mainImage?.asset && (
              <div className="relative">

                <img
                  src={urlFor(post.mainImage).width(1800).url()}
                  alt={post.title}
                  className="
                    w-full
                    h-75
                    sm:h-105
                    lg:h-130
                    object-cover
                    rounded-[32px]
                    shadow-xl
                  "
                />

              </div>
            )}

          </div>

        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="relative">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 py-14 md:py-20">

          <div className="grid lg:grid-cols-[220px_minmax(0,1fr)] gap-16">

            {/* LEFT SIDEBAR */}
            <aside className="hidden lg:block">

              <div className="sticky top-28">

                <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6">
                  Article
                </p>

                <div className="space-y-5 text-sm text-gray-500">

                  <div>
                    <p className="text-gray-400 mb-1">Category</p>
                    <p className="text-gray-800 font-medium">
                      {post.category}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400 mb-1">Published</p>
                    <p className="text-gray-800 font-medium">
                      {new Date(post.publishedAt).toDateString()}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400 mb-1">Reading Time</p>
                    <p className="text-gray-800 font-medium">
                      5 minutes
                    </p>
                  </div>

                </div>

              </div>

            </aside>

            {/* MAIN CONTENT */}
            <div className="min-w-0">

              <div
                className="
                  prose
                  prose-lg
                  md:prose-xl
                  max-w-none

                  prose-headings:font-semibold
                  prose-headings:text-gray-900

                  prose-h2:text-3xl
                  prose-h2:mt-16
                  prose-h2:mb-6

                  prose-h3:text-2xl
                  prose-h3:mt-12
                  prose-h3:mb-4

                  prose-p:text-gray-700
                  prose-p:leading-9

                  prose-li:text-gray-700
                  prose-li:leading-9

                  prose-strong:text-gray-900

                  prose-a:text-[#3f6b4f]
                  prose-a:no-underline hover:prose-a:underline

                  prose-blockquote:border-l-[#6f8b6b]
                  prose-blockquote:text-gray-700

                  prose-img:rounded-3xl
                  prose-img:shadow-lg
                "
              >
                <PortableText value={post.content} />
              </div>

              {/* AUTHOR BOX */}
              <div className="mt-20 border-t border-gray-200 pt-10">

                <div className="bg-[#f7f3ed] rounded-[28px] p-8 md:p-10">

                  <p className="text-xs uppercase tracking-[0.3em] text-[#6f8b6b] mb-4">
                    About Solayo Africa
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Supporting maternal health across Africa.
                  </h3>

                  <p className="text-gray-600 leading-8 max-w-3xl">
                    Solayo Africa provides accessible maternal healthcare,
                    wellness products, and community support for women from
                    pregnancy to postpartum through digital innovation,
                    education, and grassroots outreach.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </article>
  );
};

export default BlogPost;