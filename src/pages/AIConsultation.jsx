import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { SpinnerContext } from "../components/SpinnerContext";
import { companyDetails } from "../constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FaBrain,
  FaChartLine,
  FaRobot,
  FaSearch,
  FaUserCheck,
} from "react-icons/fa";
import { LuChartNetwork } from "react-icons/lu";
import SubHeading from "../components/SubHeading";
import WebsiteHeader from "../components/website/WebsiteHeader";
import WebsiteFooter from "../components/website/WebsiteFooter";
import { Link } from "react-scroll";

const AIConsultation = () => {
  const { setSpinner } = useContext(SpinnerContext);
  const navigate = useNavigate();
  const [selectedSlot, setSelectedSlot] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      company: "",
      email: "",
      problem: "",
      consultationSlot: "",
    },
  });

  // handle form submit click
  const handleFormSubmit = async (values) => {
    setSpinner(true);

    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Company: " + values.company + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "AI Problem: " + values.problem + "\n\n";
    emailBody += "Preferred Consultation Slot: " + values.consultationSlot;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      subject: "AI Consultation Request",
      body: emailBody,
      name: "AWD Infotech",
    };

    try {
      const res = await axios.post(
        "https://send-mail-redirect-boostmysites.vercel.app/send-email",
        payload
      );
      if (res.data.success) {
        toast.success("Consultation request sent successfully");
        reset();
      } else {
        toast.error(res.data.error);
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSpinner(false);
    }
  };

  const handleSlotChange = (slot) => {
    setSelectedSlot(slot);
  };

  return (
    <>
      <WebsiteHeader />
      <main className="pt-[5rem]">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary to-tertiary text-white py-20">
          <div className="wrapper">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div data-aos="fade-right" className="flex flex-col gap-5">
                <div className="flex justify-center">
                  <SubHeading heading="AI CONSULTATION & STRATEGIC INTEGRATION" />
                </div>
                <h1 className="heading-1 !text-white">
                  Need Help Implementing AI for Your Business?
                </h1>
                <p className="desc text-lg">
                  Let's Design the Right Solution. We help enterprises,
                  startups, and product teams apply AI to real-world
                  problems—through smart consultation, pilot execution, and
                  roadmap design.
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <Link
                    to="consultation-form"
                    smooth
                    offset={-80}
                    className="secondary-btn"
                  >
                    Book a Free Consultation
                  </Link>
                  <Link
                    to="use-cases"
                    smooth
                    offset={-80}
                    className="primary-btn !bg-white !text-secondary hover:!bg-secondary hover:!text-white"
                  >
                    Request AI Use Case Assessment
                  </Link>
                </div>
              </div>
              <div
                data-aos="fade-left"
                className="hidden lg:flex justify-center"
              >
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-secondary/20 blur-xl animate-pulse"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-xl">
                    <div className="flex flex-col gap-6">
                      <div className="flex items-center gap-4">
                        <FaBrain className="text-4xl text-secondary" />
                        <div>
                          <h3 className="font-semibold text-xl">AI Strategy</h3>
                          <p className="text-white/80">
                            Custom roadmap for your business
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <FaRobot className="text-4xl text-secondary" />
                        <div>
                          <h3 className="font-semibold text-xl">Automation</h3>
                          <p className="text-white/80">
                            Streamline operations with AI
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <FaChartLine className="text-4xl text-secondary" />
                        <div>
                          <h3 className="font-semibold text-xl">
                            Predictive Analytics
                          </h3>
                          <p className="text-white/80">
                            Data-driven decision making
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Help You Solve */}
        <section className="py-20 bg-background" id="use-cases">
          <div className="wrapper">
            <div data-aos="fade-up" className="text-center mb-16">
              <div className="flex justify-center">
                <SubHeading heading="WHAT WE HELP YOU SOLVE" />
              </div>
              <h2 className="heading-2 max-w-4xl mx-auto">
                Transform your business challenges into AI-powered opportunities
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaSearch className="text-4xl text-primary" />,
                  title: "Identify AI Opportunities",
                  description:
                    "Identify areas where AI can reduce operational inefficiency",
                },
                {
                  icon: <FaBrain className="text-4xl text-primary" />,
                  title: "Custom AI Solutions",
                  description:
                    "Build custom AI models or integrate existing ones (GPT, Vision, Search)",
                },
                {
                  icon: <FaUserCheck className="text-4xl text-primary" />,
                  title: "AI Governance",
                  description: "Design responsible AI governance and oversight",
                },
                {
                  icon: <LuChartNetwork className="text-4xl text-primary" />,
                  title: "Team Training",
                  description: "Train teams on AI adoption and ethical use",
                },
                {
                  icon: <FaRobot className="text-4xl text-primary" />,
                  title: "AI Implementation",
                  description:
                    "Implement AI for: chatbots, anomaly detection, automation, NLP, and more",
                },
                {
                  icon: <FaChartLine className="text-4xl text-primary" />,
                  title: "ROI Optimization",
                  description:
                    "Maximize return on AI investments with strategic implementation",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="mb-4 text-primary group-hover:text-secondary transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary_text">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="wrapper">
            <div data-aos="fade-up" className="text-center mb-16">
              <div className="flex justify-center">
                <SubHeading heading="HOW IT WORKS" />
              </div>
              <h2 className="heading-2 max-w-4xl mx-auto">
                A simple 3-step process to AI transformation
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 relative">
              {/* Connection line for desktop */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary transform -translate-y-1/2 z-0"></div>

              {[
                {
                  number: "1",
                  title: "Discovery Call",
                  description:
                    "We understand your goals, challenges & readiness.",
                },
                {
                  number: "2",
                  title: "AI Fitment Map",
                  description:
                    "We identify what AI can and should solve — not hype, real impact.",
                },
                {
                  number: "3",
                  title: "Pilot & Strategy Plan",
                  description:
                    "You receive a phased roadmap with quick wins, ROI metrics & compliance focus.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  className="flex-1 relative z-10"
                >
                  <div className="bg-white border border-gray-200 rounded-xl p-8 h-full flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold mb-6">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-primary_text">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why AWD Infotech */}
        <section className="py-20 bg-primary/5">
          <div className="wrapper">
            <div data-aos="fade-up" className="text-center mb-16">
              <div className="flex justify-center">
                <SubHeading heading="WHY AWD INFOTECH?" />
              </div>
              <h2 className="heading-2 max-w-4xl mx-auto">
                Your trusted partner for AI transformation
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Domain + Tech Blend",
                  description:
                    "Deep expertise across healthcare, banking, gaming, and more industries",
                },
                {
                  title: "End-to-End AI Integration",
                  description:
                    "From strategy to support, we handle the complete AI journey",
                },
                {
                  title: "Transparent & Scalable",
                  description:
                    "Collaborative approach with clear communication and scalable solutions",
                },
                {
                  title: "People-First Adoption",
                  description:
                    "Emphasis on AI fluency and ethical, responsible implementation",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div data-aos="fade-up" className="mt-12 text-center">
              <Link
                to="consultation-form"
                smooth
                offset={-80}
                className="secondary-btn inline-block w-fit mx-auto"
              >
                See AI in Action
              </Link>
              <p className="mt-4 text-gray-600">
                Discover how we've helped businesses transform with AI solutions
              </p>
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <section id="consultation-form" className="py-20 bg-white">
          <div className="wrapper">
            <div data-aos="fade-up" className="text-center mb-12">
              <div className="flex justify-center">
                <SubHeading heading="REQUEST AI ADVISORY NOW" />
              </div>
              <h2 className="heading-2 max-w-4xl mx-auto">
                Let's discuss how AI can transform your business
              </h2>
            </div>

            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              data-aos="fade-up"
              className="bg-primary/5 rounded-2xl p-8 max-w-4xl mx-auto shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium ml-2 text-primary_text">
                    Name *
                  </label>
                  <input
                    type="text"
                    className="outline-none p-3 rounded-full bg-white/80 text-black border border-gray-300 focus:border-primary transition-all duration-300"
                    placeholder="Your name"
                    {...register("name", {
                      required: "Name is required",
                      validate: (val) => {
                        if (val.trim() !== "") {
                          return true;
                        } else {
                          return "Name is required";
                        }
                      },
                    })}
                  />
                  <small className="error-message ml-2">
                    {errors.name?.message}
                  </small>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium ml-2 text-primary_text">
                    Company *
                  </label>
                  <input
                    type="text"
                    className="outline-none p-3 rounded-full bg-white/80 text-black border border-gray-300 focus:border-primary transition-all duration-300"
                    placeholder="Your company"
                    {...register("company", {
                      required: "Company is required",
                      validate: (val) => {
                        if (val.trim() !== "") {
                          return true;
                        } else {
                          return "Company is required";
                        }
                      },
                    })}
                  />
                  <small className="error-message ml-2">
                    {errors.company?.message}
                  </small>
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-6">
                <label className="text-sm font-medium ml-2 text-primary_text">
                  Email *
                </label>
                <input
                  type="email"
                  className="outline-none p-3 rounded-full bg-white/80 text-black border border-gray-300 focus:border-primary transition-all duration-300"
                  placeholder="Your email address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      message: "Entered email is invalid",
                    },
                  })}
                />
                <small className="error-message ml-2">
                  {errors.email?.message}
                </small>
              </div>

              <div className="flex flex-col gap-2 mb-6">
                <label className="text-sm font-medium ml-2 text-primary_text">
                  AI Problem You're Facing
                </label>
                <textarea
                  rows="4"
                  className="outline-none p-4 rounded-2xl bg-white/80 text-black border border-gray-300 focus:border-primary transition-all duration-300"
                  placeholder="Describe the AI challenge or opportunity you're looking to address"
                  {...register("problem")}
                />
              </div>

              <div className="flex flex-col gap-2 mb-8">
                <label className="text-sm font-medium ml-2 text-primary_text">
                  Preferred Consultation Slot
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                  {[
                    "Morning (9 AM - 12 PM)",
                    "Afternoon (12 PM - 5 PM)",
                    "Evening (5 PM - 8 PM)",
                    "Flexible / Any time",
                  ].map((slot) => (
                    <div
                      key={slot}
                      className={`
                        border rounded-full p-3 text-center cursor-pointer transition-all duration-300
                        ${
                          selectedSlot === slot
                            ? "border-secondary bg-secondary/10 text-primary font-medium"
                            : "border-gray-300 bg-white hover:border-primary/30"
                        }
                      `}
                      onClick={() => handleSlotChange(slot)}
                    >
                      {slot}
                    </div>
                  ))}
                </div>
                <input
                  type="hidden"
                  value={selectedSlot}
                  {...register("consultationSlot")}
                />
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="secondary-btn w-full py-4 text-base"
              >
                Request AI Advisory Now
              </button>
            </form>
          </div>
        </section>
      </main>
      <WebsiteFooter />
    </>
  );
};

export default AIConsultation;
