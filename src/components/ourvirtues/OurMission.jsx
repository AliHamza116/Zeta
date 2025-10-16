import React from "react";

const OurMission = () => {
  return (
    // wrapper
    <div className="max-w-[1400px] mx-auto py-10 md:py-16 lg:py-20 px-6 md:px-12 lg:px-40 flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8 lg:gap-0">
      {/* content */}
      <div className="w-full lg:w-1/2 px-2 md:px-5 py-5 flex flex-col gap-4 text-center lg:text-left">
        <span>
          <h1 className="text-2xl md:text-3xl lg:text-[45px] font-extrabold leading-tight lg:leading-none tracking-tight">
            Our Mission:
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-[45px] font-extrabold pr-0 lg:pr-10 leading-tight lg:leading-none tracking-tight">
            Accelerate Brand Growth
          </h1>
        </span>
        <p className="text-base md:text-lg pr-0 lg:pr-5 text-[#66668B]">
          At the core of everything we do at Zeta, our focus is on enabling
          brands to build repeatable and scalable programs that accelerate
          business growth, efficiently and effectively, and drive higher ROI on
          their marketing investments.
        </p>
      </div>

      {/* img */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        <img
          src="virtue_ourmission.webp"
          alt="ourmission"
          className="object-cover w-full sm:w-[350px] md:w-[400px] lg:w-[454px] h-[500px] sm:h-[250px] md:h-[280px] lg:h-[305px]"
        />
      </div>
    </div>
  );
};

export default OurMission;
