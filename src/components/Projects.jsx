import { motion } from "framer-motion";
import {
  FolderGit2,
  Star,
} from "lucide-react";
const GithubIcon = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
const projects = [
  
  {
    id: 2,
    featured: false,
    title: "DevFlow AI",
    category: "Full Stack Application",
    description:
      "An AI-assisted project and task management platform designed to organize projects, track progress, and improve developer productivity.",

    highlights: [
      "Secure JWT Authentication",
      "Project & Task Management",
      "AI Code Explanation",
      "Responsive Dashboard",
    ],

    tech: [
      "React",
      "FastAPI",
      "SQLite",
      "JWT",
    ],

    github: "https://github.com/Devyani-G12/devflow-ai",
  },

  {
    id: 3,
    featured: false,
    title: "Hands-Off Coding",
    category: "Artificial Intelligence",
    description:
      "Voice-controlled coding assistant that converts spoken instructions into executable Python code using speech recognition and NLP.",

    highlights: [
      "Speech-to-Code Conversion",
      "Whisper Integration",
      "Python Code Generation",
      "Voice Commands",
    ],

    tech: [
      "Python",
      "Flask",
      "Whisper",
      "NLP",
    ],

    github: "https://github.com/Devyani-G12/Hands-Off-Coding",
  },

  {
  id: 4,
  featured: false,
  title: "FocusTrack – Memory Game",
  category: "Frontend Project",
  description:
    "An interactive Simon-style memory game built to strengthen JavaScript fundamentals through dynamic gameplay, level progression, and real-time user interaction.",

  highlights: [
    "Progressive level-based gameplay",
    "Session high score tracking",
    "Smooth animations & visual effects",
    "Keyboard and mouse event handling",
  ],

  tech: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Bootstrap",
  ],

  github: "https://github.com/Devyani-G12/PatternFlow-game",
},
{
  id: 5,
  featured: false,
  title: "Azure-Based Demand Forecasting & Capacity Optimization System",
  category: "Machine Learning Project",
  description:
    "Developed during the Infosys Springboard Virtual Internship, this project analyzes infrastructure usage data to forecast future resource demand and support efficient capacity planning using machine learning.",

  highlights: [
    "Demand forecasting using machine learning",
    "Data preprocessing & feature engineering",
    "Resource utilization analysis",
    "Capacity planning insights through predictive analytics",
  ],

  tech: [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Azure",
  ],
 
   github: "https://github.com/Devyani-G12/Azure-Based-Demand-Forecasting-Capacity-Optimization-System.git",
},
{
  id: 6,
  featured: false,
  status:"In Progress",
  title: "TrustAgent – Explainable Multi-Agent Decision Intelligence Platform",
  category: "Final-Year Project • AI Governance",

  description:
    "An explainable multi-agent AI platform designed to monitor agent workflows, evaluate execution trustworthiness, identify potential risks, and improve transparency through execution tracing and explainable trust assessments.",

  highlights: [
    "Runtime Monitoring of Multi-Agent AI Workflows",
    "Execution Tracing and Trust Score Evaluation",
    "Risk Assessment and Classification",
    "Explainable Decision Insights",
    "Audit Logs, Alerts, and Monitoring Dashboard",
  ],

  tech: [
  "React.js",
  "FastAPI",
  "Python",
  "LangGraph",
  "JWT Authentication",
  "RBAC",
],

}
];

function Projects() {
  return (
    <section id="projects" className="section">

      <div className="section-head">

        <p className="section-label">
          <FolderGit2 size={16} />
          Featured Projects
        </p>

        <h2>Things I've Built</h2>

        <p className="section-description">
          A collection of projects that demonstrate my skills in software
          engineering, full stack development, and artificial intelligence.
        </p>

      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
          >

            <div className="project-header">

              <div>

                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.title}</h3>

              </div>

              {project.featured && (
                <span className="featured-badge">
                  <Star size={15} />
                  Featured
                </span>
              )}

            </div>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-highlights">

              {project.highlights.map((item) => (
                <div
                  key={item}
                  className="highlight-item"
                >
                  ✓ {item}
                </div>
              ))}

            </div>

            <div className="tech-list">

              {project.tech.map((tech) => (
                <span key={tech}>
                  {tech}
                </span>
              ))}

            </div>

            <div className="project-actions">

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn primary"
              >
                <GithubIcon size={18} />
                View Code
              </a>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Projects;