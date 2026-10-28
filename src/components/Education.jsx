
import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  Award,
  BookOpen,
} from "lucide-react";

function Education() {
  const coursework = [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
    "Object-Oriented Programming",
    "Machine Learning",
  ];

  return (
    <section id="education" className="section">
      <div className="section-head">
        <p className="section-label">
          <GraduationCap size={16} />
          Education
        </p>

        <h2>Academic Background</h2>

        <p className="section-description">
          My academic journey in computer engineering,
          supported by practical projects and continuous learning.
        </p>
      </div>

      <motion.div
        className="education-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="education-header">
          <div>
            <h4>Bachelor of Engineering</h4>
            <h3>Computer Engineering</h3>
          </div>

          <GraduationCap size={34} />
        </div>

        <p className="college-name">
          Pune Vidyarthi Griha's College of Engineering &
          S.S. Dhamankar Institute of Management, Nashik
        </p>

        <div className="education-info">
          <div className="info-box">
            <Calendar size={18} />
            <div>
              <span>Duration</span>
              <strong>2023 – 2027</strong>
            </div>
          </div>

          <div className="info-box">
            <Award size={18} />
            <div>
              <span>CGPA</span> <br /> <strong>8.79</strong>
            </div>
          </div>
        </div>

        <div className="coursework">
          <h4>
            <BookOpen size={18} />
            Relevant Coursework
          </h4>

          <ul className="course-tags">
            {coursework.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

export default Education;
