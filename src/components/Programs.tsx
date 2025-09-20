"use client";

export default function Programs() {
  const programs = [
    {
      category: "Classes 8, 9 & 10",
      details: [
        "Stream selection guidance",
        "Foundation skills for competitive exams",
        "Study techniques & productivity",
      ],
    },
    {
      category: "Classes 11 & 12",
      details: [
        "College & course guidance",
        "Entrance exam strategies",
        "Scholarship opportunities",
      ],
    },
    {
      category: "Graduates",
      details: [
        "Career path planning",
        "Internship & job resources",
        "Industry-specific roadmaps",
      ],
    },
    {
      category: "Defence & Civil Services Aspirants",
      details: [
        "Exam preparation strategies",
        "Physical & mental fitness guidance",
        "Dedicated study resources",
      ],
    },
    {
      category: "Vocational Training",
      details: [
        "Digital & freelancing skills",
        "Technical certifications",
        "Earn while learning opportunities",
      ],
    },
    {
      category: "Other Streams",
      details: [
        "Creative careers (Arts, Media, Design)",
        "Emerging fields (AI, Data Science, Cybersecurity)",
        "Entrepreneurship & startups",
      ],
    },
  ];

  return (
    <section id="programs" className="bg-gradient-to-br from-cyan-900 via-blue-900 to-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our <span className="text-cyan-300">Programs</span>
        </h2>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform text-left"
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-4">
                {program.category}
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm md:text-base list-disc list-inside">
                {program.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
