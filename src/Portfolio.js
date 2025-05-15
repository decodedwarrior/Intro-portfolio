
import React from "react";

export default function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="flex items-center justify-between p-6 border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
          <h1 className="text-xl font-bold">Sumit Moharana</h1>
        </div>
        <nav className="space-x-6">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="px-6 py-10 space-y-16">
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Full Stack Developer & Multimedia Creator</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Building scalable web apps with MERN stack, crafting multimedia content, and writing clean documentation.</p>
        </section>

        <section id="about">
          <h3 className="text-2xl font-semibold mb-2">About Me</h3>
          <p className="text-gray-400">I'm currently pursuing an MCA at Lovely Professional University (expected Feb 2026), and completed Full Stack Web Development & Digital Skills in 2025. Passionate about technology, video editing, and creating clean, functional code.</p>
        </section>

        <section id="skills">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <ul className="grid grid-cols-2 gap-4 text-gray-400">
            <li>HTML, CSS, JavaScript, React.js, Tailwind CSS</li>
            <li>Node.js, Express.js, MongoDB, Mongoose</li>
            <li>Adobe Premiere Pro, Photoshop, Canva</li>
            <li>Git, GitHub, Postman, Vercel, Render</li>
            <li>REST APIs, JWT Auth, CRUD</li>
          </ul>
        </section>

        <section id="projects">
          <h3 className="text-2xl font-semibold mb-4">Projects</h3>
          <ul className="space-y-3 text-gray-400">
            <li><strong>Blog App:</strong> MERN-based platform with JWT auth, deployed on Vercel/Render.</li>
            <li><strong>Task Manager App:</strong> React frontend, MongoDB backend, responsive design.</li>
            <li><strong>Short Documentary:</strong> Scripted and edited using Adobe Premiere Pro.</li>
            <li><strong>Documentation Project:</strong> Markdown technical docs and developer guides.</li>
          </ul>
        </section>

        <section id="certifications">
          <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
          <ul className="list-disc pl-6 text-gray-400">
            <li>Full Stack Web Development (MERN)</li>
            <li>Technical Documentation Writing</li>
            <li>Video Editing Fundamentals</li>
          </ul>
        </section>

        <section id="contact">
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>
          <p>Email: <a href="mailto:moharanasumit09@gmail.com" className="text-blue-400">moharanasumit09@gmail.com</a></p>
          <p>Phone: 7008189215</p>
          <p>GitHub: <a href="https://github.com/" className="text-blue-400">https://github.com/</a></p>
          <p>YouTube: <a href="https://www.youtube.com/@XtronWarrior" className="text-blue-400">@XtronWarrior</a></p>
        </section>
      </main>

      <footer className="text-center py-6 text-gray-600 border-t border-gray-800">
        &copy; 2025 Sumit Moharana. All rights reserved.
      </footer>
    </div>
  );
}
