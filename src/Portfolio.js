import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Portfolio() {
  return (
    <div className="bg-[#121212] text-white min-h-screen font-sans scroll-smooth">
      <header className="flex items-center justify-between p-6 border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <img src="/avatar.png" alt="Avatar" className="w-10 h-10 rounded-full cursor-pointer" />
        </div>
        <nav className="space-x-6 text-white font-medium">
          <a href="#about" className="hover:text-[#FFEB3B] transition">About</a>
          <a href="#skills" className="hover:text-[#FFEB3B] transition">Skills</a>
          <a href="#experience" className="hover:text-[#FFEB3B] transition">Experience</a>
          <a href="#projects" className="hover:text-[#FFEB3B] transition">Projects</a>
          <a href="#certifications" className="hover:text-[#FFEB3B] transition">Certifications</a>
          <a href="#contact" className="hover:text-[#FFEB3B] transition">Contact</a>
        </nav>
      </header>

      <main className="px-6 py-10 space-y-24">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="text-center pt-20 pb-24 bg-[#FFEB3B] text-black rounded-lg shadow-md"
        >
          <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Full Stack Developer & Multimedia Creator
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Building scalable web apps with MERN stack, crafting multimedia content, and writing clean documentation.
          </p>
        </motion.section>

        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-semibold mb-2">About Me</h3>
          <p className="text-gray-400">
            I'm currently pursuing an MCA at Lovely Professional University (expected Feb 2026), and completed Full Stack Web Development & Digital Skills in 2025. Passionate about technology, video editing, and creating clean, functional code.
          </p>
        </motion.section>

        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-400">
            <li>HTML, CSS, JavaScript, React.js, Tailwind CSS</li>
            <li>Node.js, Express.js, MongoDB, Mongoose</li>
            <li>Adobe Premiere Pro, Photoshop, Canva</li>
            <li>Git, GitHub, Postman, Vercel, Render</li>
            <li>REST APIs, JWT Auth, CRUD</li>
          </ul>
        </motion.section>

        {/* EXPERIENCE TIMELINE SECTION */}
        <motion.section
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="bg-[#1e1e1e] py-16 px-6 rounded-lg shadow-lg"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-yellow-400 mb-10">Experience Timeline</h3>

            <div className="flex justify-center mb-10">
              <img
                src="/avatar.png"
                alt="Avatar"
                className="w-32 h-32 rounded-full border-4 border-yellow-400 shadow-lg"
              />
            </div>

            <div className="relative border-l-4 border-yellow-400 pl-6 space-y-10">
              <div>
                <h4 className="text-xl font-semibold text-white">Full Stack Developer – Freelance</h4>
                <p className="text-sm text-gray-400">2023 – Present</p>
                <p className="mt-2 text-gray-300">
                  Developed full-stack web apps using MERN stack. Created scalable solutions, built RESTful APIs, and deployed to Render.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white">Video Editor – Content Creators Hub</h4>
                <p className="text-sm text-gray-400">2022 – 2023</p>
                <p className="mt-2 text-gray-300">
                  Produced and edited over 100+ videos for YouTube and Instagram using Premiere Pro. Delivered engaging content under tight deadlines.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white">Web Developer Intern – XYZ Agency</h4>
                <p className="text-sm text-gray-400">2021 – 2022</p>
                <p className="mt-2 text-gray-300">
                  Contributed to front-end development using React and Tailwind. Focused on accessibility, responsiveness, and team collaboration.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-semibold mb-4">Projects</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="p-4 border border-gray-700 rounded-lg hover:shadow-lg transition">
              <h4 className="text-yellow-400 font-bold">Blog App</h4>
              <p className="text-gray-400">MERN-based platform with JWT auth, deployed on Vercel/Render.</p>
            </div>
            <div className="p-4 border border-gray-700 rounded-lg hover:shadow-lg transition">
              <h4 className="text-yellow-400 font-bold">Task Manager App</h4>
              <p className="text-gray-400">React frontend, MongoDB backend, responsive design.</p>
            </div>
            <div className="p-4 border border-gray-700 rounded-lg hover:shadow-lg transition">
              <h4 className="text-yellow-400 font-bold">Short Documentary</h4>
              <p className="text-gray-400">Scripted and edited using Adobe Premiere Pro.</p>
            </div>
            <div className="p-4 border border-gray-700 rounded-lg hover:shadow-lg transition">
              <h4 className="text-yellow-400 font-bold">Documentation Project</h4>
              <p className="text-gray-400">Markdown technical docs and developer guides.</p>
            </div>
          </div>
        </motion.section>
        <motion.section
  id="experience"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.6 }}
  variants={fadeInUp}
>
  <h3 className="text-2xl font-semibold mb-4">Experience</h3>
  <div className="space-y-6 border-l-2 border-yellow-400 pl-6 relative">
    {/* Experience 1 */}
    <div className="relative">
      <div className="absolute left-[-10px] top-1 w-4 h-4 bg-yellow-400 rounded-full"></div>
      <h4 className="text-yellow-300 font-bold">Full Stack Developer Intern</h4>
      <p className="text-gray-400 text-sm">Tech Company XYZ · Jan 2025 - Mar 2025</p>
      <p className="text-gray-500">
        Built MERN-based apps with authentication, optimized frontend using React and Tailwind, and wrote clean documentation.
      </p>
    </div>

    {/* Experience 2 */}
    <div className="relative">
      <div className="absolute left-[-10px] top-1 w-4 h-4 bg-yellow-400 rounded-full"></div>
      <h4 className="text-yellow-300 font-bold">Freelance Video Editor</h4>
      <p className="text-gray-400 text-sm">Remote · 2023 - Present</p>
      <p className="text-gray-500">
        Created social media edits, educational videos, and digital content using Premiere Pro, Canva, and After Effects.
      </p>
    </div>
  </div>
</motion.section>


        <motion.section
          id="certifications"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
          <ul className="list-disc pl-6 text-gray-400">
            <li>Full Stack Web Development (MERN)</li>
            <li>Technical Documentation Writing</li>
            <li>Video Editing Fundamentals</li>
          </ul>
        </motion.section>

        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>
          <form className="max-w-lg mx-auto space-y-4">
            <input className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg" type="text" placeholder="Name" />
            <input className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg" type="email" placeholder="Email" />
            <textarea className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg" rows="4" placeholder="Message"></textarea>
            <button type="submit" className="bg-[#FFEB3B] text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300">Send</button>
          </form>
          <div className="mt-6 text-center space-y-2">
            <p>Email: <a href="mailto:moharanasumit09@gmail.com" className="text-blue-400">moharanasumit09@gmail.com</a></p>
            <p>Phone: 7008189215</p>
            <p>GitHub: <a href="https://github.com/" className="text-blue-400">https://github.com/</a></p>
            <p>YouTube: <a href="https://www.youtube.com/@XtronWarrior" className="text-blue-400">@XtronWarrior</a></p>
          </div>
        </motion.section>
      </main>

      <footer className="text-center py-6 text-gray-600 border-t border-gray-800 mt-12">
        &copy; 2025 Sumit Moharana. All rights reserved.
      </footer>
    </div>
  );
}
