import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function ExperienceSection() {
  return (
    <section className="bg-gradient-to-r from-green-700 to-teal-700 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-16">
        
        {/* Image on left */}
        <div className="flex-shrink-0">
          <img
            src="/avatar.png"
            alt="Sumit Moharana"
            className="w-48 h-48 rounded-full object-cover border-4 border-yellow-400 shadow-lg"
          />
        </div>

        {/* Text and social links */}
        <div className="text-center md:text-left max-w-xl space-y-6">
          <h1 className="text-4xl font-extrabold">Sumit Moharana</h1>
          <p className="text-lg leading-relaxed">
            Full Stack Developer & Multimedia Creator <br />
            Building scalable web apps with the MERN stack, crafting multimedia content, and writing clean documentation.
          </p>

          {/* Social icons */}
          <div className="flex justify-center md:justify-start space-x-6 text-yellow-400 text-3xl">
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
