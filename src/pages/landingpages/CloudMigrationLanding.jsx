import React, { lazy } from "react";
import cloudMigrationBanner from "../../assets/videos/cloud-migration.mp4";
import SubHeading from "../../components/SubHeading";
import { cloudMigrationServices } from "../../constant";
import TrustWorthySection from "../../components/TrustWorthySection";
import cloudMigrationAboutImg from "../../assets/images/landingpage/cloud-migration-about.webp";
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

const CloudMigrationLanding = () => {
  return (
    <>
      <LandingHeader />
      <section
        id="banner"
        className="h-screen banner-video relative text-primary_text"
      >
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-background/40 to-background/40"></div>
        <ReactPlayer
          url={cloudMigrationBanner}
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
            Seamless Transition to the{" "}
            <span className="text-primary font-bold block sm:inline">
              Cloud
            </span>
          </p>
          <h1 className="heading text-stroke-white !text-primary">
            Migrate with Confidence, Operate with Efficiency
          </h1>
          <p className="sub-heading !font-normal">
            Our proven cloud migration strategy minimizes risk and maximizes ROI
          </p>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="secondary-btn !mt-4"
          >
            Plan Your Migration
          </Link>
        </div>
      </section>

      <section id="about" className="text-primary_text wrapper pt-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div className="hidden lg:block h-full">
            <div className="p-4 rounded-xl bg-white border h-full">
              <img
                loading="lazy"
                src={cloudMigrationAboutImg}
                className="object-cover h-full rounded-lg w-full"
                alt="Cloud migration"
              />
            </div>
          </div>
          <div className="flex h-full items-center lg:items-start flex-col gap-7">
            <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-start">
              <SubHeading heading="Cloud Migration" />
              <div className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full">
                <div className="p-4 rounded-xl bg-white border h-full">
                  <img
                    loading="lazy"
                    src={cloudMigrationAboutImg}
                    className="object-cover h-full rounded-lg w-full"
                    alt="Cloud migration"
                  />
                </div>
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                Smooth Cloud Transition with Minimal Business Disruption
              </h2>
              <p className="desc">
                Cloud migration requires careful planning and execution to
                ensure business continuity and optimal performance. Our cloud
                migration services help organizations transition to the cloud
                with minimal downtime and maximum benefit. We assess your
                current infrastructure, develop a customized migration plan, and
                execute the transition with precision to ensure security,
                compliance, and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="wrapper py-[5rem] flex flex-col gap-5 items-center"
      >
        <SubHeading heading="Cloud Migration Services" />
        <h2 className="heading-2 max-w-[60rem] mx-auto text-center">
          End-to-End Cloud Migration Solutions
        </h2>
        <div className="mt-5 grid sm:grid-cols-2 gap-6">
          {cloudMigrationServices.map((service) => (
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

export default CloudMigrationLanding;
