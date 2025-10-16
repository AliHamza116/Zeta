import React from "react";

const ZetaAIagent = () => {
  return (
    <div className="  flex  flex-col-reverse md:flex-row justify-center md:justify-around w-full max-w-[1300px] h-auto gap-6 md:gap-10 md:mb-40 m-auto mt-10 px-4 sm:px-6">
      {/* Image */}
      <div className="flex flex-col items-center md:items-start">
        <img
          src="zeta ai agent pic.png"
          alt="Zeta AI Agent"
          className="object-cover w-[280px] sm:w-[350px] md:w-[420px] p-4 sm:p-6"
        />
      </div>

      {/* Circle (MW) */}
      <div className="w-[35px] sm:w-[40px] h-[35px] sm:h-[40px] bg-[#E9E9E9] rounded-full flex justify-center items-center md:mt-52 md:-ml-10 self-center md:self-start">
        <p className="text-[10px] sm:text-[12px] text-[#878787] font-semibold">MW</p>
      </div>

      {/* Text Content */}
      <div className="w-full md:w-[700px] mt-6 md:mt-20 md:pl-10 md:pr-20 text-center md:text-left">
        <p className="text-[#D9F45F] text-lg sm:text-xl md:text-2xl font-normal">
          Imagine if…
        </p>
        <p className="text-xl sm:text-3xl md:text-[45px] leading-tight mt-2">
          <span className="font-semibold">
            Solving every marketing challenge was
          </span>{" "}
          <span className="font-bold">
            automated, precise, and lightning-fast.
          </span>
        </p>
        <p className="mt-4 sm:mt-6 md:mt-8 mb-8 sm:mb-10 md:mb-12 text-sm sm:text-lg md:text-xl leading-relaxed">
          With Zeta's AI Agents, the future is here. From uncovering profitable
          strategies to automating workflows and messaging, our Agents increase
          efficiency and transform your marketing for greater impact.
        </p>
        <button className="px-5 sm:px-7 py-3 sm:py-4 text-lg sm:text-xl md:text-2xl font-bold border border-[#D9F45F] rounded-lg bg-[#D9F45F] hover:bg-transparent text-white hover:text-[#D9F45F] cursor-pointer transition-all duration-500">
          Zeta AI Agents
        </button>
      </div>
    </div>
  );
};

export default ZetaAIagent;
