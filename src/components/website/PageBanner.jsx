import React from "react";
import bannerImg from "../../assets/images/banner.webp";

const PageBanner = ({ title, desc }) => {
  return (
    <div
      className="w-full min-h-[55vh] sm:min-h-[60vh] h-fit py-[1rem] bg-cover relative flex items-center justify-center z-[1]"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="w-full translate-y-[60%]">
        <div data-aos="fade-up" className="wrapper text-center">
          <h1 className="heading-1">{title}</h1>
          {desc && <p className="desc mt-3 max-w-[55rem] mx-auto">{desc}</p>}
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
