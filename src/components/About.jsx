import { motion } from "framer-motion";
import { User, GraduationCap, Rocket } from "lucide-react";

function About() {
  return (
    <section id="about" className="section">
      <div className="section-head">
        <p className="section-label">
          <User size={16} />
          About Me
        </p>

        <h2>Building Software with Purpose</h2>
      </div>

      <div className="split">

        {/* Left Side */}

        <motion.div
          className="about-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3>Hello, I'm Devyani Goraksha </h3>

          <p>
            I'm a final-year Computer Engineering undergraduate focused on
            designing and developing software that is clean, practical, and
            user-centric. I enjoy transforming ideas into applications through
            thoughtful design and efficient implementation.
          </p>

          <p>
            My interests include Full Stack Development, Software Engineering,
            and Artificial Intelligence. Every project is an opportunity to
            strengthen my problem-solving skills, write better code, and build
            solutions that create real value.
          </p>

          <p>
            Beyond development, I enjoy exploring new technologies and sharing
            what I learn through technical articles on Medium.
          </p>
        </motion.div>

        {/* Right Side */}

        <motion.div
          className="about-card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="about-info">

            <div className="info-item">
              <GraduationCap size={22} />
              <div>
                <h4>Education</h4>
                <p>B.E. Computer Engineering</p>
              </div>
            </div>

            <div className="info-item">
              <Rocket size={22} />
              <div>
                <h4>Focus Areas</h4>
                <p>Software Engineering, Full Stack Development & AI</p>
              </div>
            </div>

            <div className="info-item">
              <User size={22} />
              <div>
                <h4>Current Goal</h4>
                <p>Building impactful projects and preparing for Software Engineering roles.</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;