"use client";
import { useState } from "react";
// Make sure the path matches the actual file location.
// For example, if the file is at src/components/students/JuniorContent.tsx, this is correct.
// If the file is named differently or in another folder, update the path accordingly.
import JuniorContent from "@/components/schools/JuniorContent";
import SeniorContent from "@/components/schools/SeniorContent";

export default function Page() {
  const [tab, setTab] = useState<"junior" | "senior">("junior");

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 mt-20">
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setTab("junior")}
          className={`px-6 py-3 rounded-xl font-semibold transition ${
            tab === "junior"
              ? "bg-cyan-600 text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Classes 8 · 9 · 10
        </button>

        <button
          onClick={() => setTab("senior")}
          className={`px-6 py-3 rounded-xl font-semibold transition ${
            tab === "senior"
              ? "bg-cyan-600 text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Classes 11 · 12
        </button>
      </div>

      <div className="bg-gray-50 p-6 rounded-2xl shadow-lg">
        {tab === "junior" ? <JuniorContent /> : <SeniorContent />}
      </div>
    </section>
  );
}
