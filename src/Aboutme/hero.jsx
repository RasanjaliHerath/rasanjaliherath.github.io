import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';
import './hero.css';

import heroImage from '../assets/ws.jpeg';

function Hero() {

  const { isDark } = useTheme();

  return (

    <section
      id="hero-about"
      className={isDark ? 'dark' : 'light'}
    >

      <div className="hero-about-container">

        {/* LEFT IMAGE */}

        <motion.div
          className="hero-about-image"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >

          <img
            src={heroImage}
            alt="profile"
          />

        </motion.div>

        {/* RIGHT CONTENT */}

        <motion.div
          className="hero-about-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >

          {/* TOP LINE */}

          <div className="top-line">

            <div className="line"></div>

            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>

          {/* TEXT */}

          <div className="hero-text">

            <p>
              Passionate Software Engineer dedicated to building modern,
              scalable, and user-focused digital experiences through
              creative development, clean architecture, and innovative
              problem solving across web and mobile platforms.
            </p>

            <div className="expertise-grid">

  <div className="expertise-column">

    <span>/ FULL STACK WEB DEVELOPMENT</span>

    <span>/ MOBILE APPLICATION DEVELOPMENT</span>

    <span>/ WEB DESIGN (UI/UX)</span>

    <span>/ RESPONSIVE FRONTEND DEVELOPMENT</span>

    <span>/ DATABASE DESIGNING</span>

  </div>

  <div className="expertise-column">

    <span>/ REST API DEVELOPMENT</span>

    <span>/ ENTERPRISE SOFTWARE DEVELOPMENT</span>

    <span>/ MODERN JAVASCRIPT APPLICATIONS</span>

    <span>/ CROSS PLATFORM APP DEVELOPMENT</span>

    <span>/ SOFTWARE ARCHITECTURE & SYSTEM DESIGN</span>

  </div>

</div>

          </div>

          {/* BOTTOM LINE */}

          <div className="bottom-line"></div>

          {/* BACKGROUND CIRCLE */}

          <div className="bg-circle"></div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;