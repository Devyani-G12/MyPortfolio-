import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  BrainCircuit,
  Wrench,
  Terminal,
} from "lucide-react";

const skills = [
  {
    title: "Programming Languages",
    icon: Terminal,
    items: [
      "Java",
      "Python",
      "C++",
      "JavaScript",
      "C",
    ],
  },
  {
    title: "Frontend",
    icon: Code2,
    items: [
      "React",
      "HTML5",
      "CSS3",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    items: [
      "FastAPI",
      "Flask",
      "REST APIs",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    items: [
      "MySQL",
      "SQLite",
    ],
  },
  {
    title: "AI & Data",
    icon: BrainCircuit,
    items: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
    ],
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-head">
        <p className="section-label">
          <Code2 size={16} />
          Technical Skills
        </p>

        <h2>Technologies I Work With</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={skill.title}
              className="skill-status"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <Icon size={30} />

              <h3>{skill.title}</h3>

              <div>
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;