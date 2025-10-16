import React from "react";

const ZetaAIans = () => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 bg-white w-[90%] md:max-w-[1065px] h-auto flex flex-col md:flex-row justify-between items-center rounded-2xl shadow-xl -mt-15 px-4 py-6 md:py-3 gap-4 md:gap-0 mx-auto">
      
      {/* Left: Image + Heading */}
      <div className="flex flex-col sm:flex-row justify-center md:justify-between items-center w-full md:w-[450px] text-center sm:text-left gap-4">
        <img
          src="home-thumb-1-border.jpg"
          alt=""
          className="w-[120px] h-[80px] sm:w-[150px] sm:h-[100px] rounded-md"
        />
        <h1 className="font-bold text-[22px] sm:text-[26px] md:text-[30px]">
          Zeta AI Answer
        </h1>
      </div>

      {/* Divider (hidden on mobile) */}
      <div className="hidden md:block bg-black h-[80px] w-0 border border-black mx-3"></div>

      {/* Right: Text + Button */}
      <div className="flex flex-col sm:flex-row justify-center md:justify-between items-center w-full md:w-[565px] p-2 gap-4 text-center sm:text-left">
        <p className="text-sm sm:text-base md:text-lg max-w-[500px]">
          Making a new era in Agentic Marketing where intelligence predicts
          outcomes and autonomously acts.
        </p>
        <button
          className="border border-[#D9F45F] text-[#D9F45F] hover:text-white hover:bg-[#D9F45F] px-4 py-2 rounded-lg cursor-pointer transition-all duration-500 whitespace-nowrap"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ZetaAIans;
