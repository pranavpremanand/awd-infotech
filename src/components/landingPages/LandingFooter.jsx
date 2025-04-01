import React from "react";
import { companyDetails, logoBw } from "../../constant";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const LandingFooter = () => {
  return (
    <div className="py-[3rem] bg-[#5d5d5d] text-white">
      <div className="wrapper flex lg:flex-row flex-col gap-7 justify-between">
        <div className="">
          <Helmet>
            {/* Preload the logo image */}
            <link rel="preload" href={logoBw} as="image" type="image/png" />
          </Helmet>
          <img
            width="200"
            height="50"
            src={logoBw}
            className="w-[12rem] scale-110 object-contain"
            alt="logo"
          />
          <div className="flex items-center gap-3 mt-5">
            <Link
              aria-label="Contact us on Instagram"
              to={companyDetails.instagram}
              className="w-[2rem] h-[2rem] rounded-full p-2 bg-secondary hover:bg-primary text-primary hover:text-white hover:-translate-y-1 transition-all duration-300 flex justify-center items-center"
            >
              <Instagram strokeWidth={1.5} size={20} />
            </Link>
            <Link
              aria-label="Contact us on Twitter"
              to={companyDetails.twitter}
              className="w-[2rem] h-[2rem] rounded-full p-2 bg-secondary hover:bg-primary text-primary hover:text-white hover:-translate-y-1 transition-all duration-300 flex justify-center items-center"
            >
              <Twitter strokeWidth={1.5} size={20} />
            </Link>
            <Link
              aria-label="Contact us on LinkedIn"
              to={companyDetails.linkedin}
              className="w-[2rem] h-[2rem] rounded-full p-2 bg-secondary hover:bg-primary text-primary hover:text-white hover:-translate-y-1 transition-all duration-300 flex justify-center items-center"
            >
              <Linkedin strokeWidth={1.5} size={20} />
            </Link>
            <Link
              aria-label="Contact us on Facebook"
              to={companyDetails.facebook}
              className="w-[2rem] h-[2rem] rounded-full p-2 bg-secondary hover:bg-primary text-primary hover:text-white hover:-translate-y-1 transition-all duration-300 flex justify-center items-center"
            >
              <Facebook strokeWidth={1.5} size={20} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-white">
          <h6 className="font-semibold">Contact Us</h6>
          <ul className="flex flex-col gap-3 mt-1">
            <li className="flex gap-3 text-white">
              <Link
                aria-label="Contact us on email"
                to={`mailto:${companyDetails.email}`}
                className="flex gap-3 text-white hover:text-secondary transition-colors duration-200"
              >
                <Mail
                  strokeWidth={1.5}
                  size={20}
                  className="text-white inline"
                />{" "}
                <span className="text-sm">{companyDetails.email}</span>
              </Link>
            </li>
            <li>
              <Link
                aria-label="Contact us on phone"
                to={`tel:${companyDetails.phone}`}
                className="flex gap-3 text-white hover:text-secondary transition-colors duration-200"
              >
                <Phone
                  strokeWidth={1.5}
                  size={20}
                  className="text-white inline"
                />{" "}
                <span className="text-sm">{companyDetails.phone}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LandingFooter;
