import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";

const experience = [
  {
    role: "AI / ML Intern",
    company: "NetLeap IT Training & Solutions",
    duration: "2026",
    description:
      "Gained hands-on experience in building AI and machine learning applications, focusing on data preprocessing, model development, and practical implementation.",

    highlights: [
      "Developed AI/ML solutions using Python",
      "Performed data preprocessing and analysis",
      "Worked with machine learning workflows",
      "Strengthened problem-solving through real-world projects",
    ],
  },
  {
  role: "Virtual Intern",
  company: "Infosys Springboard",
  duration: "2026",
  description:
    "Completed a virtual internship through Infosys Springboard, working on an AI/ML project focused on demand forecasting and capacity optimization.",

  highlights: [
    "Analyzed infrastructure usage data for demand forecasting",
    "Performed data preprocessing and feature engineering",
    "Explored machine learning approaches for capacity optimization",
    "Collaborated with a team on the internship project",
  ],
},
];

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-head">
        <p className="section-label">
          <Briefcase size={16} />
          Experience
        </p>

        <h2>Professional Experience</h2>

        <p className="section-description">
          Practical experience gained through internships, collaborative
          projects, and hands-on software development.
        </p>
      </div>

      <div className="timeline">
        {experience.map((item, index) => (
          <motion.div
            key={item.role}
            className="timeline-item"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
          >
            <div className="timeline-dot">
              <Briefcase size={18} />
            </div>

            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{item.role}</h3>
                <span>{item.duration}</span>
              </div>

              <h4>{item.company}</h4>

              <p>{item.description}</p>

              <div className="experience-highlights">
                {item.highlights.map((point) => (
                  <div key={point} className="highlight">
                    <CheckCircle2 size={16} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;