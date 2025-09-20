// src/components/Footer.tsx
import { FaYoutube, FaTelegramPlane, FaInstagram, FaTwitter, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-cyan-950 via-blue-950 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-300">Career Compass</h2>
          <p className="mt-4 text-sm text-gray-300 leading-relaxed">
            Guiding students, graduates, and aspirants with free resources, 
            consultation, and roadmaps — helping shape futures without barriers.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-cyan-300 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#programs" className="hover:text-cyan-400 transition">Programs</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">Resources</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">Vocational Education</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-right">
          <h3 className="text-3xl font-semibold text-cyan-300 mb-4">Connect With Us</h3>
          <h3 className="text-md text-white mb-4">Stay updated with all things career - trends, inspiration and more.</h3>
          <div className="flex justify-center md:justify-end gap-6 text-2xl">
            <a href="https://www.youtube.com/@JourneyWithin75" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition"><FaYoutube /></a>
            <a href="https://t.me/journeyWithin75" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition"><FaTelegramPlane /></a>
            <a href="https://www.instagram.com/soulinfinity464/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition"><FaInstagram /></a>
            
            <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition"><FaGlobe /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Career Compass — Free resources for students.  
        <span className="block md:inline"> | Built with ❤️ for learners.</span>
      </div>
    </footer>
  );
}
