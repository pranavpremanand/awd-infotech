import React, { lazy } from "react";
import nlpBanner from "../../assets/videos/nlp-development.mp4";
import SubHeading from "../../components/SubHeading";
import { nlpServices } from "../../constant";
import TrustWorthySection from "../../components/TrustWorthySection";
import nlpAboutImg from "../../assets/images/landingpage/nlp-about.webp";
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

const NLPLanding = () => {
  return (
    <>
      <LandingHeader />
      <section
        id="banner"
        className="h-screen banner-video relative text-primary_text"
      >
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-black/30 to-black/30"></div>
        <ReactPlayer
          url={nlpBanner}
          playing
          muted
          loop
          width="100%"
          height="100%"
          pip={false}
          playsinline={true}
        />
        <div className="wrapper text-center flex flex-col gap-4 text-white justify-center items-center absolute inset-0 h-full w-full z-10">
          <p className="sub-heading !font-normal !text-white">
            Understand and Generate{" "}
            <span className="text-white font-bold block sm:inline">
              Human Language
            </span>
          </p>
          <h1 className="heading text-stroke !text-white">
            Bridge the Gap Between Humans and Machines
          </h1>
          <p className="sub-heading !font-normal !text-white">
            Advanced NLP solutions that analyze, understand, and generate human
            language
          </p>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="secondary-btn !mt-4"
          >
            Explore NLP Solutions
          </Link>
        </div>
      </section>

      <section id="about" className="text-primary_text wrapper pt-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div className="hidden lg:block h-full">
            <div className="p-4 rounded-xl bg-white border h-full">
              <img
                loading="lazy"
                src={nlpAboutImg}
                className="object-cover h-full rounded-lg w-full"
                alt="NLP solutions"
              />
            </div>
          </div>
          <div className="flex h-full items-center lg:items-start flex-col gap-7">
            <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-start">
              <SubHeading heading="Natural Language Processing" />
              <div className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full">
                <div className="p-4 rounded-xl bg-white border h-full">
                  <img
                    loading="lazy"
                    src={nlpAboutImg}
                    className="object-cover h-full rounded-lg w-full"
                    alt="NLP solutions"
                  />
                </div>
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                Human-Like Language Understanding at Scale
              </h2>
              <p className="desc">
                NLP enables computers to understand, interpret, and generate
                human language. Our NLP solutions help businesses automate text
                analysis, extract insights from unstructured data, and create
                intelligent conversational interfaces. From sentiment analysis
                to document summarization, we implement cutting-edge NLP
                techniques to solve real-world business challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="wrapper py-[5rem] flex flex-col gap-5 items-center"
      >
        <SubHeading heading="NLP Services" />
        <h2 className="heading-2 max-w-[60rem] mx-auto text-center">
          Comprehensive Natural Language Processing Solutions
        </h2>
        <div className="mt-5 grid sm:grid-cols-2 gap-6">
          {nlpServices.map((service) => (
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

export default NLPLanding;
