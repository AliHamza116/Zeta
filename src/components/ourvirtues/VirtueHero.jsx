import React from 'react'

const VirtueHero = () => {
  return (
    // hero section wrapper
    <div className="bg-[radial-gradient(circle_at_top_left,#3c3f2d_0%,#121310_70%)] text-white max-w-[1400px] mx-auto flex flex-col lg:flex-row">
      {/* contact */}
      <div className="w-full lg:w-1/2 text-white] 
                      pl-6 md:pl-12 lg:pl-52 
                      pt-10 md:pt-16 lg:pt-20 
                      pr-6 md:pr-12 lg:pr-30 
                      pb-6 
                      flex flex-col gap-4 leading-tight ">
        <h1 className="text-xl md:text-2xl font-extrabold ">
          Our Story
        </h1>
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight lg:leading-none tracking-tight lg:tracking-tighter">
          We are Zeta. The AI-Powered Marketing Cloud.
        </h1>
        <p className="text-base md:text-lg lg:text-xl font-normal">
          We unify identity, intelligence, and activation to create better
          experiences for consumers and better results for brands.
        </p>
      </div>
      {/* img */}
      <div className="w-full lg:w-1/2">
        <img
          src="vertue_hero.webp"
          alt=""
          className="object-cover h-[300px] md:h-[400px] lg:h-[600px] w-full"
        />
      </div>
    </div>
  )
}

export default VirtueHero
