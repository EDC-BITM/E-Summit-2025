import React, { useMemo } from "react"
import img1 from "./Sponser/ccl.jpg"
import img2 from "./Sponser/hiralal.jpg"
import img3 from "./Sponser/bharatversity.png"
import img4 from "./Sponser/acs.jpeg"
import img5 from "./Sponser/mimicon.png"
import img6 from "./Sponser/piyush.png"
import img7 from "./Sponser/campusexpress.jpeg"
import img8 from "./Sponser/startupjhk.png"
import img9 from "./Sponser/maruti.png"
import img10 from "./Sponser/hyundai.png"
import img11 from "./Sponser/dominos.jpg"
import img12 from "./Sponser/skoda.jpg"
import img13 from "./Sponser/isteve.jpg"

function SponsorshipSection() {
  const sponsorImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13]
  const sponsorTitles = [
    "Title Sponsor",
    "Prime Partner",
    "Powered By",
    "Food Partner",
    "Anime Partner",
    "Education Partner",
    "Logistics Partner",
    "Innovation Partner",
    "Mobility Partner",
    "Automobile Partner",
    "Pizza Partner",
    "Presented By",
    "Supporting Partner",
  ]

  const currentsponsors = useMemo(() => {
    return (
      <div className="sponsors relative pb-12 px-4 mx-auto">
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
          
          @keyframes slide-left {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(0);
            }
          }
          .animate-infinite-slide-left {
            animation: slide-left 30s linear infinite;
          }
          .sponsors-container:hover .animate-infinite-slide-left {
            animation-play-state: paused;
          }
          .sponsor-title {
            font-family: 'Open Sans', sans-serif;
            font-weight: 700;
          }
        `}</style>
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="flex flex-col justify-center items-center md:gap-6 gap-3"
        >
          <h1 className="font-semibold md:text-5xl text-3xl text-white">Our Sponsors</h1>
          <div className="h-1 w-36 bg-primaryGreen rounded-md md:mb-16 mb-8"></div>
        </div>
        <div data-aos="fade-down" data-aos-duration="1000" className="sponsors-container flex overflow-hidden md:my-10">
          <div className="animate-infinite-slide-left flex shrink-0 gap-24">
            {[...sponsorImages, ...sponsorImages].map((img, index) => (
              <div key={`sponsor-${index}`} className="flex flex-col items-center">
                <div className="h-40 w-40 flex-shrink-0 flex justify-center items-center bg-white rounded">
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`Sponsor ${(index % sponsorImages.length) + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <p className="mt-2 text-white sponsor-title text-center">
                  {sponsorTitles[index % sponsorTitles.length]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }, [sponsorImages]) // Added sponsorImages as a dependency

  return currentsponsors
}

export default SponsorshipSection

