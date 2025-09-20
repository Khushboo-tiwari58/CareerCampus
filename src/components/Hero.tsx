"use client";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center text-white bg-gradient-to-br from-cyan-900 via-blue-900 to-black overflow-hidden pt-24">
      {/* Animated background shapes */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-700/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-700/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 px-6 max-w-4xl">
        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
          Shape Your <span className="text-cyan-300">Future</span> With Us
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto px-4">
          Guidance for every student. Resources for every dream.
          Free consultation, endless opportunities.
        </p>

        {/* Animated text ticker */}
        <div className="overflow-hidden h-10 mb-10">
          <div className="animate-marquee whitespace-nowrap text-cyan-200 text-lg font-semibold">
            Dream Big • Explore Streams • Ace Your Exams • Win Scholarships • Learn Skills • Build Your Career • Dream Big • Explore Streams • Ace Your Exams • Win Scholarships • Learn Skills • Build Your Career
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto">
          <a
            href="#contact"
            className="flex-1 text-center bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-cyan-300 transition transform hover:scale-105"
          >
            Get Free Consultation
          </a>
          <a
            href="/resources"
            className="flex-1 text-center bg-white/10 border border-white/20 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-white/20 transition transform hover:scale-105"
          >
            Free Resources
          </a>
        </div>
      </div>

      {/* Marquee animation keyframes */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          min-width: 100%;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
