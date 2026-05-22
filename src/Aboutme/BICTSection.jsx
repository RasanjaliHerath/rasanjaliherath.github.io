import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';
import './BICTSection.css';

import bictImage from '../assets/aboutSmall.jpeg';

function BICTSection() {

  const { isDark } = useTheme();

  return (

    <section
      id="bict-section"
      className={isDark ? 'dark' : 'light'}
    >

      {/* BACKGROUND PATTERN */}

      <div className="pattern-bg"></div>

      {/* LEAFS */}

      <div className="leaf left"></div>
      <div className="leaf right"></div>

      <motion.div
        className="bict-card"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >

        {/* TOP DECORATION */}

        <div className="top-decoration">

          <div className="curve"></div>

          <div className="circle"></div>

        </div>

        {/* TITLE */}

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          BICT
        </motion.h1>

        <span className="year">
          2022–2026
        </span>

        {/* CONTENT */}

        <div className="bict-content">

          {/* IMAGE */}

          <motion.div
            className="bict-image"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >

            <img
              src={bictImage}
              alt="bict"
            />

          </motion.div>

          {/* TEXT */}

          <motion.div
            className="bict-text"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >

            <p>
              Bachelor of Information and Communication Technology
              (Honours) undergraduate focused on full-stack web
              development, software engineering, database systems,
              UI/UX design, and modern application development
              while building innovative and scalable digital solutions.
            </p>

          </motion.div>

        </div>

      </motion.div>

    </section>
  );
}

export default BICTSection;