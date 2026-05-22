import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';
import './AboutTitle.css';

function AboutTitle() {

  const { isDark } = useTheme();

  return (

    <section
      id="about-title"
      className={isDark ? 'dark' : 'light'}
    >

      {/* DECORATIVE CIRCLES */}

      <div className="corner-circle top-left"></div>
      <div className="corner-circle bottom-right"></div>

      <motion.div
        className="about-title-wrapper"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          ABOUT ME
        </motion.h1>

      </motion.div>

    </section>
  );
}

export default AboutTitle;