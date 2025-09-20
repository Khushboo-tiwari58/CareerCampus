"use client";

import { seniorData } from "./senior";

export default function ElevenTwelve() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-6">
      {/* Intro */}
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-6 flex justify-center">
        {seniorData.intro.heading}
      </h2>
      <p className="text-lg text-gray-700 mb-10 leading-relaxed">
        {seniorData.intro.text}
      </p>

      {/* Streams */}
      <h3 className="text-2xl font-semibold text-cyan-700 mb-4">
        Streams & Subject Choices
      </h3>
      <div className="space-y-6 mb-10 text-gray-700">
        {seniorData.streams.map((item, idx) => (
          <div key={idx}>
            <h4 className="font-semibold text-lg">{item.title}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      {/* Exams */}
      <h3 className="text-2xl font-semibold text-cyan-700 mb-4">
        Major Entrance & Competitive Exams
      </h3>
      <div className="space-y-6 mb-10 text-gray-700">
        {seniorData.exams.map((item, idx) => (
          <div key={idx}>
            <h4 className="font-semibold text-lg">{item.title}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      {/* Scholarships */}
      <h3 className="text-2xl font-semibold text-cyan-700 mb-4">
        Scholarships & Financial Aid
      </h3>
      <div className="space-y-6 text-gray-700">
        {seniorData.scholarships.map((item, idx) => (
          <div key={idx}>
            <h4 className="font-semibold text-lg">{item.title}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
