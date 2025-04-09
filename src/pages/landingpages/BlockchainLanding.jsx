import React, { lazy } from "react";
import blockchainBanner from "../../assets/videos/blockchain-development.mp4";
import SubHeading from "../../components/SubHeading";
import { blockchainDevelopmentServices } from "../../constant";
import TrustWorthySection from "../../components/TrustWorthySection";
import blockchainDevAboutImg from "../../assets/images/landingpage/blockchain-dev-about.webp";
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

const BlockchainLanding = () => {
  return (
    <>
      <LandingHeader />
      <section
        id="banner"
        className="h-screen banner-video relative text-primary_text"
      >
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-background/40 to-background/40"></div>
        <ReactPlayer
          url={blockchainBanner}
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
            Your Trusted Partner in{" "}
            <span className="text-primary font-bold block sm:inline">
              Blockchain Solutions
            </span>
          </p>
          <h1 className="heading text-stroke-white !text-primary">
            Decentralized Solutions for a Trustless Future
          </h1>
          <p className="sub-heading !font-normal">
            Building secure, transparent, and scalable blockchain applications
            that transform industries
          </p>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="secondary-btn !mt-4"
          >
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
                src={blockchainDevAboutImg}
                className="object-cover h-full rounded-lg w-full"
                alt="blockchain development"
              />
            </div>
          </div>
          <div className="flex h-full items-center lg:items-start flex-col gap-7">
            <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-start">
              <SubHeading heading="Blockchain Development" />
              <div className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full">
                <div className="p-4 rounded-xl bg-white border h-full">
                  <img
                    loading="lazy"
                    src={blockchainDevAboutImg}
                    className="object-cover h-full rounded-lg w-full"
                    alt="blockchain development"
                  />
                </div>
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                Pioneering Blockchain Solutions for the Digital Economy
              </h2>
              <p className="desc">
                Blockchain technology is revolutionizing how we conduct
                business, share data, and establish trust. Our blockchain
                development services create secure, decentralized applications
                that bring transparency and efficiency to your operations. From
                smart contracts to custom blockchain networks, we build
                solutions that are secure, scalable, and tailored to your
                specific needs. Whether you need a private enterprise blockchain
                or public decentralized applications, our expertise spans across
                various platforms including Ethereum, Hyperledger, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="wrapper py-[5rem] flex flex-col gap-5 items-center"
      >
        <SubHeading heading="Blockchain Development Services" />
        <h2 className="heading-2 max-w-[60rem] mx-auto text-center">
          Comprehensive Blockchain Solutions for Every Business Need
        </h2>
        <div className="mt-5 grid sm:grid-cols-2 gap-6">
          {blockchainDevelopmentServices.map((service) => (
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

export default BlockchainLanding;
