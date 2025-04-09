import React, { lazy } from "react";
import gameDevBanner from "../../assets/videos/game-development.mp4";
import SubHeading from "../../components/SubHeading";
import { gameDevelopmentServices } from "../../constant";
import TrustWorthySection from "../../components/TrustWorthySection";
import gameDevAboutImg from "../../assets/images/landingpage/game-dev-about.webp";
import ReactPlayer from "react-player";
import { Link } from "react-scroll";

const LandingHeader = lazy(() => import("../../components/landingPages/LandingHeader"));
const LandingFooter = lazy(() => import("../../components/landingPages/LandingFooter"));
const ContactForm = lazy(() => import("../../components/landingPages/ContactForm"));
const Portfolio = lazy(() => import("../../components/Portfolio"));
const ConnectWithUs = lazy(() => import("../../components/ConnectWithUs"));
const Testimonials = lazy(() => import("../../components/Testimonials"));
const JoinHappyCustomers = lazy(() => import("../../components/JoinHappyCustomers"));
const WhyChooseUs = lazy(() => import("../../components/WhyChooseUs"));

const GameDevelopmentLanding = () => {
  return (
    <>
      <LandingHeader />
      <section id="banner" className="h-screen banner-video relative text-primary_text">
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-background/20 to-background/20"></div>
        <ReactPlayer
          url={gameDevBanner}
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
            Crafting Immersive <span className="text-primary font-bold block sm:inline">Gaming Experiences</span>
          </p>
          <h1 className="heading text-stroke-white !text-primary">
            Where Creativity Meets Cutting-Edge Technology
          </h1>
          <p className="sub-heading !font-normal">
            From concept to launch - we build games that captivate and engage players
          </p>
          <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className="secondary-btn !mt-4">
            Get Started Now
          </Link>
        </div>
      </section>

      <section id="about" className="text-primary_text wrapper pt-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div className="hidden lg:block h-full">
            <div className="p-4 rounded-xl bg-white border h-full">
              <img
                loading="lazy"
                src={gameDevAboutImg}
                className="object-cover h-full rounded-lg w-full"
                alt="game development"
              />
            </div>
          </div>
          <div className="flex h-full items-center lg:items-start flex-col gap-7">
            <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-start">
              <SubHeading heading="Game Development" />
              <div className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full">
                <div className="p-4 rounded-xl bg-white border h-full">
                  <img
                    loading="lazy"
                    src={gameDevAboutImg}
                    className="object-cover h-full rounded-lg w-full"
                    alt="game development"
                  />
                </div>
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                Next-Level Gaming Experiences Across All Platforms
              </h2>
              <p className="desc">
                We create immersive gaming experiences that captivate players and keep them coming back. 
                Our team of game developers, designers, and artists work together to bring your vision 
                to life with stunning visuals, engaging gameplay, and innovative mechanics. From mobile 
                games to AAA console titles, we have the expertise to deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="wrapper py-[5rem] flex flex-col gap-5 items-center">
        <SubHeading heading="Game Development Services" />
        <h2 className="heading-2 max-w-[60rem] mx-auto text-center">
          Comprehensive Game Development Solutions
        </h2>
        <div className="mt-5 grid sm:grid-cols-2 gap-6">
          {gameDevelopmentServices.map((service) => (
            <div className="bg-primary/5 shadow-inner shadow-primary/30 items-center rounded-lg p-5 flex text-center flex-col">
              <service.icon className="w-[5rem] h-[5rem] fill-primary" />
              <h6 className="text-xl font-medium mt-4">{service.title}</h6>
              <p className="desc mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <TrustWorthySection />
      <Portfolio page="game-development" />
      <WhyChooseUs />
      <ConnectWithUs />
      <Testimonials />
      <JoinHappyCustomers />
      <ContactForm />
      <LandingFooter />
    </>
  );
};

export default GameDevelopmentLanding;