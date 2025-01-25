import React, { useMemo } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Vijender from "../FeaturedSpeaker/vijender.png";
import Ashutosh from "../FeaturedSpeaker/ashutosh.png";
import Nidhi from "../FeaturedSpeaker/nidhi.png";
import Sairaj from "../FeaturedSpeaker/sairaj.png";
import Upasana from "../FeaturedSpeaker/upasana.png";
import Muskaan from "../FeaturedSpeaker/muskaan.png";
import { Slide, Fade } from "react-awesome-reveal";

const FeaturedSpeakers = () => {
  const speakersData = useMemo(
    () => [
      {
        name: "Nidhi Banthia",
        role: "Renowned business coach and influencer",
        img: Nidhi,
        instagram: "https://www.instagram.com/nidhibanthiamehta/",
        linkedin: "https://www.linkedin.com/in/nidhibanthiamehta/",
        twitter: "https://x.com/Bollybeatz",
      },
      {
        name: "Dr. Vijender Chauhan",
        role: "Interviewer",
        img: Vijender,
        instagram: "https://www.instagram.com/masijeevi/",
        linkedin: "https://www.linkedin.com/in/vijendermasijeevi",
        twitter: "https://x.com/masijeevi",
      },
      {
        name: "Muskaan Sancheti",
        role: "Co-founder of The State Plate",
        img: Muskaan,
        instagram: "https://www.instagram.com/heyitsmush/",
        linkedin: "https://www.linkedin.com/in/muskaan-sancheti/",
        twitter: "https://x.com/heyitsmushh",
      },
      {
        name: "Ashutosh Naik",
        role: "Chief Compliance Officer (CCO) at Groww",
        img: Ashutosh,
        instagram: "",
        linkedin: "https://in.linkedin.com/in/ashutosh-naik-187a8b2a",
        twitter: "https://x.com/AshutoshNaik76",
      },
      {
        name: "Upasana Makati",
        role: "Founder of White Print",
        img: Upasana,
        instagram: "https://www.instagram.com/upasanamakati/",
        linkedin: "https://www.linkedin.com/in/upasanamakati/",
        twitter: "https://x.com/whiteprintmag",
      },
      {
        name: "Sairaj Dhond",
        role: "Co-founder of Wakao Foods",
        img: Sairaj,
        instagram: "https://www.instagram.com/sairajdhond/",
        linkedin: "https://www.linkedin.com/in/sairajdhondfounderwakaofoods/",
        twitter: "https://x.com/sairajdhond",
      },
    ],
    []
  );

  return (
    <section className="speakers w-full relative mx-auto md:pb-40 pb-20 ">
      <div className="absolute top-0 left-0 w-[200px] h-[400px] md:w-[600px] md:h-[600px] bg-green-500/30 rounded-full blur-3xl" />
      <div data-aos="fade-down" data-aos-duration="1000" className="text-center mb-16">
        <h1 className="font-semibold md:text-5xl text-3xl text-white">
          Featured Speakers
        </h1>
        <div className="h-1 w-36 bg-primaryGreen rounded-md mx-auto mt-4"></div>
      </div>
      <div className="flex flex-col justify-center items-center md:gap-20 gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center md:gap-20 gap-10 md:gap-y-20 gap-y-20">
          {speakersData.map((speaker, index) => (
            <div key={index} data-aos="flip-left" className="text-white shadow-md rounded-lg mb-28">
              <img src={speaker.img} className="w-full max-w-64 h-80 rounded-t-lg" />
              <div className="absolute left-0 p-4 w-full h-32 bg-black rounded-b-lg">
                <div className="space-y-1">
                    <h1 className="text-xl font-semibold">{speaker.name}</h1>
                    <h6 className="text-primaryGreen text-sm">{speaker.role}</h6>
                      <h6 className="pb-2">{speaker.desc}</h6>
                    <div className="flex flex-row justify-start items-start gap-4">
                      <a href={speaker.instagram} target="_blank" rel="noreferrer">
                        <FaInstagram />
                      </a>
                      <a href={speaker.linkedin} target="_blank" rel="noreferrer">
                        <FaLinkedinIn />
                      </a>
                      <a href={speaker.twitter} target="_blank" rel="noreferrer">
                        <BsTwitterX />
                      </a>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpeakers;
