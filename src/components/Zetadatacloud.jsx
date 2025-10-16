import React from "react";

const Zetadatacloud = () => {
  return (
    <div className="bg-[#121310] rounded-2xl text-white flex flex-col-reverse md:flex-row w-full max-w-[1150px] max-h-auto items-center gap-10 md:gap-20 lg:gap-40 m-auto mt-10 px-4 md:py-20 sm:px-6 md:mb-40">
      {/* Text Section */}
      <div className="flex flex-col justify-start w-full md:w-[600px] md:ml-2 lg:ml-2 text-center md:text-left">
        <p className="text-[#D9F45F] text-lg sm:text-xl md:text-2xl font-normal">
          Imagine if…
        </p>
        <p className="text-2xl sm:text-3xl md:text-[45px] flex flex-col leading-tight mt-2">
          <span className="font-semibold">Every customer interaction</span>
          <span className="font-bold">
            felt like a conversation with an old friend.
          </span>
        </p>
        <p className="my-4 sm:my-6 md:my-8 text-sm sm:text-lg md:text-xl w-full md:w-[570px] mx-auto md:mx-0 leading-relaxed">
          Zeta’s proprietary data, identity resolution, and actionable
          intelligence—now including LiveIntent—are revolutionizing advancements
          in personalization.
        </p>
        <button className="px-5 sm:px-7 py-3 sm:py-4 text-lg sm:text-xl md:text-2xl font-bold self-center md:self-start border border-[#D9F45F] rounded-lg bg-[#D9F45F] hover:bg-transparent text-white hover:text-[#D9F45F] cursor-pointer transition-all duration-500">
          Zeta Data Cloud & Identity
        </button>
      </div>

      {/* Image Section */}
      <div className="relative w-full sm:w-[90%] md:w-[500px] lg:w-[800px] mt-6 md:mt-10">
        {/* Base PNG Image */}
        <img
          src="zeta data cloud and entity.png"
          alt="Base"
          className="object-cover w-full"
        />

        {/* Overlay WEBP Image */}
        <img
          src="zeta cloud and identity img.webp"
          alt="Overlay"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[790px] md:h-[400px]"
        />
      </div>
    </div>
  );
};

export default Zetadatacloud;
