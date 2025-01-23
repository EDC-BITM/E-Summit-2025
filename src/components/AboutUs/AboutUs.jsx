import React, { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter/AnimatedCounter";
import AOS from "aos";
import 'aos/dist/aos.css';
import hero from "../../assets/hero.mp4";

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const memoizedContent = useMemo(() => (
    <section className="about relative pb-24">
      {/* Background Blob */}
      <div className="absolute top-[60rem] -left-48 w-48 h-48 md:w-[550px] md:h-[500px] bg-green-500/30 rounded-full blur-3xl -z-10" />
      {/* About us Heading */}
      <div data-aos="fade-down" data-aos-duration="1000" className="flex flex-col justify-center items-center">
        <h1 className="font-semibold md:text-5xl text-3xl text-white">About E-Summit'25</h1>
        <div className="h-1 w-36 bg-primaryGreen rounded-md mx-auto mt-4"></div>
      </div>

      {/* About us container */}
      <div className="flex flex-wrap justify-center items-stretch md:gap-x-12 gap-6 text-secondaryText z-10 md:mt-16 mt-4">
        {/* Left Container */}
        <div data-aos="fade-right" data-aos-duration="1000" className="flex flex-col md:w-2/5 w-4/5 gap-6">
          {/* About edc card */}
          <div className="flex flex-1 flex-col p-4 bg-primaryGrey rounded-md border border-borderColor min-h-[130px]">
            <h4 className="z-10 text-primaryGreen text-xl">
              What is E-Summit?
            </h4>
            <p className="z-10 py-2 text-secondaryText">
              E-Summit is BIT Mesra's flagship entrepreneurship event,
              bringing together innovators, entrepreneurs, and leaders to
              foster the spirit of entrepreneurship and innovation.
            </p>
          </div>
          {/* Our Mission card */}
          <div className="flex flex-1 flex-col p-4 bg-primaryGrey rounded-md border border-borderColor min-h-[130px]">
            <h4 className="z-10 text-primaryGreen text-xl">Our Mission</h4>
            <p className="z-10 py-2 text-secondaryText">
              To create a platform that nurtures entrepreneurial mindsets,
              facilitates networking, and provides valuable insights into the
              startup ecosystem.
            </p>
          </div>
        </div>

        {/* Right Container */}
        <div data-aos="fade-left" data-aos-duration="1000" className="flex flex-col gap-6 md:w-2/5 w-4/5">
          {/* Number of Attendees and Number of Speakers in top container*/}
          <div className="flex gap-6 md:h-full h-auto">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center justify-center flex-col p-4 bg-primaryGrey rounded-md border border-borderColor text-center w-1/2 h-full text-secondaryText"
            >
              <AnimatedCounter
                from={50}
                to={100}
                className="text-primaryGreen lg:text-5xl md:text-4xl text-2xl font-semibold"
              >
                K+
              </AnimatedCounter>
              Social Media Impressions
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center justify-center flex-col p-4 bg-primaryGrey rounded-md border border-borderColor text-center w-1/2 h-full text-secondaryText"
            >
              <AnimatedCounter
                from={0}
                to={6}
                className="text-primaryGreen lg:text-5xl md:text-4xl text-2xl font-semibold"
              >
                +
              </AnimatedCounter>
              Speakers
            </motion.div>
          </div>
          {/* Number of Events and Prize Pool in bottom container */}
          <div className="flex gap-6 h-full">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center justify-center flex-col p-4 bg-primaryGrey rounded-md border border-borderColor text-center w-1/2 h-full text-secondaryText"
            >
              <AnimatedCounter
                from={0}
                to={10}
                className="text-primaryGreen lg:text-5xl md:text-4xl text-2xl font-semibold"
              >
                +
              </AnimatedCounter>
              Events
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center justify-center flex-col p-4 bg-primaryGrey rounded-md border border-borderColor text-center w-1/2 h-full text-secondaryText"
            >
              <AnimatedCounter
                from={0}
                to={1}
                className="text-primaryGreen lg:text-5xl md:text-4xl text-2xl font-semibold"
              >
                L+
              </AnimatedCounter>
              Prize Pool
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  ), []);

  return <>{memoizedContent}</>;
};

export default AboutUs;