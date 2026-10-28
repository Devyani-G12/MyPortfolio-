import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  Download,
  BookOpen,
} from "lucide-react";

function Hero() {
  return (
    <section id="home" className="hero section">
      {/* Left Side */}

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="eyebrow">
          <Sparkles size={16} />
          Computer Engineering Undergraduate
        </p>

        <h1>Devyani Goraksha</h1>

        <p className="hero-text">
         I build modern web applications and AI-powered solutions with a focus on clean, user-centric software development. I'm interested in Full Stack Development and Artificial Intelligence, and I enjoy building practical projects while continuously learning new technologies.
        </p>

        <div className="actions">
          <a href="#projects" className="btn primary">
            View Projects
            <ArrowUpRight size={18} />
          </a>

          <a
            href="/Devyani_Goraksha_Resume.pdf"
            download
            className="btn ghost"
            aria-label="Download Resume"
          >
            <Download size={18} />
            Resume
          </a>

          <a
            href="https://medium.com/@gorakshadevyani"
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
            aria-label="Visit Medium"
          >
            <BookOpen size={18} />
            Medium
          </a>
        </div>

        <div className="quick-stats">
          <div>
            <strong>7+</strong>
            <span>Projects</span>
          </div>

          <div>
            <strong>10+</strong>
            <span>Technologies</span>
          </div>

          <div>
            <strong>2027</strong>
            <span>Graduate</span>
          </div>

          <div>
            <strong>10+</strong>
            <span>Blogs</span>
          </div>
        </div>
      </motion.div>

      {/* Right Side */}

      <motion.div
        className="code-card"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="code-top">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <pre>{`const developer = {

  name: "Devyani Goraksha",

  role: "Computer Engineer",

  focus: [
    "Full Stack Development",
    "Artificial Intelligence",
    "Problem Solving",
    "Technical Writing (blogs)"
  ],

  currentlyBuilding: [
    "AI Applications",
    "Modern Web Platforms",
    "Research Projects"
  ],

  writing: [
    "Medium Technical Blogs"
  ],

  philosophy: [
    "Learn",
    "Build",
    "Share",
    "Improve"
  ]

};`}</pre>
      </motion.div>
    </section>
  );
}

export default Hero;