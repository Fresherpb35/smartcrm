// src/components/layout/Footer.jsx

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-16 pb-10"> {/* dark navy/blue-gray */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Main content - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          
          {/* Left column: Logo + Description */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              {/* Blue circle logo icon */}
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                I
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Insyght
              </h3>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              The complete business management solution for modern enterprises. 
              Streamline operations, boost productivity, and drive growth with 
              AI-powered insights.
            </p>
          </div>

          {/* Middle column: Product */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">
              Product
            </h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors cursor-pointer">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors cursor-pointer">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors cursor-pointer">
                  Demo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors cursor-pointer">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Right column: Company */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">
              Company
            </h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors cursor-pointer">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors cursor-pointer">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors cursor-pointer">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors cursor-pointer">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Horizontal line */}
        <div className="border-t border-slate-800 my-10 md:my-12"></div>

        {/* Bottom copyright - centered */}
        <div className="text-center text-sm text-slate-500">
          © 2024 Insyght. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;