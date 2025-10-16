import React from "react";

const OurVision = () => {
  return (
    // wrapper
    <div className="bg-[#121310] rounded-2xl text-white max-w-[1150px] mx-auto py-10 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
      {/* img */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        <img
          src="vertue_ourvision.jpg"
          alt="ourvision"
          className="object-cover w-full sm:w-[350px] md:w-[420px] lg:w-[470px] h-[500px] sm:h-[260px] md:h-[300px] lg:h-[330px]"
        />
      </div>

      {/* content */}
      <div className="w-full lg:w-1/2 px-2 md:px-5 flex flex-col gap-4 text-center lg:text-left">
        <h1 className="text-2xl md:text-3xl lg:text-[45px] font-extrabold leading-tight lg:leading-none tracking-tight">
          Our Vision: Make Sophisticated Marketing Simple
        </h1>

        <p className="text-base md:text-lg text-[#66668B]">
          Founded in 2007 by David A. Steinberg and John Sculley (Former Apple
          CEO and Pepsi President), today our vision remains the same: help CMOs
          make the complexities of modern marketing easier. Zeta empowers
          enterprises to make smarter business decisions by combining
          proprietary AI, data, and multiple point solutions together into a
          single platform, resulting in better results for a lower cost of total
          ownership.
        </p>
      </div>
    </div>
  );
};

export default OurVision;
