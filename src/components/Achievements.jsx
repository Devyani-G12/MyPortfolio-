import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  BookOpen,
  BriefcaseBusiness,
} from "lucide-react";

const achievements = [
  {
    title: "AI / ML Internship",
    subtitle: "NetLeap IT Training & Solutions • 2025",
    icon: BriefcaseBusiness,
    description:
      "Completed an AI/ML internship with hands-on experience in machine learning workflows, data preprocessing, and practical AI application development.",
  },
{
  title: "Infosys Springboard Virtual Internship",
  subtitle: "AI/ML Project • 2026",
  icon: Award,
  description:
    "Completed a virtual internship through Infosys Springboard, gaining project experience in demand forecasting and capacity optimization using machine learning.",
},
  {
    title: "Technical Writer",
    subtitle: "Medium",
    icon: BookOpen,
    description:
      "Published technical articles covering software engineering, artificial intelligence, and emerging technologies to share knowledge with the developer community.",
  },
  {
    title: "Academic Excellence",
    subtitle: "B.E. Computer Engineering",
    icon: Trophy,
    description:
      "Maintaining a strong academic record while actively building software projects, completing internships, and continuously improving technical skills.",
  },
];

function Achievements() {
  return (
    <section id="achievements" className="section">

      <div className="section-head">

        <p className="section-label">
          <Trophy size={16} />
          Achievements
        </p>

        <h2>Milestones & Recognition</h2>

        <p className="section-description">
          Experiences and accomplishments that reflect my continuous learning,
          technical growth, and commitment to software engineering.
        </p>

      </div>

      <div className="timeline">

        {achievements.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={item.title}
              className="timeline-item"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >

              <div className="timeline-dot">
                <Icon size={18} />
              </div>

              <div className="timeline-content">

                <h3>{item.title}</h3>

                <strong>{item.subtitle}</strong>

                <p>{item.description}</p>

              </div>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}

export default Achievements;