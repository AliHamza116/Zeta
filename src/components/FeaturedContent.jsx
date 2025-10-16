import React, { useState } from "react";

const cards = [
  {
    img: "insights-to-answers-article-image.webp",
    title: "From Insights to Answers: Marketing’s Transformation",
  },
  {
    img: "attribution-ebook-image-768x433.webp",
    title:
      "Marketing without the Blindfold: Why Identity and AI Are the Future of Attribution",
  },
  {
    img: "reduce-distance-data-and-action.webp",
    title:
      "Reduce the Distance Between Data and Action by Combining Agents with Intelligence",
  },
];

const FeaturedContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCard = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const nextCard = () => {
    if (currentIndex < cards.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const buttonBaseClasses =
    "w-10 h-10 flex justify-center items-center rounded-full text-white transition-colors duration-300";

  const enabledClasses =
    "bg-[#CB0078] hover:bg-[#a10060] cursor-pointer border border-[#CB0078]";
  const disabledClasses =
    "bg-[#e2a6c1] cursor-not-allowed border border-[#e2a6c1]";

  return (
    <div className="bg-[#262918] rounded-2xl max-w-[1150px] mx-auto text-white flex flex-col justify-center items-center gap-10 py-20 px-4">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-[45px] font-bold text-center leading-snug">
        Stay in the Know with Our Featured Content
      </h1>

      {/* Desktop/Tablet Grid */}
      <div className="hidden lg:grid lg:grid-cols-3 sm:grid-cols-2 gap-8 max-w-[1100px] w-full">
        {cards.map((card, i) => (
          <div
            key={i}
            className="w-full h-[420px] border border-[#98AA45] rounded-xl overflow-hidden hover:shadow-[0_3px_10px_#D9F45F] cursor-pointer transition-all duration-500"
          >
            <img
              src={card.img}
              alt=""
              className="object-cover w-full h-[220px]"
            />
            <div className="px-4">
              <p className="text-lg sm:text-xl md:text-[25px] font-bold px-2 py-4">
                {card.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="lg:hidden w-full max-w-[350px] relative">
        <div className="w-full h-[420px] border border-[#E9E9E9] rounded-xl overflow-hidden shadow-md">
          <img
            src={cards[currentIndex].img}
            alt=""
            className="object-cover w-full h-[220px]"
          />
          <div className="px-4">
            <p className="text-lg font-bold px-2 py-4">
              {cards[currentIndex].title}
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-4">
          <button
            onClick={prevCard}
            disabled={currentIndex === 0}
            className={`${buttonBaseClasses} ${
              currentIndex === 0 ? disabledClasses : enabledClasses
            }`}
            aria-label="Previous"
          >
            &#x276E;
          </button>

          <button
            onClick={nextCard}
            disabled={currentIndex === cards.length - 1}
            className={`${buttonBaseClasses} ${
              currentIndex === cards.length - 1
                ? disabledClasses
                : enabledClasses
            }`}
            aria-label="Next"
          >
            &#x276F;
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedContent;
