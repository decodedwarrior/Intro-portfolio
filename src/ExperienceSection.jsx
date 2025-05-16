import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="w-full min-h-screen bg-gradient-to-r from-green-700 to-teal-700 text-white flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Avatar */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/avatar.png"
            alt="Sumit Moharana"
            className="w-60 h-60 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-yellow-400 shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left w-full lg:w-1/2 space-y-6">
          <h1 className="text-5xl font-extrabold">Sumit Moharana</h1>
          <h2 className="text-2xl font-semibold text-yellow-300">
            Full Stack Developer & Multimedia Creator
          </h2>
          <p className="text-lg leading-relaxed">
            Building scalable web apps with the MERN stack, crafting multimedia
            content, and writing clean documentation.
          </p>
          <div className="flex justify-center lg:justify-start space-x-6 text-yellow-400 text-3xl">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-yellow-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-yellow-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-yellow-300"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
