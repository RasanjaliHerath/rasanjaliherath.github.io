import { motion } from 'framer-motion';
import logoLight from './assets/logo.jpg';
import logoDark from './assets/logow.png';
import ScrollToTopButton from './ScrollToTopButton';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowUp
} from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';

import './Footer.css';
import { useTheme } from './ThemeContext';

function Footer() {

  const { isDark } = useTheme();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const handleNavigation = (path) => {
  navigate(path);

  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, 100);
};

  return (

    <footer
      id="footer"
      className={isDark ? 'dark' : 'light'}
    >

      {/* TOP AREA */}

      <div className="footer-container">

        {/* BRAND */}

        <motion.div
          className="footer-brand"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

      <img
  src={isDark ? logoDark : logoLight}
  alt="KRH Logo"
  className={`footer-logo${isDark ? ' footer-logo--dark' : ''}`}
/>

          <p>
            Building elegant, scalable, and modern digital experiences
            through creative frontend and full-stack engineering.
          </p>

        </motion.div>

        {/* QUICK LINKS */}

        <motion.div
          className="footer-links"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >

          <h2>Quick Links</h2>

          <button onClick={() => handleNavigation('/')}>
            Home
          </button>

          <button onClick={() => handleNavigation('/about')}>
            About
          </button>

          <button onClick={() => handleNavigation('/projects')}>
            Works
          </button>

          

          <button onClick={() => handleNavigation('/contact')}>
            Contact
          </button>

        </motion.div>

        {/* TECH STACK

        <motion.div
          className="footer-tech"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          viewport={{ once: true }}
        >

          <h2>Tech Stack</h2>

          <span>React</span>
          <span>Spring Boot</span>
          <span>Java</span>
          <span>MySQL</span>
          <span>Node.js</span>
          <span>REST APIs</span>

        </motion.div> */}

        {/* SOCIAL LINKS */}

        <motion.div
          className="footer-social"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          viewport={{ once: true }}
        >

          <h2>Connect</h2>

          <div className="social-icons">

            <a href="https://github.com/RasanjaliHerath" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/kaushalya-herath" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>

            <a href="https://wa.me/94778266824" target="_blank" rel="noreferrer" title="WhatsApp">
              <FaWhatsapp />
            </a>

            <a href="tel:+94703661394" title="Call">
              <FaPhoneAlt />
            </a>

            <a href="mailto:https://krherath.dev@gmail.com/">
              <FaEnvelope />
            </a>

          </div>

        </motion.div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2026 LiloraX. All Rights Reserved.
        </p>

        <ScrollToTopButton />

      </div>

    </footer>
  );
}

export default Footer;