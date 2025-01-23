import React, { useEffect, useRef, useState, useMemo } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { FaLinkedin } from "react-icons/fa"
import { BsTwitterX } from "react-icons/bs"

const speakers = [
  {
    name: "Aman Dhattarwal",
    role: "Founder - Apni Kaksha",
    description: "",
    image: "https://www.edcbitmesra.in/assets/aman-DbMvlUmu.png",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/dhattarwalaman/?originalSubdomain=in",
      twitter: "https://x.com/amandhattarwal?lang=en"
    }
  },
  {
    name: "Pawan Kumar Rai",
    role: "Founder - Ditto Insurance",
    description: "",
    image: "https://www.edcbitmesra.in/assets/pawan-BVpaEbnB.png",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/pawan-kumar-rai-2a437a61/?originalSubdomain=in",
      twitter: "https://x.com/prai2303"
    }
  },
  {
    name: "Ravi K Ranjan",
    role: "Ex Shark Tank",
    description: "",
    image: "https://www.edcbitmesra.in/assets/ravi-BITf5vem.png",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/itsraviranjan/?originalSubdomain=ae",
      twitter: "https://x.com/itsraviranjan?lang=en"
    }
  },
  {
    name: "Amit Chaudhary",
    role: "Founder - Lenskart",
    description: "",
    image: "https://www.edcbitmesra.in/assets/amit-B6OllY1h.png",
    socialLinks: {
      linkedin: "https://linkedin.com/in/jane-smith",
      twitter: "https://twitter.com/janesmith"
    }
  },
  {
    name: "Karan Bajaj",
    role: "Founder - WhiteHat Jr",
    description: "",
    image: "https://www.edcbitmesra.in/assets/karan-Bx4X6SX3.png",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/karan-bajaj-8806191/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
      twitter: "https://twitter.com/janesmith"
    }
  },
  {
    name: "Rishabh Jain",
    role: "Labour Law Advisor",
    description: "",
    image: "https://www.edcbitmesra.in/assets/Rishabh%20Jain-Db0JqcCU.png",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/rishsamjain/?originalSubdomain=in",
      twitter: "https://x.com/rishsamjain?lang=en"
    }
  },
];

const PastSpeakers = () => {
  const [rotation, setRotation] = useState(0);
  const carouselRef = useRef(null);
  const containerRef = useRef(null);

  const numberOfItems = speakers.length;
  const angleIncrement = 360 / numberOfItems;

  const getResponsiveValues = () => {
    const width = window.innerWidth;
    if (width < 640) {
      return { itemSize: 150, translateZ: 150, containerHeight: 300 };
    } else if (width < 1024) {
      return { itemSize: 150, translateZ: 200, containerHeight: 400 };
    } else {
      return { itemSize: 200, translateZ: 300, containerHeight: 400 };
    }
  };

  const [responsiveValues, setResponsiveValues] = useState(getResponsiveValues());

  useEffect(() => {
    const handleResize = () => setResponsiveValues(getResponsiveValues());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = useMemo(
    () => ({
      perspective: "1000px",
      perspectiveOrigin: "50% 50%",
      height: `${responsiveValues.containerHeight}px`
    }),
    [responsiveValues.containerHeight]
  );

  const carouselStyle = useMemo(
    () => ({
      position: "relative",
      width: "100%",
      height: "100%",
      transformStyle: "preserve-3d",
      transform: `rotateY(${rotation}deg)`,
      transition: "transform 0.5s ease-out"
    }),
    [rotation]
  );

  const rotateCarousel = (direction) => {
    setRotation((prev) => prev + direction * (360 / numberOfItems));
  };

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-x-hidden overflow-hidden md:py-20 py-12">
      <div
        ref={containerRef}
        className="w-full max-w-4xl mx-auto px-4 relative"
        style={containerStyle}
      >
        <button
          onClick={() => rotateCarousel(1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => rotateCarousel(-1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div ref={carouselRef} style={carouselStyle}>
          {speakers.map((speaker, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                width: `${responsiveValues.itemSize}px`,
                height: `${responsiveValues.itemSize}px`,
                left: "50%",
                top: "50%",
                transform: `
                  translateX(-50%)
                  translateY(-50%)
                  rotateY(${angleIncrement * index}deg)
                  translateZ(${responsiveValues.translateZ}px)
                `,
              }}
              className="flex flex-col items-center justify-center bg-black rounded-t-full transition-transform duration-300"
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover rounded-t-full"
                draggable={false}
              />
              <div className="space-y-1 bg-black w-full h-full p-2 rounded-b-md">
                <h1 className="text-sm font-semibold text-white">{speaker.name}</h1>
                <h6 className="text-primaryGreen text-[0.65rem]">{speaker.role}</h6>
                <h6 className="text-[0.65rem] text-[#B6B6B6]">{speaker.description}</h6>
                <div className="flex flex-row justify-start items-start gap-4 text-[#B6B6B6]">
                  <a
                    href={speaker.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={speaker.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsTwitterX />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastSpeakers;
