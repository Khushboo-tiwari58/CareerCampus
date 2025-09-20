"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  type FormData = {
    name: string;
    email: string;
    contact: string;
    message: string;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("https://formspree.io/f/YOUR_ENDPOINT", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    // ✅ Clear the fields after successful submission
    setFormData({ name: "", email: "", contact: "", message: "" });
    alert("Message sent successfully!");
  };
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-cyan-950 via-blue-950 to-black text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Common Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Take the First Step Towards <span className="text-cyan-300">Career Clarity!</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Discover your best-fit career with our free consultation and resources —
            guiding you towards a brighter future.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div>
            <h3 className="text-3xl font-semibold mb-10 text-cyan-300">
              How We Help You
            </h3>
            <p className="text-lg opacity-90 leading-relaxed">
              We’re here to help you clear your doubts, guide you at every stage,
              and provide free consultation with genuine resources.
              Whether you’re a school student, graduate, or preparing for competitive exams,
              our team is dedicated to guiding you towards the right path —
              <span className="text-cyan-300 font-semibold"> completely free of cost</span>.

            </p>
            <p  className="text-lg opacity-90 leading-relaxed mt-10">
              Your knowledge and experience can change lives.
              If you have valuable resources, study materials, or career insights that can help students discover the right path—without involving money—you’re warmly invited to share them with us.

              We also welcome new ideas and suggestions to improve this free career-consultancy platform.
              Together, we can build a stronger roadmap for every student’s future.

               Reach out through the contact form to collaborate or share your ideas.
            </p>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg">
            <form className="space-y-6" action="https://formspree.io/f/xeolyzgw" method="POST">
              {/* Name */}
              <div>
                <label className="block mb-2 text-sm font-semibold">Name</label>
                <input
                  type="text" name="name" value={formData.name} onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-sm font-semibold">Email</label>
                <input
                  type="email" name="email" value={formData.email} onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              {/* Contact Number */}
              <div>
                <label className="block mb-2 text-sm font-semibold">Contact Number</label>
                <input
                  type="tel" name="phone" value={formData.contact} onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 text-sm font-semibold">Your Query</label>
                <textarea
                  rows={4} name="message" value={formData.message} onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-cyan-400 text-black font-semibold py-3 rounded-lg shadow-lg hover:bg-cyan-300 transition transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
