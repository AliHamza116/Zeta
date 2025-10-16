import React from "react";
import { Globe } from "lucide-react";
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    // footer wrapper
    <div>
     <footer
  className="bg-[#F5F5F5] mx-auto max-w-[1400px] lg:px-10 flex flex-wrap lg:flex-nowrap  items-start gap-20 pt-0 lg:pt-5
    relative before:absolute before:top-0 before:left-0 before:w-full before:h-[7px]
    before:bg-[linear-gradient(to_right,#57602B,#262918,#C4DC56,#A6BA54,#D9F45F,#216254)]
  "
>

        <div className="lg:w-[38%] lg:px-10 lg:pt-7 flex flex-col lg:items-start lg:justify-start gap-2 w-full items-center justify-center lg:py-0 py-10">
          <h1 className="text-3xl font-extrabold">Stay In The Know</h1>
          <p className="text-lg font-normal w-[85%] text-center lg:text-start ">
            Get fresh marketing insights delivered right to your inbox.
          </p>
          <div className="flex mt-4">
            <input
              type="email"
              placeholder="Email Address: *"
              className="pl-4 pr-6  py-2 bg-[#FFFFFF]"
            />
            <button className="bg-[#D9F45F] hover:bg-[#A8C93F] ">
              <svg
                cur
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="w-10 h-6 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l6 7-6 7"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <p className="text-sm font-light text-[#46466f] lg:pr-10 px-4 lg:px-0">
            By clicking submit below, you consent to allow Zeta Global to store
            and process the personal information submitted above to provide you
            the content requested. View our full{" "}
            <a href="#" className="underline ">
              privacy policy here
            </a>
          </p>
          <div className="bg-[#ADADC0] w-[95%] h-[1px] mt-4"></div>
          {/* div that contain footer svg */}

          <div className="w-[95%] flex justify-center items-cente gap-3 py-4">
            {/* LinkedIn */}
            <svg
              className="w-6 h-6 text-gray-800"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
            >
              <path d="M22.8.5H2.35C1.369.5.577 1.273.577 2.23v20.536c0 .956.792 1.734 1.772 1.734h20.452c.98 0 1.776-.778 1.776-1.73V2.23c0-.957-.797-1.73-1.776-1.73zM7.698 20.952H4.135V9.495h3.562v11.457zM5.917 7.934a2.064 2.064 0 1 1 0-4.125 2.063 2.063 0 0 1 0 4.125zm15.112 13.018H17.47v-5.57c0-1.326-.023-3.037-1.852-3.037-1.851 0-2.133 1.449-2.133 2.944v5.663H9.933V9.495h3.413v1.566h.047c.473-.9 1.636-1.852 3.365-1.852 3.605 0 4.27 2.372 4.27 5.457v6.286z"></path>
            </svg>

            {/* Facebook */}
            <svg
              className="w-6 h-6 text-gray-800"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
            >
              <path d="M24.878 12.5c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854V15.97H7.956V12.5h3.047V9.856c0-3.007 1.791-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953h-1.513c-1.491 0-1.956.925-1.956 1.875v2.25h3.328l-.532 3.469h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z"></path>
            </svg>

            {/* Twitter */}
            <svg
              className="w-6 h-6 text-gray-800"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 21"
            >
              <path d="M7.729 20.25c9.054 0 14.008-7.504 14.008-14.008 0-.211-.005-.427-.014-.638a10 10 0 0 0 2.456-2.549c-.898.4-1.85.66-2.826.773a4.95 4.95 0 0 0 2.165-2.722A9.898 9.898 0 0 1 20.392 2.3a4.93 4.93 0 0 0-8.394 4.49A13.985 13.985 0 0 1 1.852 1.65a4.93 4.93 0 0 0 1.523 6.57 4.93 4.93 0 0 1-2.23-.614v.06a4.922 4.922 0 0 0 3.95 4.829 4.893 4.893 0 0 1-2.221.084 4.934 4.934 0 0 0 4.597 3.422A9.875 9.875 0 0 1 .18 18.038a13.969 13.969 0 0 0 7.55 2.212z"></path>
            </svg>

            {/* Instagram */}
            <svg
              className="w-6 h-6 text-gray-800"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
            >
              <g clipPath="url(#a)">
                <path d="M12.48 2.66c3.206 0 3.585.015 4.846.071 1.172.052 1.805.249 2.227.413.558.215.96.478 1.378.895.422.422.68.82.895 1.378.164.422.361 1.06.413 2.227.056 1.265.07 1.645.07 4.847 0 3.206-.014 3.586-.07 4.846-.052 1.172-.249 1.805-.413 2.227-.215.558-.478.961-.895 1.378a3.69 3.69 0 0 1-1.378.895c-.422.165-1.06.361-2.227.413-1.265.056-1.645.07-4.847.07-3.206 0-3.585-.014-4.846-.07-1.172-.052-1.805-.248-2.227-.413a3.71 3.71 0 0 1-1.378-.895 3.691 3.691 0 0 1-.895-1.378c-.164-.422-.361-1.06-.413-2.227-.056-1.265-.07-1.645-.07-4.846 0-3.207.014-3.586.07-4.847.052-1.172.249-1.805.413-2.227.215-.558.478-.96.895-1.378.422-.422.82-.68 1.378-.895.422-.164 1.06-.361 2.227-.413 1.26-.056 1.64-.07 4.846-.07zm0-2.16C9.221.5 8.813.514 7.534.57c-1.275.057-2.151.263-2.91.558a5.857 5.857 0 0 0-2.129 1.388 5.88 5.88 0 0 0-1.387 2.123C.812 5.403.606 6.275.55 7.55.494 8.834.48 9.242.48 12.5s.014 3.666.07 4.945c.056 1.275.262 2.152.558 2.911.309.792.717 1.463 1.387 2.128a5.866 5.866 0 0 0 2.124 1.383c.764.296 1.635.502 2.91.558 1.28.056 1.688.07 4.946.07s3.665-.014 4.945-.07c1.275-.056 2.152-.262 2.911-.558a5.866 5.866 0 0 0 2.123-1.383 5.866 5.866 0 0 0 1.383-2.123c.296-.764.502-1.636.558-2.911.056-1.28.07-1.688.07-4.945 0-3.258-.014-3.666-.07-4.946-.056-1.275-.262-2.151-.558-2.91a5.62 5.62 0 0 0-1.373-2.133 5.867 5.867 0 0 0-2.124-1.383C19.576.838 18.704.63 17.43.575 16.145.515 15.737.5 12.48.5z"></path>
                <path d="M12.48 6.336A6.166 6.166 0 0 0 6.314 12.5a6.166 6.166 0 0 0 6.164 6.164 6.166 6.166 0 0 0 6.165-6.164 6.166 6.166 0 0 0-6.164-6.164zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zM20.326 6.092a1.44 1.44 0 1 1-2.878 0 1.44 1.44 0 0 1 2.878 0z"></path>
              </g>
              <defs>
                <clipPath id="a">
                  <path
                    d="M0 0h24v24H0z"
                    transform="translate(.48 .5)"
                    fill="#fff"
                  ></path>
                </clipPath>
              </defs>
            </svg>
            <img
              src="zeta_logoPrimary.svg"
              alt=""
              className="w-[35%] h-[60%] "
            />
          </div>
        </div>
        <div className="">
          <div className="w-[80%] lg:mx-0 mx-auto grid grid-cols-2 gap-20 px-4 py-6 lg:py-8 md:grid-cols-2 justify-items-between">
            {/* imp links  */}
            <div>
              <h2 className="mb-6 text-lg cursor-pointer hover:underline leading-tight font-extrabold text-black uppercase">
                Important Links
              </h2>
              <ul className="text-black text-lg">
                <li className="mb-3">
                <NavLink
                to="/"
                className={() =>
                  ` hover:underline`
                }
              >
                Home
              </NavLink>
                </li>
                <li className="mb-3">
                <NavLink
                to="/press&news"
                className={() =>
                  ` hover:underline `
                }
              >
                Press&News
              </NavLink>
                </li>
                <li className="mb-3">
                <NavLink
                to="/contact"
                className={() =>
                  `hover:underline`
                }
              >
                Contact Us
              </NavLink>
                </li>
                
                <li className="mb-3">
                <NavLink
                to="/ourvirtues"
                className={({ isActive }) =>
                  `hover:underline`
                }
              >
                Our Virtues
              </NavLink>
                </li>
                <li className="mb-3">
                <NavLink
                to="/industries"
                className={() =>
                  ` hover:underline`
                }
              >
                Industries
              </NavLink>
                </li>
              </ul>
            </div>
            {/* contact column  */}
            <div>
              <h2 className="mb-6 text-lg cursor-pointer hover:underline leading-tight font-extrabold text-black uppercase ">
               Contact
              </h2>
              <ul className="text-black text-lg">
                <li className="mb-3">
                  <a href="#" className="hover:underline">
                  923216660804
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="hover:underline">
                  923054761704
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="hover:underline">
                  923035196899
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="hover:underline">
                  info@ZetaGlobalCorp.com
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="hover:underline">
                  1nd floor, New Yourk park, East service road, Block B, colony no. 1 , America.
                  </a>
                </li>
              </ul>
            </div>
           
           
           
          </div>
        </div>
      </footer>
      <div className="bg-gray-50 border-t border-gray-200 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-1">
          {/* Left side - Footer links */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-800 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-800 transition-colors">
              Terms & Conditions
            </a>
            {/* <a href="#" className="hover:text-gray-800 transition-colors">
              Acceptable Use Policy
            </a>
            <a href="#" className="hover:text-gray-800 transition-colors">
              UnsubCentral®
            </a>
            <a href="#" className="hover:text-gray-800 transition-colors">
              Cookies Settings
            </a> */}
            <div className="flex items-center gap-2 text-sm text-gray-600 lg:mr-50">
              <Globe className="w-4 h-4" />
              <span>English</span>
            </div>
          </div>

          {/* Center - Language selector */}

          {/* Right side - Copyright */}
          <div className="text-sm text-gray-600 pr-3">
            © 2025 Zeta Global Corp.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
