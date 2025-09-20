import { juniorData } from "./data";

export default function JuniorContent() {
  return (
    <div className="space-y-10 mt-4">
      {/* Intro */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-6 flex justify-center">
          {juniorData.intro.heading}
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {juniorData.intro.text}
        </p>
      </section>

      {/* Streams */}
      <section>
        <h3 className="text-xl md:text-2xl font-semibold text-cyan-600 mb-3">
          Streams After 10th
        </h3>
        <div className="space-y-6">
          {juniorData.streams.map((item, i) => (
            <div key={i}>
              <h4 className="text-lg font-bold text-gray-800">{item.title}</h4>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Exams */}
      <section>
        <h3 className="text-xl md:text-2xl font-semibold text-cyan-600 mb-3">
          Key Exams
        </h3>
        <div className="space-y-6">
          {juniorData.exams.map((item, i) => (
            <div key={i}>
              <h4 className="text-lg font-bold text-gray-800">{item.title}</h4>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Scholarships */}
      <section>
        <h3 className="text-xl md:text-2xl font-semibold text-cyan-600 mb-3">
          Scholarships
        </h3>
        <div className="space-y-6">
          {juniorData.scholarships.map((item, i) => (
            <div key={i}>
              <h4 className="text-lg font-bold text-gray-800">{item.title}</h4>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
