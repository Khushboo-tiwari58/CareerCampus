// src/app/resources/page.tsx
import { examCategories, scholarships } from "./data";

export default function Resources() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 mt-20">
      {/* ===== Heading & Intro ===== */}
      <h1 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-6  flex justify-center">
        Resources
      </h1>
      <p className="text-lg text-gray-700 mb-10">
        India hosts a wide variety of competitive exams and scholarship
        programs every year, but many students remain unaware of these
        opportunities. This page collects the key details so you can explore
        exams and financial support with ease.
      </p>

      {/* ===== Exam Categories ===== */}
      {examCategories.map((category, idx) => (
        <div key={idx} className="mb-12 bg-gray-50 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-cyan-700 mb-4">
            {category.title}
          </h2>
          <div className="space-y-6 text-gray-700">
            {category.exams.map((exam, i) => (
              <div key={i}>
                <h3 className="font-semibold text-lg">{exam.name}</h3>
                <p>{exam.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* ===== Scholarships ===== */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-cyan-700 mb-4">
          Scholarships & Fellowships
        </h2>
        <p className="text-gray-700 mb-6">
          Scholarships provide crucial financial support for students from
          diverse backgrounds. Explore these opportunities:
        </p>
        <div className="space-y-6 text-gray-700">
          {scholarships.map((scholarship, i) => (
            <div key={i}>
              <h3 className="font-semibold text-lg">{scholarship.name}</h3>
              <p>{scholarship.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
