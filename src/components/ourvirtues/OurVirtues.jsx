import React from "react";

const OurVirtues = () => {
  return (
    <div className="bg-[#121310] rounded-2xl text-white max-w-[1150px] bg- w-full h-auto space-y-8 md:space-y-10 px-4 md:px-8 lg:px-0 mx-auto md:py-10">
      {/* heading + text */}
      <span className="flex flex-col justify-center items-center text-center gap-3 md:gap-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
          Our Virtues
        </h1>
        <p className="text-base md:text-lg px-2 sm:px-6 md:px-12 lg:px-0">
          Our company virtues are embodied by every member of Team Zeta. They
          drive our decision making and are the foundation of our culture.
        </p>
      </span>

      {/* image */}
      <div>
        <img
          src="virtue_ourvirtue.webp"
          alt="our virtues"
          className="object-cover w-full h-auto"
        />
      </div>
    </div>
  );
};

export default OurVirtues;
