import { lazy } from "react";
import { FiArrowRight, FiTrendingUp, FiLayers } from "react-icons/fi";
import { FaIndustry, FaCode } from "react-icons/fa";
import WebsiteFooter from "../components/website/WebsiteFooter";
import { industryBlogs, serviceBlogs } from "../blogs";
import { Link } from "react-router-dom";
import { createUrlParam } from "../utils/helper";

const WebsiteHeader = lazy(() => import("../components/website/WebsiteHeader"));
const PageBanner = lazy(() => import("../components/website/PageBanner"));

const Blogs = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <WebsiteHeader />

      {/* Futuristic Page Banner */}
      <div className="relative overflow-hidden">
        <PageBanner
          title="Blogs"
          className="relative z-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(99,102,241,0.05) 0%, rgba(99,102,241,0) 50%)",
          }}
        />
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9InJnYmEoMCwwLDAsMC4yKSIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+Cjwvc3ZnPg==')]"></div>
          </div>
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-purple-500/5 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-500/5 to-transparent"></div>
        </div>
      </div>

      <div className="py-[4rem] px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Service Blogs Section */}
          <div className="space-y-10">
            <div className="flex items-end justify-between">
              <div data-aos="fade-up" className="flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-purple-100 text-primary">
                  <FiLayers className="text-2xl" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-primary">
                  Service Insights
                </h2>
              </div>
              <div className="h-0.5 flex-1 bg-gradient-to-r from-purple-100 via-indigo-100 to-transparent ml-6 mb-3"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceBlogs.map((blog) => (
                <div
                  data-aos="fade-up"
                  key={blog.id}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-indigo-300 transition-all duration-500 hover:shadow-xl hover:shadow-purple-100/50"
                >
                  <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <Link
                    to={`/blog/${createUrlParam(blog.title)}`}
                    className="block"
                  >
                    <div className="relative overflow-hidden rounded-t-2xl">
                      <p className="absolute right-3 top-3 z-[1] px-3 py-1 bg-white text-purple-600 rounded-full text-xs font-medium tracking-wide shadow-sm flex items-center">
                        <FaCode className="mr-1" /> {blog.service}
                      </p>
                      <img
                        src={blog.image}
                        alt={blog.title}
                        loading="lazy"
                        className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>
                  </Link>

                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                      <span className="text-xs text-gray-500">{"Latest"}</span>
                    </div>
                    <Link
                      to={`/blog/${createUrlParam(blog.title)}`}
                      className="text-xl font-semibold text-gray-800 hover:text-indigo-600 transition-colors"
                    >
                      {blog.title}
                    </Link>
                    <p className="mt-2 text-gray-600 line-clamp-2">
                      {"Read more about this exciting topic..."}
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <Link
                        to={`/blog/${createUrlParam(blog.title)}`}
                        className="inline-flex items-center text-purple-600 hover:text-purple-800 group transition-colors font-medium"
                      >
                        Read more
                        <FiArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Blogs Section */}
          <div className="space-y-10">
            <div className="flex items-end justify-between">
              <div data-aos="fade-up" className="flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-blue-100 text-blue-600">
                  <FaIndustry className="text-2xl" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                  Industry Trends
                </h2>
              </div>
              <div className="h-0.5 flex-1 bg-gradient-to-r from-blue-100 via-cyan-100 to-transparent ml-6 mb-3"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {industryBlogs.map((blog) => (
                <div
                  data-aos="fade-up"
                  key={blog.id}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-blue-300 transition-all duration-500 hover:shadow-xl hover:shadow-blue-100/50"
                >
                  <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <Link
                    to={`/blog/${createUrlParam(blog.title)}`}
                    className="block"
                  >
                    <div className="relative overflow-hidden rounded-t-2xl">
                      <p className="absolute right-3 top-3 z-[1] px-3 py-1 bg-white text-blue-600 rounded-full text-xs font-medium tracking-wide shadow-sm flex items-center">
                        <FiTrendingUp className="mr-1" /> Trending
                      </p>
                      <img
                        src={blog.image}
                        alt={blog.title}
                        loading="lazy"
                        className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>
                  </Link>

                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                      <span className="text-xs text-gray-500">
                        {"Trending"}
                      </span>
                    </div>
                    <Link
                      to={`/blog/${createUrlParam(blog.title)}`}
                      className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors"
                    >
                      {blog.title}
                    </Link>
                    <p className="mt-2 text-gray-600 line-clamp-2">
                      {"Explore this industry trend in depth..."}
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <Link
                        to={`/blog/${createUrlParam(blog.title)}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 group transition-colors font-medium"
                      >
                        Read more
                        <FiArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <WebsiteFooter />
    </div>
  );
};

export default Blogs;
