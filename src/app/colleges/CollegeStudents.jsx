"use client";

import collegeStudentsData from "./college";

export default function CollegeStudents() {
  return (
    <div className="space-y-8 text-gray-700 bg-gray-50 p-6 rounded-2xl shadow-lg">
      {/* Intro */}
      <p className="text-lg">{collegeStudentsData.intro}</p>

      {/* Career Pathways */}
      <h3 className="text-2xl font-semibold text-cyan-700">
        Career Pathways & Specializations
      </h3>
      <div className="space-y-6">
        {collegeStudentsData.careerPathways.map((item, idx) => (
          <div key={idx}>
            <h4 className="font-semibold text-lg">{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Competitive Exams */}
      <h3 className="text-2xl font-semibold text-cyan-700">Competitive Exams</h3>
      <div className="space-y-6">
        {collegeStudentsData.examsList.map((item, idx) => (
          <div key={idx}>
            <h4 className="font-semibold text-lg">{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Scholarships & Fellowships */}
      <h3 className="text-2xl font-semibold text-cyan-700">
        Scholarships & Fellowships
      </h3>
      <div className="space-y-6">
        {collegeStudentsData.scholarshipsList.map((item, idx) => (
          <div key={idx}>
            <h4 className="font-semibold text-lg">{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
