import React from 'react';
import img1 from './Sponser/ccl.jpg';
import img2 from './Sponser/hiralal.jpg';
import img3 from './Sponser/bharatversity.png';
import img4 from './Sponser/onebite.png';
import img5 from './Sponser/mimicon.png';
import img6 from './Sponser/piyush.png';
import img7 from './Sponser/campusexpress.jpeg';
import img8 from './Sponser/startupjhk.png';

const SponsorshipSection = () => {
  return (
    <section className="sponsors relative pb-12 px-4 mx-auto">
      <div className="absolute top-28 left-0 w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-green-500/30 rounded-full blur-3xl" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col justify-center items-center md:gap-6 gap-3 mb-8 ">
        <h1 data-aos="fade-down" data-aos-duration="1000" className="font-semibold md:text-5xl text-3xl text-white">
          Our Sponsors
        </h1>
        <div className="h-1 w-36 bg-primaryGreen rounded-md"></div>
      </div>
        <div className="my-16">
          <h3 className="text-lg md:text-xl font-medium text-white text-center mb-8">
            Title Sponsor
          </h3>
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="flex flex-wrap justify-center gap-6 md:gap-8"
          >
            <div className="bg-white w-72 h-36 md:w-96 md:h-48 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 flex items-center justify-center">
              <img
                src={img1}
                alt="Coal India Limited (CCL)"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Prime Sponsors */}
        <div className="my-16">
          <h3 className="text-lg md:text-xl font-medium text-white text-center mb-8">
            Prime Sponsor
          </h3>
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="flex flex-wrap justify-center gap-6 md:gap-8"
          >
            <div className="bg-white w-72 h-36 md:w-96 md:h-48 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 flex items-center justify-center">
              <img
                src={img2}
                alt="Hiralal Group"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-medium text-white text-center mb-8">
            Co-powered by
          </h3>
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="flex flex-wrap justify-center gap-6 md:gap-8"
          >
            <div className="bg-white w-72 h-36 md:w-96 md:h-48 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 flex items-center justify-center">
              <img
                src={img3}
                alt="BharatVersity"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Food and Anime Partners Section */}
        <div className="my-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Food Partner */}
            <div className="flex flex-col items-center">
              <h3 className="text-lg md:text-xl font-medium text-white text-center mb-8">
                Food Partner
              </h3>
              <div className="bg-white w-full h-36 md:h-48 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 flex items-center justify-center">
                <img
                  src={img4}
                  alt="ONEBITE"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Anime Partner */}
            <div className="flex flex-col items-center">
              <h3 className="text-lg md:text-xl font-medium text-white text-center mb-8">
                Anime Partner
              </h3>
              <div className="bg-white w-full h-36 md:h-48 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 flex items-center justify-center">
                <img
                  src={img5}
                  alt="Mimicon"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Three Partners Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Edu Partner */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg md:text-xl font-medium text-white text-center mb-8">
              Education Partner
            </h3>
            <div className="bg-white w-full h-36 md:h-48 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 flex items-center justify-center">
              <img
                src={img6}
                alt="Piyush Academy"
                className="w-full h-full object-contain p-4"
              />
            </div>
          </div>

          {/* Logistics Partner */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg md:text-xl font-medium text-white text-center mb-8">
              Logistics Partner
            </h3>
            <div className="bg-white w-full h-36 md:h-48 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 flex items-center justify-center">
              <img
                src={img7}
                alt="Campus Express"
                className="w-full h-full object-contain p-4"
              />
            </div>
          </div>

          {/* Innovation Partner */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg md:text-xl font-medium text-white text-center mb-8">
              Innovation Partner
            </h3>
            <div className="bg-white w-full h-36 md:h-48 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 flex items-center justify-center">
              <img
                src={img8}
                alt="Startup Jharkhand"
                className="w-full h-full object-contain p-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorshipSection;
