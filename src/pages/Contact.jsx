import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({}); // ✅ Inside the component

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="mt-40 mb-10 lg:mt-30 ">
      <p className="text-6xl font-extrabold text-center mb-12 lg:mb-0 ">Contact Us</p>
      {/* wrapper div of both 2 main form divs  */}
      <div className=" max-w-[1400px] w-full h-auto mx-auto lg:p-30 p-0 flex gap-18  lg:flex-row justify-center lg:items-start items-center flex-col-reverse">
        {/* left side div  */}
       <div className="lg:w-1/2 h-auto  p-10 lg:mx-0 flex flex-col gap-5 bg-[radial-gradient(circle_at_top_left,#3c3f2d_0%,transparent_70%),radial-gradient(circle_at_bottom_right,#3c3f2d_0%,#121310_70%)]
 text-white">
          <p className="text-lg">
            If you are contacting Zeta about your Privacy Rights, please refer
            to this page{" "}
            <span className="text-[#D9F45F] cursor-pointer hover:underline">
              here
            </span>
            .
          </p>
          <h1 className="text-2xl font-black">Main Office</h1>
          <div className="flex space-x-10 items-center">
            <h1 className="text-[#D9F45F] text-xl font-extrabold">Address</h1>
            <p className="text-[#F5F5F5]">
              3 Park Ave, 33rd Floor, New York, NY 10016
            </p>
          </div>
          <div className="flex space-x-10 items-center">
            <h1 className="text-[#D9F45F] text-xl font-extrabold">Phone</h1>
            <p className="text-[#F5F5F5] ml-4 cursor-pointer hover:underline">
              212-967-5055
            </p>
          </div>
          <div className="flex space-x-10 items-center">
            <h1 className="text-[#D9F45F] text-xl font-extrabold">Email</h1>
            <p className="text-[#F5F5F5] ml-6 cursor-pointer hover:underline">
              info@zetaglobal.com
            </p>
          </div>
          {/* div containing horizontal line  */}
          <div className="w-full max-w-[100%] h-[0.2px] bg-[#F5F5F5] my-5"></div>
          <h1 className="text-2xl font-black text-shadow">Other Offices</h1>
          {/* wrapper that contain 4divs */}
          <div className="grid grid-cols-2 items-cols gap-5 -mt-2">
            <div>
              <h1 className="text-[#D9F45F] text-xl font-extrabold">
                San Francisco
              </h1>
              <p className="text-[#F5F5F5]">
                201 California Suite 200 San Francisco, CA 94111
              </p>
            </div>
            <div>
              <h1 className="text-[#D9F45F] text-xl font-extrabold">
                Los Angeles
              </h1>
              <p className="text-[#F5F5F5]">
                222 North Pacific Coast Highway, Suite 2250, El Segundo, CA
                90245
              </p>
            </div>
            <div>
              <h1 className="text-[#D9F45F] text-xl font-extrabold">
                Nashville
              </h1>
              <p className="text-[#F5F5F5]">
                Suite 04-107, 901 Woodland St, Nashville, TN 37206
              </p>
            </div>
            <div>
              <h1 className="text-[#D9F45F] text-xl font-extrabold">
                Hyderbad
              </h1>
              <p className="text-[#F5F5F5]">
                No 627-A, Rd Number 35, Venkaragiri, Jubilee Hills, Hyderabad,
                Telangana 500 033
              </p>
            </div>
            {/* div that contain horizontal line  */}
          </div>
          <div className="w-full max-w-[100%] h-[0.2px] bg-[#F5F5F5] my-5"></div>
          <div className="flex flex-wrap gap-4 text-sm font-extrabold">
            <p>Bangalaore</p>
            <p>Sao Paulo</p>
            <p>Paris</p>
            <p>Prague</p>
            <p>Brussels</p>
            <p>Prague</p>
            <p>København</p>
            <p>Berlin</p>
            <p>Munchen</p>
            <p>Madrid</p>
            <p>Gdansk</p>
            <p>Boca Raton</p>
            <p>London</p>
          </div>
        </div> 
        {/* right side div  */}
        <div className="lg:w-1/2  h-auto:mx-[130px] lg:mx-0 ">
          <div className="bg-white lg:p-8 p-2 rounded-lg ">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Reason for Contact */}
              <div>
                <label className="block text-lg font-normal text-[#66668B] mb-2">
                  Reason for Contact: <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full bg-[#F5F5F5]  border-gray-300 py-2 px-3 text-lg text-black focus:border-[#D9F45F] focus:ring-0 focus:outline-none appearance-none"
                    required
                  >
                    <option value="">Select...</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Support</option>
                    <option value="sales">Sales</option>
                    <option value="partnership">Partnership</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-[#66668B] mb-2">
                  First Name: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-gray-300 py-2 px-0 text-gray-900 placeholder-gray-400 focus:border-[#D9F45F] focus:ring-0 focus:outline-none"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-[#66668B] mb-2">
                  Last Name: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-gray-300 py-2 px-0 text-gray-900 placeholder-gray-400 focus:border-[#D9F45F] focus:ring-0 focus:outline-none"
                  required
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-medium text-[#66668B] mb-2">
                  Email Address: <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-gray-300 py-2 px-0 text-gray-900 placeholder-gray-400 focus:border-[#D9F45F] focus:ring-0 focus:outline-none"
                  required
                />
              </div>

              {/* Country */}
              <div>
                <label className="block text-lg font-normal text-[#66668B] mb-2">
                  Country: <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full bg-[#F5F5F5]  border-gray-300 py-2 px-3 text-lg text-black focus:border-[#D9F45F] focus:ring-0 focus:outline-none appearance-none"
                    required
                  >
                    <option value="">Select...</option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="uk">United Kingdom</option>
                    <option value="au">Australia</option>
                    <option value="de">Germany</option>
                    <option value="fr">France</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Comments */}
              <div>
                <label className="block text-lg font-medium text-[#66668B] mb-2">
                  Comments:
                </label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows={1}
                  className="w-full bg-transparent border-0 border-b border-gray-300 py-2 px-0 text-gray-900 placeholder-gray-400 focus:border-[#D9F45F] focus:ring-0 focus:outline-none resize-none"
                />
              </div>

              {/* Privacy Policy Text */}
              <div className="text-xs text-[#6666A9] leading-relaxed space-y-3">
                <p>
                  Zeta Global is committed to protecting and respecting your
                  privacy, and we'll only use your personal information to
                  administer your account and to provide the products and
                  services you requested from us. From time to time, we would
                  like to contact you about our products and services, as well
                  as other content that may be of interest to you. If you
                  consent to us contacting you for this purpose, please tick
                  below to say how you would like us to contact you:
                </p>

                <p>
                  You can unsubscribe from these communications at any time. For
                  more information on how to unsubscribe, our privacy practices,
                  and how we are committed to protecting and respecting your
                  privacy, please review our{" "}
                  <a href="#" className="text-[#6666A9] underline">
                    Privacy Policy
                  </a>
                  .
                </p>

                <p>
                  By clicking submit below, you consent to allow Zeta Global to
                  store and process the personal information submitted above to
                  provide you the content requested.
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  className="bg-[#D9F45F] hover:bg-[#A8C93F] text-white text-lg font-extrabold texst-shadow px-7 py-1 cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
