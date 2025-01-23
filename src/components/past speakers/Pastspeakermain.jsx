import React from "react"
import PastSpeakers from "./PastSpeakers"

function PastSpeakersmain() {

  return (
    <>
    <div className="w-full md:p-0 p-4 md:pt-12 overflow-x-hidden overflow-hidden relative">
    <div className="absolute top-28 right-0 w-[400px] h-[300px] md:w-[500px] md:h-[400px] bg-green-500/30 rounded-full blur-3xl" />
        <div data-aos="fade-down" data-aos-duration="1000" className="flex flex-col justify-center items-center md:gap-6 gap-3 md:mb-0 mb-[-50px]">
            <h1 className="font-semibold md:text-5xl text-3xl text-white">Past Speakers</h1>
            <div className="h-1 w-36 bg-primaryGreen rounded-md"></div>
        </div>
        <PastSpeakers/>
    </div>
    </>
  )
}

export default PastSpeakersmain
