import { Globe } from "lucide-react";
const FooterBottom = () => {
  return (
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
        <div className="text-sm text-gray-600 pr-3">© 2025 Zeta Global Corp.</div>
      </div>
    </div> 
  );
};

export default FooterBottom;
