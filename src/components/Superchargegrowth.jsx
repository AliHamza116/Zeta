import React from "react";

const Superchargegrowth = () => {
  return (
    <div className="">
    <div className="bg-[#121310] rounded-2xl text-white flex flex-col md:flex-row w-full max-w-[1150px] h-auto items-center gap-10 m-auto mt-10 md:mb-50 px-4 sm:px-6 md:py-20">
      {/* Content */}
      <div className="flex flex-col justify-start w-full md:w-[600px] md:ml-2">
        <p className="text-[#D9F45F] text-lg sm:text-xl md:text-2xl font-normal">
          Imagine if…
        </p>
        <p className="text-2xl sm:text-3xl md:text-[45px] flex flex-col leading-tight mt-2">
          <span className="font-semibold">A CMO had the power to</span>
          <span className="font-bold">supercharge growth.</span>
        </p>
        <p className="my-6 sm:my-8 text-base sm:text-lg md:text-xl w-full md:w-[570px]">
          Why leave outcomes to chance? Zeta's AI-powered marketing platform
          delivers measurable results and lowers tech ownership costs, giving
          CMOs and CFOs a clear path to higher ROI.
        </p>
        <button className="px-5 sm:px-7 py-3 sm:py-4 text-lg sm:text-xl md:text-2xl font-bold self-start border border-[#D9F45F] rounded-lg bg-[#D9F45F] hover:bg-transparent text-white hover:text-[#D9F45F] cursor-pointer transition-all duration-500">
          Zeta Marketing Platform
        </button>
      </div>

      {/* Image */}
      <div className="w-full md:w-[560px]">
        <img
          src="zeta dashborad img.png"
          alt="Zeta Dashboard"
          className="object-cover w-full h-auto"
        />
      </div>
    </div>
    </div>
  );
};

export default Superchargegrowth;
