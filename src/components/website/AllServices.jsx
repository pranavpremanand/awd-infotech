import React, { useState } from "react";
import { allServices } from "../../constant";
import SubHeading from "../SubHeading";
import Drawer from "react-modern-drawer";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { createUrlParam } from "../../utils/helper";
import { servicesBlogs } from "../../blogs";

const AllServices = ({ length }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(allServices[0]);
  const [blogs, setBlogs] = useState(
    servicesBlogs.filter((item) => item.serviceId === 1)
  );

  const services = length ? allServices.slice(0, length) : allServices;

  const handleSelectServiceToShowDetail = (service) => {
    setSelectedService(service);
    setIsOpen(true);
    const blogsList =
      servicesBlogs.filter((item) => item.serviceId === service.id) || [];
    setBlogs(blogsList);
  };

  return (
    <section className="bg-secondary/5 ">
      <div className="wrapper py-[5rem] flex flex-col gap-5 items-center">
        <SubHeading heading="Our Services" />
        <h2
          data-aos="fade-up"
          className="heading-2 max-w-[60rem] mx-auto text-center"
        >
          What We Offer
        </h2>
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              data-aos="fade-up"
              key={service.id}
              className="bg-primary/20 rounded-lg p-5 flex text-center flex-col justify-between"
            >
              <div className="flex flex-col items-center">
                <service.icon className="w-[3rem] h-[3rem] fill-primary" />
                <h6 className="text-xl font-medium mt-2">{service.title}</h6>
                <p className="desc mt-2">{service.description}</p>
              </div>
              <button
                onClick={() => handleSelectServiceToShowDetail(service)}
                className="primary-btn mt-5 w-fit mx-auto"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
        {length && (
          <div className="flex gap-5 mt-3" data-aos="fade-up">
            <Link to="/services" className="secondary-btn mt-5 w-fit mx-auto">
              View All Services
            </Link>
          </div>
        )}
        <Drawer
          open={isOpen}
          onClose={() => setIsOpen(false)}
          direction="top"
          className="p-4 z-10 w-screen"
          lockBackgroundScroll
          size="90vh"
        >
          <div className="mb-3 flex items-center justify-end pr-[.7rem] py-[.4rem]">
            <button
              onClick={() => setIsOpen(false)}
              className="text-primary_text text-[2.2rem]"
            >
              <X size={30} />
            </button>
          </div>
          <div className="wrapper flex flex-col gap-6 tex-white pb-[2rem]">
            <h1 className="heading-2">{selectedService.detailHeading}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: selectedService.detailContent,
              }}
            ></div>

            {/* Blog Section */}
            {blogs && blogs.length > 0 && (
              <div className="mt-10">
                <h2 className="text-2xl font-bold mb-6">Related Insights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blogs.map((blog) => (
                    <div
                      key={blog.id}
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="p-6">
                        <Link
                          to={`/blog/${createUrlParam(blog.title)}`}
                          className="text-xl font-bold text-gray-800 hover:text-secondary transition-colors mb-3"
                        >
                          {blog.title}
                        </Link>
                        <div
                          className="prose prose-sm text-gray-600 line-clamp-3 mb-4 mt-1"
                          dangerouslySetInnerHTML={{
                            __html: blog.html.match(
                              /<p[^>]*>([\s\S]*?)<\/p>/
                            )[0],
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
            )}
          </div>
        </Drawer>
      </div>
    </section>
  );
};

export default AllServices;
