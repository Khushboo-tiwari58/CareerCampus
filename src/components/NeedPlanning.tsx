"use client";

export default function NeedPlanning() {
    return (
        <section className="relative bg-gradient-to-br from-cyan-900 via-blue-900 to-black text-white py-16 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

                {/* Left Side: Image */}
                <div className="md:w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=900&q=80"
                        alt="Planning for Success"
                        className="rounded-2xl shadow-lg object-cover w-full h-[300px] md:h-[400px]
               transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                    />
                </div>


                {/* Right Side: Text */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-300">
                        The Need for Proper Planning
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-200">
                        Success is not a matter of chance—it’s the result of careful
                        planning and informed decisions. Early career planning helps
                        students explore opportunities, identify strengths, and create a
                        roadmap toward their goals. The right guidance today can shape a
                        brighter tomorrow.
                    </p>
                </div>

            </div>
        </section>
    );
}
