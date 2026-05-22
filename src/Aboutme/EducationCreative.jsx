import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';
import './EducationCreative.css';

import eduImage from '../assets/aboutSmall.jpeg';

function EducationCreative() {

  const { isDark } = useTheme();

  return (

    <section
      id="education-creative"
      className={isDark ? 'dark' : 'light'}
    >

      <div className="education-layout">

        {/* LEFT VERTICAL TITLE */}

        <motion.div
          className="vertical-title"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h1>BACKGROUND</h1>

        </motion.div>

        {/* CENTER */}

        <motion.div
          className="education-center"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2>BICT honours</h2>

          <h3>University Of Vavuniya</h3>

          <span>2022–2026</span>

          <p>
            Bachelor of Information and Communication Technology
            (Honours) undergraduate focused on software engineering,
            full-stack web development, database systems,
            UI/UX design, and scalable application development.
          </p>

          <div className="curve-line"></div>

          <div className="edu-image">
            <img src={eduImage} alt="education" />
          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="education-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >

          <div className="education-heading">
            <h1>Education</h1>
          </div>

          <div className="education-item">

            <h2>
              Diploma course on Enterprise Software Application
              Development by Java Programming
            </h2>

            <h3>
              Institute Of Digital Engineering Technology
            </h3>

            <span>2022–2026</span>

            <p>
              Focused on enterprise-level Java application
              development, object-oriented programming,
              backend systems, and software architecture.
            </p>

          </div>

          <div className="education-item">

            <h2>
              Enterprise Software Application Development
              by MERN Stack
            </h2>

            <h3>
              Institute Of Digital Engineering Technology
            </h3>

            <span>2024–2025</span>

            <p>
              Specialized in modern MERN stack application
              development including React, Node.js,
              Express.js, MongoDB, and responsive frontend engineering.
            </p>

          </div>

          <div className="curve-line right-line"></div>

          <div className="small-image-grid">

            <img src={eduImage} alt="edu" />
            <img src={eduImage} alt="edu" />

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default EducationCreative;