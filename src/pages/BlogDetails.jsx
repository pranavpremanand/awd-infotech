import React from "react";
import { useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaShareAlt,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { industriesBlogs, servicesBlogs } from "../blogs";
import { createUrlParam } from "../utils/helper";
import { allServices } from "../constant";

const WebsiteHeader = React.lazy(() =>
  import("../components/website/WebsiteHeader")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);

const BlogDetails = () => {
  const { title } = useParams();
  let blog = industriesBlogs.find(
    (item) => createUrlParam(item.title) === title
  );

  if (blog === undefined) {
    blog = servicesBlogs.find((item) => createUrlParam(item.title) === title);
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Blog post not found</p>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: `Check out this blog post: ${blog.title}`,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      alert("Share functionality not available in your browser");
    }
  };

  return (
    <>
      <WebsiteHeader />
      <section className="pb-14 pt-[7rem] md:pt-[8rem]">
        <div className="wrapper">
          <div className="">
            {/* Blog Featured Image */}
            <div className="max-w-4xl mx-auto mb-8 rounded-xl overflow-hidden shadow-md">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-auto object-cover rounded-xl"
                loading="lazy"
              />
            </div>

            {/* Blog Content */}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.html }}
            />

            {/* Blog Actions */}
            <div className="mt-10 flex flex-wrap justify-between items-center gap-4 border-t pt-6">
              {/* Back Button */}
              <a
                href="/industries"
                className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
              >
                <FaArrowLeft className="mr-2" />
                Back to Industries
              </a>

              {/* Share Button */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleShare}
                  className="flex items-center text-gray-600 hover:text-primary transition-colors"
                  aria-label="Share this post"
                >
                  <FaShareAlt className="mr-1" />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Social Sharing (Alternative) */}
            <div className="mt-8 pt-6 border-t">
              <h3 className="text-lg font-medium mb-3">Share this post:</h3>
              <div className="flex space-x-4">
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    window.location.href
                  )}&text=${encodeURIComponent(blog.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                    window.location.href
                  )}&title=${encodeURIComponent(blog.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A66C2] hover:text-[#0a66c2c4] transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    window.location.href
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1877F2] hover:text-[#1876f2b2] transition-colors"
                  aria-label="Share on Facebook"
                >
                  <FaFacebook size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WebsiteFooter />
    </>
  );
};

export default BlogDetails;
