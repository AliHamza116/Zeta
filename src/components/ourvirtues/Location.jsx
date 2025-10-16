import React from "react";

const Location = () => {
  return (
    <div className="max-w-[1400px] w-full h-auto mx-auto pt-25">
      <h1 className="text-5xl font-extrabold text-center leading-none tracking-tight pb-10">
        Office Locations
      </h1>
      
      {/* wrapper location cards  */}
      <div className="px-4 sm:px-6 lg:px-50 grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-3">
        {/* card 1 */}
        <div className="w-full max-w-xs sm:w-48 h-auto p-3 sm:p-2 hover:shadow-[0_3px_10px_rgba(0,0,0,0.25)] shadow-[0_1px_10px_rgba(0,0,0,0.25)] cursor-pointer">
          {/* location  */}
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.35196272633!2d-73.97950600000001!3d40.697141499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1755767329542!5m2!1sen!2s"
              className="w-full h-40 sm:h-36"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <h1 className="text-xl font-extrabold text-[#A8C93F] pt-2">New York HQ</h1>
          <p className="text-sm text-[#66669A] ">3 Park Ave, 33rd Floor, New York, NY 10016</p>
        </div>
        
        {/* card 2 */}
        <div className="w-full max-w-xs sm:w-48 h-auto p-3 sm:p-2 hover:shadow-[0_3px_10px_rgba(0,0,0,0.25)] shadow-[0_1px_10px_rgba(0,0,0,0.25)] cursor-pointer">
          {/* location  */}
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.35196272633!2d-73.97950600000001!3d40.697141499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1755767329542!5m2!1sen!2s"
              className="w-full h-40 sm:h-36"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <h1 className="text-xl font-extrabold text-[#A8C93F] pt-2">New York HQ</h1>
          <p className="text-sm text-[#66669A] ">3 Park Ave, 33rd Floor, New York, NY 10016</p>
        </div>
        
        {/* card 3 */}
        <div className="w-full max-w-xs sm:w-48 h-auto p-3 sm:p-2 hover:shadow-[0_3px_10px_rgba(0,0,0,0.25)] shadow-[0_1px_10px_rgba(0,0,0,0.25)] cursor-pointer">
          {/* location  */}
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.35196272633!2d-73.97950600000001!3d40.697141499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1755767329542!5m2!1sen!2s"
              className="w-full h-40 sm:h-36"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <h1 className="text-xl font-extrabold text-[#A8C93F] pt-2">New York HQ</h1>
          <p className="text-sm text-[#66669A] ">3 Park Ave, 33rd Floor, New York, NY 10016</p>
        </div>
        
        {/* card 4 */}
        <div className="w-full max-w-xs sm:w-48 h-auto p-3 sm:p-2 hover:shadow-[0_3px_10px_rgba(0,0,0,0.25)] shadow-[0_1px_10px_rgba(0,0,0,0.25)] cursor-pointer">
          {/* location  */}
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.35196272633!2d-73.97950600000001!3d40.697141499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1755767329542!5m2!1sen!2s"
              className="w-full h-40 sm:h-36"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <h1 className="text-xl font-extrabold text-[#A8C93F] pt-2">New York HQ</h1>
          <p className="text-sm text-[#66669A] ">3 Park Ave, 33rd Floor, New York, NY 10016</p>
        </div>
        
        {/* card 5 - centered on mobile and tablet, full width on desktop */}
        <div className="w-full max-w-xs sm:w-48 lg:w-48 lg:max-w-none h-auto p-3 sm:p-2 hover:shadow-[0_3px_10px_rgba(0,0,0,0.25)] shadow-[0_1px_10px_rgba(0,0,0,0.25)] cursor-pointer lg:col-span-4 justify-self-center lg:justify-self-center">
          {/* location  */}
          <div className="aspect-w-16 aspect-h-9 lg:aspect-w-21 lg:aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.35196272633!2d-73.97950600000001!3d40.697141499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1755767329542!5m2!1sen!2s"
              className="w-full h-40 sm:h-36 lg:h-48"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <h1 className="text-xl font-extrabold text-[#A8C93F] pt-2">New York HQ</h1>
          <p className="text-sm text-[#66669A] ">3 Park Ave, 33rd Floor, New York, NY 10016</p>
        </div>
      </div>

      {/* the footer of location  */}
      <div className="max-w-[1000px] w-full mx-auto py-10 mb-10 px-4 sm:px-6">
        <div className="border-t border-gray-300 mb-8"></div>

        <div className="flex flex-col lg:flex-row lg:items-end gap-6 sm:gap-8">
          <div className="flex-shrink-0 tracking-wide">
            <h2 className="text-3xl sm:text-4xl lg:text-2xl font-extrabold text-[#252626] tracking-normal leading-tight sm:w-[200px]">
              We also have <span className="text-[#A8C93F]">offices</span> in
            </h2>
          </div>

          <div className="flex-1 space-y-4">
            {/* First row of cities */}
            <div className="flex flex-wrap justify-start sm:justify-end gap-x-3 sm:gap-x-4 gap-y-2 text-sm font-semibold text-[#252626]">
              <span>Washington, D.C</span>
              <span>Bangalore</span>
              <span>San Mateo</span>
              <span>Prague</span>
              <span>Paris</span>
              <span>London</span>
              <span>Brussels</span>
            </div>

            {/* Second row of cities */}
            <div className="flex flex-wrap justify-start sm:justify-end gap-x-3 sm:gap-x-4 gap-y-1 text-sm font-semibold text-[#252626]">
              <span>Rio</span>
              <span>East Lansing</span>
              <span>Melville</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;