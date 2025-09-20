"use client";

import graduatesData from "./graduates";

export default function Graduates() {
  return (
    <div className="space-y-8 text-gray-700 bg-gray-50 p-6 rounded-2xl shadow-lg">
      {/* Intro */}
      <p className="text-lg">{graduatesData.intro}</p>

      {/* Career Directions */}
      <h3 className="text-2xl font-semibold text-cyan-700">Career Directions</h3>
      <div className="space-y-6">
        {graduatesData.careerDirections.map((item, index) => (
          <div key={index}>
            <h4 className="font-semibold text-lg">{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Higher Education */}
      <h3 className="text-2xl font-semibold text-cyan-700">
        Higher Education & Research
      </h3>
      <div className="space-y-6">
        {graduatesData.higherEducation.map((item, index) => (
          <div key={index}>
            <h4 className="font-semibold text-lg">{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
