// src/pages/Forgot.jsx  (or wherever you place it)
import React from 'react';
import Logo from "../../components/Logo";  // assuming you have this component

const Forgot = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("OTP verification submitted");
  };

  return (
    <div className="min-h-screen bg-[#e0f2fe] flex flex-col">
      {/* Responsive Header */}
      <header className="w-full px-5 sm:px-8 md:px-12 py-4 md:py-6 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo on left */}
          <div className="flex-shrink-0">
            <Logo />  {/* Your Logo component – blue circle + text */}
          </div>

          {/* Back link on right */}
          <a
            href="/"
            className="
              text-blue-600 text-sm sm:text-base 
              font-medium hover:text-blue-800 
              transition-colors flex items-center gap-1.5
            "
          >
            <span className="hidden sm:inline">←</span> Back to Home
          </a>
        </div>
      </header>

      {/* Main Content - Centered Form */}
      <main className="flex-1 flex items-center justify-center px-5 py-10 md:py-0">
        <div className="w-full max-w-md sm:max-w-lg p-6 sm:p-8 md:p-10 bg-white rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2">
            Connect to your Business
          </h2>
          <p className="text-center text-gray-600 mb-8 md:mb-10">
            by <span className="text-blue-600 font-semibold">Signing In via OTP</span>
          </p>

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Business Name*
              </label>
              <input
                type="text"
                placeholder="Enter exact Business Name"
                className="
                  w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400
                  transition-all
                "
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email*
              </label>
              <input
                type="email"
                placeholder="Enter Email address"
                className="
                  w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400
                  transition-all
                "
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                OTP*
              </label>
              <input
                type="text"
                placeholder="Enter OTP sent on mail"
                className="
                  w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400
                  transition-all
                "
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Role*
              </label>
              <select
                className="
                  w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400
                  transition-all bg-white text-gray-700
                "
                required
              >
                <option value="">Select your role</option>
                <option>Staff Manager</option>
                <option>Admin</option>
                <option>Employee</option>
                {/* You can add more roles here if needed */}
              </select>
            </div>

            {/* Resend OTP link */}
            <div className="text-right">
              <a
                href="#"
                className="text-blue-600 text-sm hover:text-blue-800 hover:underline transition-colors"
              >
                Resend OTP
              </a>
            </div>

            {/* Submit Button */}
            <div className="pt-3 md:pt-4">
              <button
                type="submit"
                className="
                  w-full bg-gradient-to-r from-blue-500 to-blue-700 
                  text-white font-medium py-3 rounded-lg 
                  hover:opacity-90 hover:shadow-md transition-all duration-200
                  cursor-pointer
                "
              >
                Join
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Forgot;