import React, { lazy } from "react";
import agenticAIBanner from "../../assets/videos/agentic-ai.mp4";
import SubHeading from "../../components/SubHeading";
import { agenticAIServices } from "../../constant";
import TrustWorthySection from "../../components/TrustWorthySection";
import agenticAIAboutImg from "../../assets/images/landingpage/agentic-ai-about.webp";
import ReactPlayer from "react-player";
import { Link } from "react-scroll";

const LandingHeader = lazy(() => import("../../components/landingPages/LandingHeader"));
const LandingFooter = lazy(() => import("../../components/landingPages/LandingFooter"));
const ContactForm = lazy(() => import("../../components/landingPages/ContactForm"));
const ConnectWithUs = lazy(() => import("../../components/ConnectWithUs"));
const Testimonials = lazy(() => import("../../components/Testimonials"));
const JoinHappyCustomers = lazy(() => import("../../components/JoinHappyCustomers"));
const WhyChooseUs = lazy(() => import("../../components/WhyChooseUs"));

const AgenticAILanding = () => {
  return (
    <>
      <LandingHeader />
      <section id="banner" className="h-screen banner-video relative text-white">
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-black/20 to-black/20"></div>
        <ReactPlayer
          url={agenticAIBanner}
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
            Next-Generation <span className="text-white font-bold block sm:inline">Autonomous AI Agents</span>
          </p>
          <h1 className="heading text-stroke !text-white">
            AI That Thinks and Acts Independently
          </h1>
          <p className="sub-heading !font-normal !text-white">
            Build AI systems that can perceive, reason, and take action autonomously
          </p>
          <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className="secondary-btn !mt-4">
            Explore Agentic AI
          </Link>
        </div>
      </section>

      <section id="about" className="text-primary_text wrapper pt-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div className="hidden lg:block h-full">
            <div className="p-4 rounded-xl bg-white border h-full">
              <img
                loading="lazy"
                src={agenticAIAboutImg}
                className="object-cover h-full rounded-lg w-full"
                alt="Agentic AI"
              />
            </div>
          </div>
          <div className="flex h-full items-center lg:items-start flex-col gap-7">
            <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-start">
              <SubHeading heading="Agentic AI Solutions" />
              <div className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full">
                <div className="p-4 rounded-xl bg-white border h-full">
                  <img
                    loading="lazy"
                    src={agenticAIAboutImg}
                    className="object-cover h-full rounded-lg w-full"
                    alt="Agentic AI"
                  />
                </div>
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                Autonomous AI Systems for Complex Problem Solving
              </h2>
              <p className="desc">
                Agentic AI represents the next evolution of artificial intelligence - systems that can 
                independently perceive, reason, plan, and act to achieve complex goals. Our agentic AI 
                solutions combine advanced machine learning with cognitive architectures to create 
                intelligent agents that can operate autonomously in dynamic environments, making 
                decisions and taking actions to accomplish objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="wrapper py-[5rem] flex flex-col gap-5 items-center">
        <SubHeading heading="Agentic AI Services" />
        <h2 className="heading-2 max-w-[60rem] mx-auto text-center">
          Cutting-Edge Autonomous AI Solutions
        </h2>
        <div className="mt-5 grid sm:grid-cols-2 gap-6">
          {agenticAIServices.map((service) => (
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

export default AgenticAILanding;