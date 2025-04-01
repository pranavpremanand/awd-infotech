import React from "react";
import WebsiteHeader from "../components/website/WebsiteHeader";
import PageBanner from "../components/website/PageBanner";
import SubHeading from "../components/SubHeading";
import aboutImg1 from "../assets/images/aboutus-img1.webp";
const TrustWorthySection = React.lazy(() =>
  import("../components/TrustWorthySection")
);
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const LeadForm = React.lazy(() => import("../components/LeadForm"));

const AboutUs = () => {
  return (
    <>
      <WebsiteHeader />
      <PageBanner title="About Us" />
      <section className="text-primary_text wrapper pt-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <div className="p-4 rounded-xl bg-white border h-full">
              <img
                loading="lazy"
                src={aboutImg1}
                width="600"
                height="600"
                className="object-cover aspect-square w-full h-full rounded-xl shadow-2xl"
                alt="About AWD Infotech"
              />
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5">
              <SubHeading heading="About Us" />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={aboutImg1}
                  className="object-cover h-full rounded-lg w-full"
                  alt="About AWD Infotech"
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                Transforming Innovative Concepts into Powerful Digital Solutions
              </h2>
              <p className="desc">
                At{" "}
                <span className="font-semibold text-primary">AWD Infotech</span>
                , we specialize in converting your most ambitious digital
                aspirations into high-performing technological realities. Our
                comprehensive approach combines strategic planning with
                technical excellence to deliver solutions that:
              </p>
              <ul className="desc mt-1 space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Enhance user engagement through intuitive interfaces and
                    seamless experiences
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Drive measurable business growth with data-driven
                    development strategies
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Future-proof your operations through scalable architecture
                    and forward-thinking design
                  </span>
                </li>
              </ul>
              <p className="desc mt-1">
                Whether you're a disruptive startup looking to make your market
                debut or an established enterprise seeking digital
                transformation, our cross-functional team of developers, UX
                specialists, and solution architects provides end-to-end support
                - from initial concept validation through deployment and
                iterative optimization. We pride ourselves on delivering not
                just functional products, but strategic assets that deliver
                long-term competitive advantage in an increasingly digital
                marketplace.
              </p>

              {/* AWD Meaning Section */}
              <div className="mt-8 w-full">
                <div className="bg-secondary/10 p-5 rounded-xl border border-secondary/20">
                  <h3 className="text-xl font-bold text-primary mb-4">
                    The Meaning Behind <span className="text-white bg-primary px-2 py-1 rounded">AWD</span>
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm space-y-2">
                      <h4 className="font-bold text-xl rounded-full bg-secondary w-[2rem] h-[2rem] flex justify-center items-center text-primary">A</h4>
                      <p className="font-semibold">AI & Automation</p>
                      <p className="text-sm mt-1">Representing Arvind, we specialize in intelligent automation solutions that transform business processes.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm space-y-2">
                      <h4 className="font-bold text-xl rounded-full bg-secondary w-[2rem] h-[2rem] flex justify-center items-center text-primary">W</h4>
                      <p className="font-semibold">Web3 & Workflow</p>
                      <p className="text-sm mt-1">For Wenyi, we build blockchain solutions and optimize digital workflows for peak efficiency.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm space-y-2">
                      <h4 className="font-bold text-xl rounded-full bg-secondary w-[2rem] h-[2rem] flex justify-center items-center text-primary">D</h4>
                      <p className="font-semibold">Data & Digital</p>
                      <p className="text-sm mt-1">Deepjyoti's domain, where we harness data power to drive complete digital transformation.</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm italic">
                    Our name reflects our founders' expertise and our commitment to comprehensive digital solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <TrustWorthySection />
      <Testimonials />
      <JoinHappyCustomers />
      <LeadForm />
      <WebsiteFooter />
    </>
  );
};

export default AboutUs;