// src/app/colleges/page.tsx
"use client";

import { useState } from "react";
import CollegeStudents from "./CollegeStudents.jsx";
import Graduates from "./Graduates.jsx";

export default function Colleges() {
  const [tab, setTab] = useState<"college" | "graduates">("college");

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 mt-20">
      

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setTab("college")}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            tab === "college"
              ? "bg-cyan-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          College Students
        </button>
        <button
          onClick={() => setTab("graduates")}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            tab === "graduates"
              ? "bg-cyan-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Graduates
        </button>
      </div>

      {/* Render Selected Section */}
      {tab === "college" ? <CollegeStudents /> : <Graduates />}
    </section>
  );
}
