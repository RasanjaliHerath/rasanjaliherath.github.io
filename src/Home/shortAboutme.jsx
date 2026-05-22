import { motion } from 'framer-motion';

import { useTheme } from '../ThemeContext';
import './shortAboutme.css';

import aboutMain from '../assets/ws.jpeg';

function ShortAboutMe() {

  const { isDark } = useTheme();

  return (

    <section
      id="short-about"
      className={isDark ? 'dark' : 'light'}
    >

      {/* SHAPES */}

      <div className="shape top-left"></div>
      <div className="shape bottom-right"></div>
      <div className="shape middle-circle"></div>

      <div className="about-container">

        {/* LEFT */}

        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >

          <motion.span
            className="about-tag"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >

            CREATIVE DEVELOPER

          </motion.span>

          <motion.h1
            className="about-title"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >

            Meet Kaushalya

          </motion.h1>

          <motion.p
            className="about-text"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >

            Hello! I’m a passionate Software Engineer focused on
            creating modern digital experiences with clean design,
            scalable solutions, and user-centered development.

            I enjoy transforming ideas into interactive applications
            while combining creativity, problem-solving, and modern
            engineering approaches to build elegant and responsive
            experiences across web and mobile platforms.

          </motion.p>

          {/* SKILLS */}

    <motion.div
  className="typing-skill-box"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.8 }}
  viewport={{ once: true }}
>

  <span className="typing-prefix">
    Specialized In
  </span>

  <span className="typing-text">

    <span className="auto-type"></span>

  </span>

</motion.div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <motion.div
            className="main-image-wrapper"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >

            <img
              src={aboutMain}
              alt="about-main"
            />

          </motion.div>

          <div className="shadow"></div>

        </motion.div>

      </div>

    </section>
  );
}

export default ShortAboutMe;