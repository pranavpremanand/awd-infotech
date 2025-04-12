import React from "react";
import { industriesCompanyServe } from "../constant";
import { industryBlogs } from "../blogs";
import { Link } from "react-router-dom";
import { createUrlParam } from "../utils/helper";

const WebsiteHeader = React.lazy(() =>
  import("../components/website/WebsiteHeader")
);
const PageBanner = React.lazy(() => import("../components/website/PageBanner"));
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);

const Industries = () => {
  return (
    <>
      <WebsiteHeader />
      <PageBanner title="Industries We Serve" showContactUsBtn={true} />
      <section className="py-14">
        <div className="wrapper">
          <div className="text-center mb-12">
            <h2 data-aos="fade-up" className="heading-2_1 mb-3">
              Tailored Solutions for Diverse Industries
            </h2>
            <p data-aos="fade-up" className="desc max-w-2xl mx-auto">
              We deliver specialized technology expertise to transform your
              sector with innovative, industry-specific solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industriesCompanyServe.map((item) => (
              <div
                key={item.id}
                className="md:last:col-span-2 md:last:w-1/2 mx-auto"
                data-aos="fade-up"
              >
                <div className="w-full grid sm:grid-cols-[45%,1fr] items-center gap-4 p-4 border border-secondary rounded-xl bg-secondary/10">
                  <img
                    src={item.img}
                    className="aspect-[4/3] h-full object-cover rounded-xl border border-secondary"
                    alt={item.title}
                    loading="lazy"
                  />
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <p className="desc">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="py-14 bg-gray-50">
        <div className="wrapper">
          <div className="text-center mb-12">
            <h2 data-aos="fade-up" className="heading-2_1 mb-3">
              Industry Insights & Trends
            </h2>
            <p data-aos="fade-up" className="desc max-w-2xl mx-auto">
              Discover how AI and digital transformation are revolutionizing
              various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                data-aos="fade-up"
              >
                <img
                  src={blog.image}
                  className="w-full h-48 object-cover"
                  alt={blog.title}
                  loading="lazy"
                />
                <div className="p-6">
                  <Link
                    to={`/blog/${createUrlParam(blog.title)}`}
                    className="text-xl font-bold text-gray-800 mb-3 hover:text-secondary transition-colors"
                  >
                    {blog.title}
                  </Link>
                  <div
                    className="prose prose-sm text-gray-600 line-clamp-3 mb-4 mt-1"
                    dangerouslySetInnerHTML={{
                      __html: blog.html.match(/<p[^>]*>([\s\S]*?)<\/p>/)[0],
                    }}
                  />
                  <Link
                    to={`/blog/${createUrlParam(blog.title)}`}
                    className="text-primary font-medium hover:text-secondary transition-colors"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <JoinHappyCustomers />
      <WebsiteFooter />
    </>
  );
};

export default Industries;
