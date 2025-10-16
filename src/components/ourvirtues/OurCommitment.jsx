import React from 'react'

const OurCommitment = () => {
  return (
    // wrapper
    <div className="max-w-[1400px] mx-auto py-10 md:py-16 lg:py-20 px-6 md:px-12 lg:px-40 flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
      {/* img */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        <img
          src="vertur_ourcommitment.jpg"
          alt="ourcommitment"
          className="object-cover w-full sm:w-[350px] md:w-[420px] lg:w-[460px] h-[200px] sm:h-[260px] md:h-[300px] lg:h-auto"
        />
      </div>

      {/* content */}
      <div className="w-full lg:w-1/2 px-2 md:px-5 py-6 md:py-8 lg:py-10 flex flex-col gap-4 text-center lg:text-left">
        <h1 className="text-2xl md:text-3xl lg:text-[45px] font-extrabold leading-tight lg:leading-none tracking-tight">
          Our Commitment: Achieve Great Things Together
        </h1>

        <p className="text-base md:text-lg text-[#66668B]">
          Whether you are a client, investor, or member of Team Zeta, we are
          committed to achieving the best results with you. Our technology is
          amplified by our partnership as we solve the biggest challenges and
          capture the biggest opportunities, together.
        </p>
      </div>
    </div>
  )
}

export default OurCommitment
