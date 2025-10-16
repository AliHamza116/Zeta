import React from "react";
import CategoriesNewsletterCard from "../components/CategoriesNewsSelector";

const Press_News = () => {
  // const [email, setEmail] = useState("");

  const categories = [{ name: "Press Releases", active: true }];

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Email submitted:", email);
  // };
  return (
    <div className="mt-0 ">
      {/* hero section */}
      <div className="bg-[radial-gradient(circle_at_top_left,#3c3f2d_0%,#121310_70%)] text-white w-full h-auto flex lg:flex-row flex-col justify-center items-center gap-5 lg:gap-0 pt-23 ">
        {/* div that contain contant of the hero section */}
        <div className="lg:w-1/2  p-10 lg:pl-50  lg:pr-30 flex flex-col lg:justify-start justify-center gap-4 ">
          <h1 className="lg:text-6xl text-5xl font-extrabold leading-none">
            Zeta In the News
          </h1>
          <p className="text-lg font-normal">
            Read about the most recent Zeta announcements, product and
            innovation updates, and media coverage.
          </p>
        </div>
        <div className="lg:w-1/2 w-full">
          <img
            src="press&news_herosectionimg.webp
        "
            alt=""
            className="lg:max-w-[650px] w-full lg:max-h-[500px] h-full object-cover"
          />
        </div>
      </div>
      {/* a horizontal line after hero section  */}
      <div className="max-w-[1100px] w-full h-[0.2px] mx-auto bg-[#66668B] my-20 "></div>
      {/* div for responsiveness  */}
      <div className="lg:hidden flex flex-col px-10">
        <h1 className="text-3xl font-extrabold text-[#252626] mb-4 text-shadow">
          Categories
        </h1>
        <div className="space-y-2 mb-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-3 cursor-pointer transition-colors ${
                category.active
                  ? "bg-gray-100 text-[#D9F45F] hover:bg-gray-200"
                  : "bg-[#D9F45F] text-white"
              }`}
            >
              <span className="text-lg font-medium p-1">{category.name}</span>
              {/* simple arrow icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
      {/* div after horizontal line that contain 2 main divs */}
      <div className="max-w-[1400px] w-full h-auto lg:px-20 px-10 mx-auto my-10 flex lg:flex-row flex-col gap-8 lg:gap-0">
        {/*wrapper div that contain cards */}
        <div className="flex-[3] flex flex-col gap-5">
          {/* card 1 */}
          <div className="relative lg:p-6 px-2 py-6 shadow-[0_3px_10px_rgba(0,0,0,0.25)] bg-white group transition-colors duration-300">
            {/* Gradient left border */}
            <div className="absolute lg:block hidden left-0 top-0 bottom-0 w-[5px] bg-[linear-gradient(to_bottom,#57602B,#262918,#C4DC56,#A6BA54,#D9F45F,#216254)]
" />

            <div className="ml-4">
              {/* Category label */}
              <div className="text-sm text-[#66668B] font-bold mb-1">
                Press Releases
              </div>
              <div className="w-23 h-[0.2px] bg-[#D9F45F] mb-4"></div>

              {/* Main headline */}
              <h2 className="lg:text-lg text-2xl font-extrabold text-[#00003D] mb-4 leading-tight group-hover:text-[#D9F45F] cursor-pointer">
                Zeta Global Reports 16th Straight "Beat and Raise" Quarter
              </h2>

              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed lg:block hidden ">
                Delivered revenue of $308M, an increase of 35% Y/Y, exceeding
                midpoint of guidance by $11M Generated net cash provided by
                operating activities of $42M, an increase of 35% Y/Y, and Free
                Cash Flow of $34M, an increase of 69%…
              </p>

              {/* Meta information */}
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>August 5, 2025</span>
                <span>|</span>
                <span>11 min read</span>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className="relative lg:p-6 px-2 py-6 shadow-[0_3px_10px_rgba(0,0,0,0.25)] bg-white group transition-colors duration-300">
            {/* Gradient left border */}
            <div className="absolute lg:block hidden left-0 top-0 bottom-0 w-[5px] bg-[linear-gradient(to_bottom,#57602B,#262918,#C4DC56,#A6BA54,#D9F45F,#216254)]
" />

            <div className="ml-4">
              {/* Category label */}
              <div className="text-sm text-[#66668B] font-bold mb-1">
                Press Releases
              </div>
              <div className="w-23 h-[0.2px] bg-[#D9F45F] mb-4"></div>

              {/* Main headline */}
              <h2 className="lg:text-lg text-2xl font-extrabold text-[#00003D] mb-4 leading-tight group-hover:text-[#D9F45F] cursor-pointer">
                Zeta Global Reports 16th Straight "Beat and Raise" Quarter
              </h2>

              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed lg:block hidden">
                Delivered revenue of $308M, an increase of 35% Y/Y, exceeding
                midpoint of guidance by $11M Generated net cash provided by
                operating activities of $42M, an increase of 35% Y/Y, and Free
                Cash Flow of $34M, an increase of 69%…
              </p>

              {/* Meta information */}
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>August 5, 2025</span>
                <span>|</span>
                <span>11 min read</span>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className="relative lg:p-6 px-2 py-6 shadow-[0_3px_10px_rgba(0,0,0,0.25)] bg-white group transition-colors duration-300">
            {/* Gradient left border */}
            <div className="absolute lg:block hidden left-0 top-0 bottom-0 w-[5px] bg-[linear-gradient(to_bottom,#57602B,#262918,#C4DC56,#A6BA54,#D9F45F,#216254)]
" />

            <div className="ml-4">
              {/* Category label */}
              <div className="text-sm text-[#66668B] font-bold mb-1">
                Press Releases
              </div>
              <div className="w-23 h-[0.2px] bg-[#D9F45F] mb-4"></div>

              {/* Main headline */}
              <h2 className="lg:text-lg text-2xl font-extrabold text-[#00003D] mb-4 leading-tight group-hover:text-[#D9F45F] cursor-pointer">
                Zeta Global Reports 16th Straight "Beat and Raise" Quarter
              </h2>

              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed lg:block hidden">
                Delivered revenue of $308M, an increase of 35% Y/Y, exceeding
                midpoint of guidance by $11M Generated net cash provided by
                operating activities of $42M, an increase of 35% Y/Y, and Free
                Cash Flow of $34M, an increase of 69%…
              </p>

              {/* Meta information */}
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>August 5, 2025</span>
                <span>|</span>
                <span>11 min read</span>
              </div>
            </div>
          </div>
          {/* card 4 */}
          <div className="relative lg:p-6 px-2 py-6 shadow-[0_3px_10px_rgba(0,0,0,0.25)] bg-white group transition-colors duration-300">
            {/* Gradient left border */}
            <div className="absolute lg:block hidden left-0 top-0 bottom-0 w-[5px] bg-[linear-gradient(to_bottom,#57602B,#262918,#C4DC56,#A6BA54,#D9F45F,#216254)]
" />

            <div className="ml-4">
              {/* Category label */}
              <div className="text-sm text-[#66668B] font-bold mb-1">
                Press Releases
              </div>
              <div className="w-23 h-[0.2px] bg-[#D9F45F] mb-4"></div>

              {/* Main headline */}
              <h2 className="lg:text-lg text-2xl font-extrabold text-[#00003D] mb-4 leading-tight group-hover:text-[#D9F45F] cursor-pointer">
                Zeta Global Reports 16th Straight "Beat and Raise" Quarter
              </h2>

              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed lg:block hidden">
                Delivered revenue of $308M, an increase of 35% Y/Y, exceeding
                midpoint of guidance by $11M Generated net cash provided by
                operating activities of $42M, an increase of 35% Y/Y, and Free
                Cash Flow of $34M, an increase of 69%…
              </p>

              {/* Meta information */}
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>August 5, 2025</span>
                <span>|</span>
                <span>11 min read</span>
              </div>
            </div>
          </div>
          {/* card 5 */}
          <div className="relative lg:p-6 px-2 py-6 shadow-[0_3px_10px_rgba(0,0,0,0.25)] bg-white group transition-colors duration-300">
            {/* Gradient left border */}
            <div className="absolute lg:block hidden left-0 top-0 bottom-0 w-[5px] bg-[linear-gradient(to_bottom,#57602B,#262918,#C4DC56,#A6BA54,#D9F45F,#216254)]
" />

            <div className="ml-4">
              {/* Category label */}
              <div className="text-sm text-[#66668B] font-bold mb-1">
                Press Releases
              </div>
              <div className="w-23 h-[0.2px] bg-[#D9F45F] mb-4"></div>

              {/* Main headline */}
              <h2 className="lg:text-lg text-2xl font-extrabold text-[#00003D] mb-4 leading-tight group-hover:text-[#D9F45F] cursor-pointer">
                Zeta Global Reports 16th Straight "Beat and Raise" Quarter
              </h2>

              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed lg:block hidden">
                Delivered revenue of $308M, an increase of 35% Y/Y, exceeding
                midpoint of guidance by $11M Generated net cash provided by
                operating activities of $42M, an increase of 35% Y/Y, and Free
                Cash Flow of $34M, an increase of 69%…
              </p>

              {/* Meta information */}
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>August 5, 2025</span>
                <span>|</span>
                <span>11 min read</span>
              </div>
            </div>
          </div>
          {/* card 6 */}
          <div className="relative lg:p-6 px-2 py-6 shadow-[0_3px_10px_rgba(0,0,0,0.25)] bg-white group transition-colors duration-300">
            {/* Gradient left border */}
            <div className="absolute lg:block hidden left-0 top-0 bottom-0 w-[5px] bg-[linear-gradient(to_bottom,#57602B,#262918,#C4DC56,#A6BA54,#D9F45F,#216254)]
" />

            <div className="ml-4">
              {/* Category label */}
              <div className="text-sm text-[#66668B] font-bold mb-1">
                Press Releases
              </div>
              <div className="w-23 h-[0.2px] bg-[#D9F45F] mb-4"></div>

              {/* Main headline */}
              <h2 className="lg:text-lg text-2xl font-extrabold text-[#00003D] mb-4 leading-tight group-hover:text-[#D9F45F] cursor-pointer">
                Zeta Global Reports 16th Straight "Beat and Raise" Quarter
              </h2>

              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed lg:block hidden">
                Delivered revenue of $308M, an increase of 35% Y/Y, exceeding
                midpoint of guidance by $11M Generated net cash provided by
                operating activities of $42M, an increase of 35% Y/Y, and Free
                Cash Flow of $34M, an increase of 69%…
              </p>

              {/* Meta information */}
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>August 5, 2025</span>
                <span>|</span>
                <span>11 min read</span>
              </div>
            </div>
          </div>
          {/* card 7 */}
          <div className="relative lg:p-6 px-2 py-6 shadow-[0_3px_10px_rgba(0,0,0,0.25)] bg-white group transition-colors duration-300">
            {/* Gradient left border */}
            <div className="absolute lg:block hidden left-0 top-0 bottom-0 w-[5px] bg-[linear-gradient(to_bottom,#57602B,#262918,#C4DC56,#A6BA54,#D9F45F,#216254)]
" />

            <div className="ml-4">
              {/* Category label */}
              <div className="text-sm text-[#66668B] font-bold mb-1">
                Press Releases
              </div>
              <div className="w-23 h-[0.2px] bg-[#D9F45F] mb-4"></div>

              {/* Main headline */}
              <h2 className="lg:text-lg text-2xl font-extrabold text-[#00003D] mb-4 leading-tight group-hover:text-[#D9F45F] cursor-pointer">
                Zeta Global Reports 16th Straight "Beat and Raise" Quarter
              </h2>

              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed lg:block hidden">
                Delivered revenue of $308M, an increase of 35% Y/Y, exceeding
                midpoint of guidance by $11M Generated net cash provided by
                operating activities of $42M, an increase of 35% Y/Y, and Free
                Cash Flow of $34M, an increase of 69%…
              </p>

              {/* Meta information */}
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>August 5, 2025</span>
                <span>|</span>
                <span>11 min read</span>
              </div>
            </div>
          </div>
          <button className="bg-[#D9F45F] hover:bg-[#A8C93F] text-xl font-semibold text-white px-6 py-2  mx-auto cursor-pointer whitespace-nowrap ">
            Load More
          </button>
        </div>
        {/* div for categories and latest zeta news  */}
        <div className="flex-[1] flex lg:block justify-center items-center">
          <CategoriesNewsletterCard />
        </div>
      </div>
    </div>
  );
};

export default Press_News;
