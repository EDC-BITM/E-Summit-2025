import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Photo1 from "../FeaturedSpeaker/image1.png";
import Photo2 from "../FeaturedSpeaker/image2.png"
import { Slide, Fade } from "react-awesome-reveal";

const FeaturedSpeakers = () => {
  return (
    <section className="speakers w-full relative mx-auto pb-12">
      <div className="absolute top-0 left-0 w-[200px] h-[400px] md:w-[600px] md:h-[600px] bg-green-500/30 rounded-full blur-3xl" />
      <div className="text-center mb-16">
        <h1 data-aos="fade-down" data-aos-duration="1000" className="font-semibold md:text-5xl text-3xl text-white">Featured Speakers</h1>
        <div className="h-1 w-36 bg-primaryGreen rounded-md mx-auto mt-4"></div>
      </div>

      {/* cards section */}
      <div className="flex flex-col justify-center items-center md:gap-12 gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center md:gap-20 gap-10">
          <div data-aos="flip-left"
            className="text-white shadow-md rounded-lg overflow-hidden relative group "
          >
            <img
              src={Photo1}
              alt=""
              className="w-full max-w-[300px] h-[350px] rounded-lg"
            />
            {/* overlay section */}
            <div className="absolute left-0 bottom-[-100%] opacity-0 group-hover:opacity-100 group-hover:bottom-[-50%] p-4 w-full h-full bg-[#111111]/60 group-hover:backdrop-blur-sm duration-75">
              <div className="space-y-1">
                <Slide cascade>
                  <h1 className="text-2xl font-semibold">{"Dr. Vijender Chauhan"}</h1>
                  <h6 className="text-[#00B25C]">{"Interviewer"}</h6>
                  <Fade cascade damping={0.05}>
                    <h6 className="pb-2">{"Fireside chat , Dive into his journey, gain insights"}</h6>
                  </Fade>
                  <div className="flex flex-row justify-start items-start gap-4">
                    <a href="https://www.linkedin.com/in/vijendermasijeevi/?originalSubdomain=in"><FaLinkedin /></a>
                    <a href="https://x.com/masijeevi?lang=en"><BsTwitterX /></a>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
          <div data-aos="flip-left"
            className="text-white shadow-md rounded-lg overflow-hidden relative group "
          >
            <img
              src={Photo2}
              alt=""
              className="w-full max-w-[300px] h-[350px] rounded-lg"
            />
            {/* overlay section */}
            <div className="absolute left-0 bottom-[-100%] opacity-0 group-hover:opacity-100 group-hover:bottom-[-50%] p-4 w-full h-full bg-[#111111]/60 group-hover:backdrop-blur-sm duration-75">
              <div className="space-y-1">
                <Slide cascade>
                  <h1 className="text-2xl font-semibold">{"Speaker name"}</h1>
                  <h6 className="text-[#00B25C]">{"Designation"}</h6>
                  <Fade cascade damping={0.05}>
                    <h6>{"Each character will appear one by one"}</h6>
                  </Fade>
                  <div className="flex flex-row justify-start items-start gap-4">
                    <a href=""><FaLinkedin /></a>
                    <a href=""><BsTwitterX /></a>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
          <div data-aos="flip-left"
            className="text-white shadow-md rounded-lg overflow-hidden relative group "
          >
            <img
              src={Photo2}
              alt=""
              className="w-full max-w-[300px] h-[350px] rounded-lg"
            />
            {/* overlay section */}
            <div className="absolute left-0 bottom-[-100%] opacity-0 group-hover:opacity-100 group-hover:bottom-[-50%] p-4 w-full h-full bg-[#111111]/60 group-hover:backdrop-blur-sm duration-75">
              <div className="space-y-1">
                <Slide cascade>
                  <h1 className="text-2xl font-semibold">{"Speaker name"}</h1>
                  <h6 className="text-[#00B25C]">{"Designation"}</h6>
                  <Fade cascade damping={0.05}>
                    <h6>{"Each character will appear one by one"}</h6>
                  </Fade>
                  <div className="flex flex-row justify-start items-start gap-4">
                    <a href=""><FaLinkedin /></a>
                    <a href=""><BsTwitterX /></a>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 place-items-center md:gap-20 gap-10">
          <div data-aos="flip-left"
            className="text-white shadow-md rounded-lg overflow-hidden relative group "
          >
            <img
              src={Photo2}
              alt=""
              className="w-full max-w-[300px] h-[350px] rounded-lg"
            />
            {/* overlay section */}
            <div className="absolute left-0 bottom-[-100%] opacity-0 group-hover:opacity-100 group-hover:bottom-[-50%] p-4 w-full h-full bg-[#111111]/60 group-hover:backdrop-blur-sm duration-75">
              <div className="space-y-1">
                <Slide cascade>
                  <h1 className="text-2xl font-semibold">{"Speaker name"}</h1>
                  <h6 className="text-[#00B25C]">{"Designation"}</h6>
                  <Fade cascade damping={0.05}>
                    <h6>{"Each character will appear one by one"}</h6>
                  </Fade>
                  <div className="flex flex-row justify-start items-start gap-4">
                    <a href=""><FaLinkedin /></a>
                    <a href=""><BsTwitterX /></a>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
          <div data-aos="flip-left"
            className="text-white shadow-md rounded-lg overflow-hidden relative group "
          >
            <img
              src={Photo2}
              alt=""
              className="w-full max-w-[300px] h-[350px] rounded-lg"
            />
            {/* overlay section */}
            <div className="absolute left-0 bottom-[-100%] opacity-0 group-hover:opacity-100 group-hover:bottom-[-50%] p-4 w-full h-full bg-[#111111]/60 group-hover:backdrop-blur-sm duration-75">
              <div className="space-y-1">
                <Slide cascade>
                  <h1 className="text-2xl font-semibold">{"Speaker name"}</h1>
                  <h6 className="text-[#00B25C]">{"Designation"}</h6>
                  <Fade cascade damping={0.05}>
                    <h6>{"Each character will appear one by one"}</h6>
                  </Fade>
                  <div className="flex flex-row justify-start items-start gap-4">
                    <a href=""><FaLinkedin /></a>
                    <a href=""><BsTwitterX /></a>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpeakers;