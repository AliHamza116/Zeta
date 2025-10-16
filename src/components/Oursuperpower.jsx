import React, { useState, useEffect, useRef } from "react";

const Oursuperpower = () => {
  const sectionRef = useRef(null);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);

  const counters = [
    { target: 12.7, suffix: "B+", decimals: 1 },
    { target: 1, suffix: "T+", decimals: 0 },
    { target: 240, suffix: "M+", decimals: 0 },
    { target: 950, suffix: "+", decimals: 0 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (hasAnimated) {
      counters.forEach((counter, index) => {
        let start = 0;
        const end = counter.target;
        const duration = 1000;
        const stepTime = 10;
        const increment = end / (duration / stepTime);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          setCounts((prev) => {
            const updated = [...prev];
            updated[index] = parseFloat(start.toFixed(counter.decimals));
            return updated;
          });
        }, stepTime);
      });
    }
  }, [hasAnimated]);

  return (
    <div className="w-full h-auto max-w-[1400px] bg-[#F9FAFC] py-10 sm:py-16 md:py-20 flex flex-col gap-4 mx-auto px-4">
      {/* Heading */}
      <div className="w-full h-auto mx-auto flex justify-center">
        <p className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-center leading-tight">
          <span>Our Superpower is </span>
          <span className="bg-gradient-to-r from-[#57602B] via-[#262918] via-[#C4DC56] via-[#A6BA54] via-[#D9F45F] to-[#216254] bg-clip-text text-transparent">
            AI-Powered Marketing
          </span>
        </p>
      </div>

      {/* Marketing Platform Section */}
      <div className="w-full max-w-[1030px] m-auto mt-8 sm:mt-10 flex flex-col items-center shadow-xl rounded-xl overflow-hidden">
        <div className="w-full h-3 text-center bg-[linear-gradient(to_right,_#57602B,_#262918,_#C4DC56,_#A6BA54,_#D9F45F,_#216254)]"></div>

        <div className="bg-[#FEFEFE] w-full px-4 py-6 sm:py-8 text-center flex flex-col gap-8 sm:gap-10">
          <div className="flex flex-col gap-4 px-2 sm:px-5">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Zeta Marketing Platform
            </p>
            <p className="text-base sm:text-lg md:text-xl">
              The ZMP unifies Identity, Intelligence, & Activation for better
              consumer experiences and greater brand results.
            </p>
            <button className="border border-[#2A2A2A] hover:border-[#D9F45F] hover:text-white hover:bg-[#D9F45F] px-4 py-2 rounded-lg cursor-pointer self-center transition-all duration-500 text-sm sm:text-base">
              Explore
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 py-6 sm:py-10">
            {[
              {
                title: "Data Management",
                short: "CDP",
                desc: "Create individualized experiences and drive better results throughout the customer lifecycle.",
                hover: "#262918",
                btn: "Connect",
              },
              {
                title: "Messaging",
                short: "ESP",
                desc: "Unlock AI-powered personalization across all your customer touchpoints with the leading ESP.",
                hover: "#D9F45F",
                btn: "Engage",
              },
              {
                title: "Activation",
                short: "DSP",
                desc: "Harness the full potential of paid media to fuel customer acquisition and long-term loyalty across all channels.",
                hover: "#C17142",
                btn: "Discover",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group w-full sm:w-[300px] md:w-[310px] h-auto py-5 px-6 border-t-[20px] rounded-xl text-left space-y-2 bg-[#F9FAFC] transition-all duration-300"
                style={{
                  "--hover-color": item.hover,
                  borderTopColor: "#D9D9D9",
                }}
              >
                {/* Change border color on hover */}
                <style>{`
                  .group:hover {
                    border-top-color: var(--hover-color) !important;
                  }
                `}</style>

                {/* Fixed Title + Short */}
                <div
                  className={`flex ${
                    i === 0 ? "flex-col" : "flex-col lg:flex-row"
                  } gap-1 justify-start items-start lg:items-start mt-5`}
                >
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                    {item.title}
                  </h1>
                  <p className="text-2xl sm:text-3xl md:text-4xl text-black transition-colors duration-300 group-hover:text-[var(--hover-color)]">
                    {item.short}
                  </p>
                </div>

                <p className="text-base sm:text-lg mt-5 mb-5">{item.desc}</p>
                <button
                  className="
    border border-[#2A2A2A] bg-[#FFFFFF] text-black px-4 py-1.5 rounded-lg cursor-pointer transition-all duration-500
    group-hover:border-[var(--hover-color)] group-hover:text-[var(--hover-color)] hover:bg-[var(--hover-color)] hover:text-white
    w-full m-[2px] md:w-auto md:m-0
  "
                >
                  {item.btn}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Zeta data by the numbers */}
      <div ref={sectionRef} className="mt-12 sm:mt-16 md:mt-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#878787] font-bold text-center">
          Zeta data by the numbers
        </h1>
        <div
          className="
      max-w-[1030px] h-auto mx-auto mt-8 sm:mt-10
      grid grid-cols-2 md:flex md:flex-row
      items-center justify-center gap-4 text-center
      px-10 py-4 shadow-xl bg-[#FFFFFF] rounded-xl
    "
        >
          {counters.map((counter, i) => (
            <React.Fragment key={i}>
              <div
                className={`
            p-5 flex flex-col justify-end items-center gap-2 w-full md:w-auto
            ${
              /* Add right border on first column items (0,2) only for mobile/tablet */
              i === 0 || i === 2 ? "border-r border-[#DEDEDE] md:border-0" : ""
            }
          `}
              >
                <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#D9F45F] ">
                  {counts[i]}
                  {counter.suffix}
                </p>
                <p className="text-sm sm:text-base md:text-xl">
                  {i === 0 && "Unique global identifiers"}
                  {i === 1 && "Content consumption signals per month"}
                  {i === 2 && "People in the United States"}
                  {i === 3 && "Interest and intent audiences"}
                </p>
              </div>

              {/* Vertical separators for desktop (same as before) */}
              {i < counters.length - 1 && (
                <div className="hidden md:block w-px h-20 bg-[#DEDEDE]"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Oursuperpower;
