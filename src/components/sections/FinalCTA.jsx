// src/components/sections/FinalCTA.jsx

const FinalCTA = () => {
  return (
    <section className="bg-[#2563eb] py-16 md:py-20 px-6 text-white text-center">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 md:mb-8">
          Ready to Transform<br className="hidden sm:block" /> Your Business?
        </h2>

        {/* Subtext */}
        <p className="text-lg sm:text-xl md:text-2xl text-blue-100/95 max-w-4xl mx-auto mb-10 md:mb-12 leading-relaxed">
          Join thousands of businesses already using Insyght to streamline their operations, increase efficiency,
          <br className="hidden md:block" />
          and drive growth with AI-powered insights.
        </p>

        {/* Buttons row */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-8">
          {/* Primary CTA – white button */}
          <button
            className="
              group px-10 py-5 md:px-12 md:py-6 
              rounded-full font-semibold text-lg md:text-xl
              bg-white text-blue-700 hover:bg-gray-100
              shadow-lg shadow-blue-900/30 hover:shadow-xl hover:shadow-blue-900/40
              transition-all duration-300
              hover:-translate-y-0.5 hover:scale-[1.02]
              flex items-center gap-3 cursor-pointer
              min-w-[240px] md:min-w-[280px]
            "
          >
            Start Free Trial
            <span className="text-xl md:text-2xl group-hover:translate-x-1.5 transition-transform">→</span>
          </button>

          {/* Secondary button – shows "Schedule Demo" on hover */}
          <button
            className="
              group relative px-10 py-5 md:px-12 md:py-6 
              rounded-full font-semibold text-lg md:text-xl
              border-2 border-white/40 text-transparent
              hover:text-white hover:bg-white/10 hover:border-white/70
              transition-all duration-300 cursor-pointer
              overflow-hidden
              min-w-[240px] md:min-w-[280px]
            "
          >
            {/* Hidden text that appears on hover */}
            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Schedule Demo
              <span className="ml-2 text-xl md:text-2xl group-hover:translate-x-1.5 transition-transform">→</span>
            </span>

            {/* Empty space holder when not hovered */}
            <span className="opacity-0 invisible">Schedule Demo →</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;