import React from "react";

const HelpingTopBrand = () => {
  const brandLogos = [
    { src: "taxact@2x.webp", width: 100, height: 100 },
    { src: "us-news-2.svg", width: 110, height: 45 },
    { src: "bmw@2x.webp", width: 120, height: 90 },
    { src: "cnn@2x.webp", width: 100, height: 100 },
    { src: "jaguar@2x.webp", width: 130, height: 50 },
    { src: "New_Bloomberg_Logo.svg", width: 125, height: 45 },
    { src: "citizens@2x.webp", width: 110, height: 42 },
    { src: "cnbc-logo.svg", width: 120, height: 48 },
    { src: "tjx-small.svg", width: 100, height: 40 },
  ];

  return (
    <div className="flex flex-col gap-8 px-4 sm:px-6 md:px-8 mt-[300px] md:mt-[120px] ">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-[#878787] font-bold text-[28px] sm:text-[36px] md:text-[45px] leading-tight mb-2">
          <span>Helping Top Brands </span>
         <span className="bg-gradient-to-r from-[#57602B] via-[#262918] via-[#C4DC56] via-[#A6BA54] via-[#D9F45F] to-[#216254] bg-clip-text text-transparent">
  Achieve the Impossible
</span>

        </h2>
        <p className="mt-4 text-3xl">TRUSTED BY:</p>
      </div>

      {/* Middle Images */}
      <div className="flex flex-col md:flex-row items-center justify-center max-w-[1100px] mx-auto gap-6 w-full">
        <img
          src="fortune-1002.webp"
          alt="fortune"
          className="w-[80%] sm:w-1/2 max-w-[900px] p-4"
        />

        {/* Separator - vertical on desktop, horizontal on mobile/tablet */}
        <div className="bg-black md:h-[240px] md:w-0 md:border md:border-black md:mx-3 w-[80%] h-0 border border-black sm:w-[60%]" />

        <img
          src="holdco-2x.webp"
          alt="holdco"
          className="w-[80%] sm:w-1/2 max-w-[900px] p-4"
        />
      </div>

      {/* Logo Slider */}
      <div className="overflow-hidden whitespace-nowrap py-8 sm:py-10 bg-white">
        <div className="animate-slide flex w-max space-x-10 sm:space-x-20 items-center">
          {[...brandLogos, ...brandLogos].map((logo, index) => (
            <img
              key={index}
              src={`/${logo.src}`}
              alt={logo.src}
              style={{
                width: `${logo.width}px`,
                height: `${logo.height}px`,
              }}
              className="object-contain grayscale opacity-50 transition duration-300 hover:opacity-80"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpingTopBrand;
