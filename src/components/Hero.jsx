import React from "react";

const Hero = () => {
  return (
    <div className="relative z-0 mt-[100px] lg:mt-0 overflow-x-hidden">
      {/* Hero Background Image */}

      <div className="w-full h-[830px] sm:h-[780px] lg:h-[730px] bg-[radial-gradient(circle_at_top_left,#3c3f2d_0%,#121310_70%)]"></div>

      {/* <img
        src="hero-bg.webp"
        alt=""
        className="w-full h-[830px] sm:h-[780px] lg:h-[730px] object-cover"
      /> */}
      {/* Content Overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
        <div className="flex flex-col lg:flex-row gap-8 px-4 sm:px-6 lg:pl-8 max-w-[1400px] w-full justify-between items-center pb-[80px] sm:pb-[90px] lg:pb-[100px] pt-[80px] sm:pt-[90px] md:pt-[35px] lg:-ml-4 md:pr-2">
          {/* Text Section */}
          <div className="max-w-[650px] text-white p-4 text-center md:text-left leading-none">
            <h1 className="text-[35px] sm:text-[42px] md:text-[55px] font-extrabold leading-none">
              Take AI from Imagination to Impact
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-[19px] text-semibold  leading-tight">
              We are Zeta, the AI-powered Marketing Cloud. Unlock limitless
              possibilities with our all-in-one flexible solutions, designed to
              accelerate your business growth.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-[#D9F45F] hover:bg-transparent hover:text-[#D9F45F] text-black px-8 sm:px-10 py-3 sm:py-4 rounded-xl text-lg sm:text-xl font-extrabold border-2 border-[#D9F45F] cursor-pointer transition-all duration-500 md:px-15 md:py-0">
                Why Zeta
              </button>
              <button className="bg-transparent hover:bg-white text-white hover:text-black px-8 sm:px-10 py-3 sm:py-4 rounded-xl text-lg sm:text-xl font-bold border-2 border-white cursor-pointer transition-all duration-500">
                How it Works
              </button>
            </div>
          </div>

          {/* Video Section */}
          <div className="w-full sm:w-[500px] md:w-[570px] h-auto sm:h-[300px] md:h-[340px] bg-[#252525] flex items-center justify-center rounded-2xl p-4 md:-mr-[45px]">
            <iframe
              className="w-full h-[200px] sm:h-[280px] md:w-[530px] md:h-[300px] rounded-xl"
              src="https://www.youtube.com/embed/cA29cE5P5us?autoplay=1&mute=1&loop=1&playlist=cA29cE5P5us"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
