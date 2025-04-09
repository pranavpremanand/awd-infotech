import React, { lazy } from "react";
import rpaBanner from "../../assets/videos/rpa-development.mp4";
import SubHeading from "../../components/SubHeading";
import { rpaServices } from "../../constant";
import TrustWorthySection from "../../components/TrustWorthySection";
import rpaAboutImg from "../../assets/images/landingpage/rpa-about.webp";
import ReactPlayer from "react-player";
import { Link } from "react-scroll";

const LandingHeader = lazy(() =>
  import("../../components/landingPages/LandingHeader")
);
const LandingFooter = lazy(() =>
  import("../../components/landingPages/LandingFooter")
);
const ContactForm = lazy(() =>
  import("../../components/landingPages/ContactForm")
);
const ConnectWithUs = lazy(() => import("../../components/ConnectWithUs"));
const Testimonials = lazy(() => import("../../components/Testimonials"));
const JoinHappyCustomers = lazy(() =>
  import("../../components/JoinHappyCustomers")
);
const WhyChooseUs = lazy(() => import("../../components/WhyChooseUs"));

const RPALanding = () => {
  return (
    <>
      <LandingHeader />
      <section
        id="banner"
        className="h-screen banner-video relative text-primary_text"
      >
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-background/30 to-background/30"></div>
        <ReactPlayer
          url={rpaBanner}
          playing
          muted
          loop
          width="100%"
          height="100%"
          pip={false}
          playsinline={true}
        />
        <div className="wrapper text-center flex flex-col gap-4 text-white justify-center items-center absolute inset-0 h-full w-full z-10">
          <p className="sub-heading !font-normal">
            Transforming Business with{" "}
            <span className="text-primary font-bold block sm:inline">
              Intelligent Automation
            </span>
          </p>
          <h1 className="heading text-stroke-white !text-primary">
            Automate Repetitive Tasks, Unleash Human Potential
          </h1>
          <p className="sub-heading !font-normal">
            Our RPA solutions streamline operations, reduce costs, and eliminate
            human error
          </p>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="secondary-btn !mt-4"
          >
            Automate Now
          </Link>
        </div>
      </section>

      <section id="about" className="text-primary_text wrapper pt-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div className="hidden lg:block h-full">
            <div className="p-4 rounded-xl bg-white border h-full">
              <img
                loading="lazy"
                src={rpaAboutImg}
                className="object-cover h-full rounded-lg w-full"
                alt="RPA solutions"
              />
            </div>
          </div>
          <div className="flex h-full items-center lg:items-start flex-col gap-7">
            <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-start">
              <SubHeading heading="Robotic Process Automation" />
              <div className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full">
                <div className="p-4 rounded-xl bg-white border h-full">
                  <img
                    loading="lazy"
                    src={rpaAboutImg}
                    className="object-cover h-full rounded-lg w-full"
                    alt="RPA solutions"
                  />
                </div>
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                Intelligent Automation for Business Efficiency
              </h2>
              <p className="desc">
                RPA technology allows businesses to automate routine, rule-based
                tasks with software robots. Our RPA solutions help you reduce
                operational costs, improve accuracy, and free up your employees
                to focus on higher-value work. We implement automation across
                finance, HR, customer service, and other business functions to
                drive digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="wrapper py-[5rem] flex flex-col gap-5 items-center"
      >
        <SubHeading heading="RPA Services" />
        <h2 className="heading-2 max-w-[60rem] mx-auto text-center">
          End-to-End Automation Solutions
        </h2>
        <div className="mt-5 grid sm:grid-cols-2 gap-6">
          {rpaServices.map((service) => (
            <div className="bg-primary/5 shadow-inner shadow-primary/30 items-center rounded-lg p-5 flex text-center flex-col">
              <service.icon className="w-[5rem] h-[5rem] fill-primary" />
              <h6 className="text-xl font-medium mt-4">{service.title}</h6>
              <p className="desc mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <TrustWorthySection />
      <WhyChooseUs />
      <ConnectWithUs />
      <Testimonials />
      <JoinHappyCustomers />
      <ContactForm />
      <LandingFooter />
    </>
  );
};

export default RPALanding;
