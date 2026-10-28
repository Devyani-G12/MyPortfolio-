
import { motion } from "framer-motion";
import { Palette, Paintbrush } from "lucide-react";

function BeyondTechnology() {
  return (
    <section id="beyond-technology" className="section">
      <div className="section-head">
        <p className="section-label">
          <Palette size={16} />
          Beyond Technology
        </p>

        <h2>Creativity Beyond Code</h2>

        <p className="section-description">
          A glimpse into my interests beyond engineering
          and technology.
        </p>
      </div>

      <motion.div
        className="education-card"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="education-header">
          <div>
            <h3>A Creative Side</h3>
            <p className="college-name">
              A creative hobby
            </p>
          </div>

          <Palette size={30} />
        </div>

        <p>
         Outside engineering, I enjoy painting and exploring my creativity through colors and artistic expression.
        </p>

        <p>
          It is a personal hobby that gives me a refreshing break from technical work and academic learning.
        </p>
      </motion.div>
    </section>
  );
}

export default BeyondTechnology;
