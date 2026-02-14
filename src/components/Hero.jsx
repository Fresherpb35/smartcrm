const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-white overflow-hidden">
      {/* Optional very subtle background pattern / shine (optional – remove if you want pure white) */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-blue-50/30 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
        {/* Small tagline pill – kept but toned down */}
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 md:mb-10 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-blue-700">
          <span className="text-blue-500">✦</span> Production-Ready Business Management
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-8 md:mb-12 text-gray-900">
          Complete Business <br className="hidden sm:block" />
          <span className="text-blue-600">Management Solution</span>
        </h1>

        {/* Subtitle / description */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 md:mb-16 leading-relaxed">
          Streamline your operations with our AI-powered platform designed for manufacturers, retailers, and wholesalers.  
          Get role-based dashboards, advanced analytics, and intelligent automation.
        </p>

        {/* CTA buttons – blue primary kept for contrast */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 md:gap-6">
          <button
            className="
              group relative px-8 py-4 md:px-10 md:py-5 
              rounded-xl font-semibold text-lg
              bg-blue-600 hover:bg-blue-700 
              text-white shadow-lg shadow-blue-200/50 
              transition-all duration-300 
              hover:shadow-xl hover:shadow-blue-300/60 
              hover:-translate-y-0.5 cursor-pointer
              flex items-center gap-2
            "
          >
            Start Your Business Journey
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>

          <button
            className="
              px-8 py-4 md:px-10 md:py-5 rounded-xl font-semibold text-lg
              border-2 border-blue-600 text-blue-600
              hover:bg-blue-50 hover:border-blue-700
              transition-all duration-300 cursor-pointer
            "
          >
            Watch Demo
          </button>
        </div>

        {/* Trust badges */}
        <div className="mt-16 md:mt-20 flex flex-wrap justify-center gap-x-10 gap-y-6 text-base md:text-lg">
          <div className="flex items-center gap-3">
            <span className="text-green-500 text-2xl">✔</span>
            <span className="text-gray-800 font-medium">Enterprise Grade Security</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-green-500 text-2xl">✔</span>
            <span className="text-gray-800 font-medium">AI-Powered Insights</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-green-500 text-2xl">✔</span>
            <span className="text-gray-800 font-medium">Offline Support</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-green-500 text-2xl">✔</span>
            <span className="text-gray-800 font-medium">Role-Based Access</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;




