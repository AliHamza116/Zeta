import React from 'react'

const CultureZeta = () => {
  return (
     <div className="bg-[#F5F5F5] w-full h-auto py-25 flex lg:flex-row flex-col justify-end items-center gap-5 lg:gap-0  ">
        {/* div that contain contant of the hero section */}
        <div className="lg:w-1/2  p-10 lg:pl-45  lg:pr-25 flex flex-col lg:justify-start justify-center gap-8 text-[#00003D] ">
          <h1 className="lg:text-[45px] text-5xl font-extrabold leading-none tracking-tight">
            People & Culture at Zeta
          </h1>
          <p className="text-lg font-normal">
          Our people are an important part of what drives our success. We bring together the best and brightest minds, and foster an entrepreneurial spirit that encourages innovation and collaboration.
          </p>
           <button className="bg-[#D9F45F] hover:bg-[#A8C93F] text-lg text-white font-extrabold px-6 py-1  mr-auto cursor-pointer whitespace-nowrap ">
            Join Us
          </button>
        </div>
        <div className="lg:w-1/2 w-full flex justify-end">
          <img
            src="virtue_ourculture.webp
        "
            alt=""
            className="lg:max-w-[553px] w-full lg:max-h-[553px] h-full object-cover"
          />
        </div>
      </div>
  )
}

export default CultureZeta