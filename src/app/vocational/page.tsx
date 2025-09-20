// src/app/vocational/page.tsx
import { vocationalVideos } from "./data";

export default function VocationalTraining() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 mt-20">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-6  flex justify-center">
        Vocational Education
      </h1>

      {/* Quote-like intro */}
      <p className="text-lg md:text-xl text-gray-700 italic mb-12">
        “Vocational education empowers students with practical skills and
        industry knowledge, preparing them for real-world opportunities.”

      </p>

      {/* Video Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {vocationalVideos.map((video, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition"
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={video.url}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-48 md:h-56"
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
        
      </div>
      <p className="text-lg md:text-xl text-gray-700 mt-20">Are you passionate about teaching or sharing your knowledge?</p>
        <p className="text-lg md:text-xl text-gray-600 mt-10">Share your knowledge with thousands of learners by publishing your courses on our platform. Whether you are an educator, industry expert, or passionate creator, you can offer your courses for free or set your own fees to earn from your expertise. Join our mission to make quality education accessible while building your personal brand and helping students grow in their careers.</p>
    </section>
  );
}
