import React from "react";

const ZMPforMedia = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around w-full max-w-[1300px] h-auto gap-8 md:gap-10 lg:gap-20 m-auto mt-10 md:mt-20 pb-10 px-4 sm:px-6">
      {/* Image Section */}
      <div className="flex flex-col justify-start items-center md:items-start">
        <img
          src="zmp for media.png"
          alt=""
          className="object-cover w-full sm:w-[80%] md:w-[550px] p-4 sm:p-6 md:p-10"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-[650px] mt-6 md:mt-20 md:pl-10 md:pr-20 text-center md:text-left">
        <p className="text-[#D9F45F] text-lg sm:text-xl md:text-2xl font-normal">
          Imagine if…
        </p>
        <p className="text-2xl sm:text-3xl md:text-[45px] leading-tight mt-2">
          <span className="font-semibold">
            You could activate big ideas and
          </span>
          <span className="font-bold block">
            drive outcomes with confidence.
          </span>
        </p>
        <p className="mt-4 sm:mt-6 md:mt-8 mb-6 sm:mb-10 md:mb-12 text-sm sm:text-lg md:text-xl leading-relaxed">
          The Zeta Marketing Platform offers a deterministic ID graph with no
          walls, powerful intent signals, and guaranteed, measurable omnichannel
          results.
        </p>
        <button className="px-5 sm:px-7 py-3 sm:py-4 text-lg sm:text-xl md:text-2xl font-bold self-center md:self-start border border-[#D9F45F] rounded-lg bg-[#D9F45F] hover:bg-transparent text-white hover:text-[#D9F45F] cursor-pointer transition-all duration-500">
          ZMP for Media
        </button>
      </div>
    </div>
  );
};

export default ZMPforMedia;
