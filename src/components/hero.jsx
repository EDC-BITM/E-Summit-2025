import React, { useMemo } from "react";
import hero from "../assets/hero.mp4";

const Hero = () => {
  const memoizedVideo = useMemo(
    () => (
      <video
        autoPlay
        loop
        muted
        className="w-screen h-auto object-cover my-16 -z-50"
      >
        <source src={hero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ),
    []
  );

  return <section className="hero w-full relative">{memoizedVideo}</section>;
};

export default Hero;
