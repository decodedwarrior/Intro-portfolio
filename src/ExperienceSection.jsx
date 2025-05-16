import React from "react";
import { FaLaptopCode, FaVideo } from "react-icons/fa";

export default function ExperienceSection() {
  return (
    <section className="bg-gradient-to-r from-green-700 to-teal-700 text-white py-20 px-6 rounded-lg max-w-4xl mx-auto space-y-10">
      <h2 className="text-4xl font-extrabold text-center">Experience Timeline</h2>

      <div className="space-y-10 border-l-2 border-yellow-400 pl-6 relative">
        {/* Experience 1 */}
        <div className="relative">
          <div className="absolute -left-[11px] top-2 w-4 h-4 bg-yellow-400 rounded-full"></div>
          <h3 className="text-yellow-300 text-xl font-bold flex items-center gap-2">
            <FaLaptopCode /> Full Stack Developer Intern
          </h3>
          <p className="text-sm text-gray-200">Tech Company XYZ · Jan 2025 - Mar 2025</p>
          <p className="text-gray-300">
            Built MERN-based apps with authentication, optimized frontend using React and Tailwind,
            and wrote clean documentation.
          </p>
        </div>

        {/* Experience 2 */}
        <div className="relative">
          <div className="absolute -left-[11px] top-2 w-4 h-4 bg-yellow-400 rounded-full"></div>
          <h3 className="text-yellow-300 text-xl font-bold flex items-center gap-2">
            <FaVideo /> Freelance Video Editor
          </h3>
          <p className="text-sm text-gray-200">Remote · 2023 - Present</p>
          <p className="text-gray-300">
            Created social media edits, educational videos, and digital content using Premiere Pro,
            Canva, and After Effects.
          </p>
        </div>
      </div>
    </section>
  );
}
