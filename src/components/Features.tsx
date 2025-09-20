"use client";

import { FaUserGraduate, FaBookOpen, FaTools, FaLightbulb } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaUserGraduate className="text-cyan-300 text-4xl mb-4" />,
      title: "For School Students",
      desc: "Discover your interests and explore the right streams to build a strong foundation for your future.",
    },
    {
      icon: <FaBookOpen className="text-cyan-300 text-4xl mb-4" />,
      title: "For College & Graduates",
      desc: "Plan your career path, gain industry insights, and get guidance to land your dream opportunities.",
    },
    {
      icon: <FaTools className="text-cyan-300 text-4xl mb-4" />,
      title: "Vocational Training",
      desc: "Learn practical skills that prepare you for jobs and entrepreneurship in the real world.",
    },
    {
      icon: <FaLightbulb className="text-cyan-300 text-4xl mb-4" />,
      title: "Resources",
      desc: "Access free study materials, tips, and career resources designed to guide you at every step.",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our <span className="text-cyan-300">Features</span>
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform text-left"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm md:text-base">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
