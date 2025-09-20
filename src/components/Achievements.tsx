"use client";

export default function Achievements() {
  const stats = [
    { number: "100+", label: "Students Impacted" },
    { number: "50+", label: "Streams Covered" },
    { number: "10+", label: "Partner Schools" },
    { number: "6+", label: "University Partners" },
  ];

  return (
    <section className="bg-gradient-to-br from-cyan-950 via-blue-950 to-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our <span className="text-cyan-300">Achievements</span>
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform"
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-cyan-300 mb-3">
                {stat.number}
              </h3>
              <p className="text-lg md:text-xl opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
