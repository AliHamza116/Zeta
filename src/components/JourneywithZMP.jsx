import React from "react";

const JourneywithZMP = () => {
  return (
    <div
      className="max-w-[1400px] mx-auto md:px-20 px-2 py-15 flex flex-col justify-center items-center text-center  bg-[#F5F5F5] gap-5 
                "
    >
      <h1 className="text-[25px] font-bold">
        Your Journey with the ZMP Starts Here
      </h1>
      <p className="text-xl px-6 md:px-0">
        Schedule a demo with one of our experts or chat with a Zeta rep for more
        information.
      </p>
      <div className="flex gap-8 mt-5 flex-col lg:flex-row w-full lg:w-auto lg:items-center">
        <button className="w-[90%] rounded-4xl mx-auto lg:rounded-lg lg:w-auto  px-4 py-2 text-md font-semibold text-[#262918] hover:text-white bg-[#D9F45F] hover:bg-[#A8C93F] cursor-pointer transition-all duration-300">
          Request Demo
        </button>
        <button className="w-[90%] rounded-4xl mx-auto lg:rounded-lg  lg:w-auto px-4 py-2 text-md font-semibold text-[#262918] bg-transparent border hover:border-[#D9F45F] hover:bg-[#D9F45F] hover:text-white cursor-pointer transition-all duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default JourneywithZMP;