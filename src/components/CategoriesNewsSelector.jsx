"use client";
import React, { useState } from "react";

export default function CategoriesNewsletterCard() {
  const [email, setEmail] = useState("");

  const categories = [
    { name: "Press Releases", active: true },
    { name: "Zeta in the News", active: false },
    { name: "Privacy Updates", active: false },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div className="w-full bg-white lg:px-4 ">
      {/* Categories Section */}
      <h1 className="text-3xl font-extrabold text-[#252626] mb-4 text-shadow hidden lg:block">
        Categories
      </h1>
      <div className="space-y-2 mb-6 hidden lg:block">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-3 cursor-pointer transition-colors ${
              category.active
                ? "bg-[#D9F45F] text-white"
                : "bg-gray-100 text-[#D9F45F] hover:bg-gray-200"
            }`}
          >
            <span className="text-lg font-medium p-1">{category.name}</span>
            {/* simple arrow icon */}
            <span className="text-sm">➔</span>
          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="space-y-4 ">
        <h1 className="text-3xl font-extrabold text-shadow text-[#252626]">
          Get the latest Zeta News
        </h1>
        <div className="bg-[#F5F5F5] p-4">
          <p className="text-[#222222] text-xl font-normal leading-tight">
            Sign up to get news, updates, research reports, and more from our
            newsletter.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2 mt-4">
              {/* <label
                htmlFor="email"
                className="text-sm text-gray-600 font-medium bg-white"
              >
                Email Address: <span className="text-red-500">*</span>
              </label> */}
              <input
                id="email"
                type="email"
                value={email}
                placeholder="Email Address: *"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white text-lg px-1 border-0 border-b border-gray-300 rounded-none py-2 focus:ring-0"
              />
            </div>
          </form>
          <p className="text-xs text-gray-500 leading-relaxed py-8">
            By clicking submit below, you consent to allow Zeta Global to store
            and process the personal information submitted above to provide you
            the content requested.{" "}
            <a href="#" className="text-blue-600 underline">
              View our full privacy policy here
            </a>
            .
          </p>
          <div className="flex justify-center">
            <button
              type="submit"
              className="flex justify-center bg-[#D9F45F] hover:bg-[#A8C93F] text-lg  cursor-pointer font-bold text-white px-6 py-1 "
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
