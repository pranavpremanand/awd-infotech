import React from "react";
import bannerImg from "../assets/images/banner.webp";
import banner from "../assets/videos/banner.mp4";
import aboutImg from "../assets/images/aboutus-img3.webp";
import { Link } from "react-router-dom";
import SubHeading from "../components/SubHeading";
import { ReactComponent as Icon1 } from "../assets/svgs/services/Web Development.svg";
import { ReactComponent as Icon2 } from "../assets/svgs/services/IT solutions.svg";
import { ReactComponent as Icon3 } from "../assets/svgs/services/E-Commerce Development.svg";
import WorkProcess from "../components/WorkProcess";
import ReactPlayer from "react-player";

const WebsiteHeader = React.lazy(() =>
  import("../components/website/WebsiteHeader")
);
const TrustWorthySection = React.lazy(() =>
  import("../components/TrustWorthySection")
);
const Portfolio = React.lazy(() => import("../components/Portfolio"));
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);
const AllServices = React.lazy(() =>
  import("../components/website/AllServices")
);
const OurValue = React.lazy(() => import("../components/website/OurValue"));
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const LeadForm = React.lazy(() => import("../components/LeadForm"));

const Home = () => {
  return (
    <>
      <WebsiteHeader />
      <section className="h-screen banner-video relative text-primary_text">
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-background/60 to-background/60"></div>
        {/* <img
          loading="lazy"
          src={bannerImg}
          srcset={`${bannerImg} 400w, 
          ${bannerImg} 800w, 
          ${bannerImg} 1200w`}
          sizes="(max-width: 600px) 200px, 
         (max-width: 1200px) 800px, 
         1200px"
          class="w-full h-full absolute -z-10 object-cover object-top"
          alt=""
        /> */}
        <ReactPlayer
          url={banner}
          playing
          muted
          loop
          width="100%"
          height="100%"
          pip={false}
          playsinline={true}
          config={{
            file: {
              attributes: {
                controlsList: "nodownload noplaybackrate",
                disablePictureInPicture: true,
              },
            },
          }}
        />
        <div
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-4 justify-center items-center absolute inset-0 h-full w-full z-10"
        >
          <p className="sub-heading !font-normal">
            Welcome to{" "}
            <span className="text-primary font-bold block sm:inline">
              AWD Infotech
            </span>
          </p>
          <h1 className="heading capitalize">
            Transforming Ideas into <br /> Impactful Digital Solutions
          </h1>
          <p className="sub-heading !font-normal">
            Your Digital Journey Starts Here
          </p>
        </div>
      </section>
      <div
        data-aos="fade-up"
        className="md:-mt-[7rem] py-[2rem] relative z-10 max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-5"
      >
        <div className="bg-primary rounded-lg text-white p-5">
          <div className="flex items-center gap-3 mb-4">
            <Icon1
              width="50"
              height="50"
              className="w-[4rem] h-[4rem] fill-secondary"
            />
            <p className="text-lg leading-tight font-medium">Web Development</p>
          </div>
          <p className="desc">
            We create dynamic and scalable web applications that streamline your
            business operations and enhance user experiences.
          </p>
        </div>
        <div className="bg-primary rounded-lg text-white p-5">
          <div className="flex items-center gap-3 mb-4">
            <Icon2
              width="50"
              height="50"
              className="w-[4rem] h-[4rem] fill-secondary"
            />
            <p className="text-lg leading-tight font-medium">
              AI Chatbot Solutions
            </p>
          </div>
          <p className="desc">
            Our chatbot technology leverages cutting-edge AI to provide natural,
            human-like conversations, 24/7 customer support, and intelligent
            automation for your business needs.
          </p>
        </div>
        <div className="bg-primary rounded-lg text-white p-5">
          <div className="flex items-center gap-3 mb-4">
            <Icon3
              width="50"
              height="50"
              className="w-[4rem] h-[4rem] fill-secondary"
            />
            <p className="text-lg leading-tight font-medium">
              E-Commerce Development
            </p>
          </div>
          <p className="desc">
            We design custom e-commerce solutions tailored to businesses of all
            sizes, helping you maximize sales and provide a seamless shopping
            experience.
          </p>
        </div>
      </div>
      <section className="">
        <div className="wrapper py-[3rem]">
          <div className="grid lg:grid-cols-2 gap-10 mt-7">
            <div data-aos="fade-up" className="hidden lg:block h-full">
              <div className="p-4 rounded-xl bg-white border h-full">
                <img
                  loading="lazy"
                  src={aboutImg}
                  width="600"
                  height="600"
                  className="object-cover h-full rounded-xl shadow-2xl"
                  alt=""
                />
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="flex h-full items-center lg:items-start flex-col gap-7"
            >
              <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-start">
                <SubHeading heading="About Us" />
                <div
                  data-aos="fade-up"
                  className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
                >
                  <div className="p-4 rounded-xl bg-white border h-full">
                    <img
                      loading="lazy"
                      src={aboutImg}
                      width="200"
                      height="200"
                      className="object-cover h-full rounded-lg w-full"
                      alt=""
                    />
                  </div>
                </div>
                <h2 className="heading-2 max-w-[60rem]">
                  Transforming Visions into Reality
                </h2>
                <p className="desc">
                  At{" "}
                  <span className="font-medium text-primary">AWD Infotech</span>
                  , we’re committed to driving innovation and delivering
                  state-of-the-art technology solutions tailored to your
                  business needs. Whether you’re looking for blockchain
                  development, app design, or AI-driven systems, we offer a
                  comprehensive range of services that help companies thrive in
                  a fast-evolving digital landscape.
                  <br />
                  Take a look at our offerings below to discover how we can
                  collaborate to elevate your business to new heights.
                </p>
              </div>
              <div className="w-fit mt-4 justify-center lg:justify-start">
                <Link to="/about-us" className="secondary-btn">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AllServices length={3} />
      <TrustWorthySection />
      <WorkProcess />
      <OurValue />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <JoinHappyCustomers />
      <LeadForm />
      <WebsiteFooter />
    </>
  );
};

export default Home;
