import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';
import './EducationModern.css';
import eduImage from '../assets/uni.png';
import edu2Image from '../assets/java.jpg';
import edu3Image from '../assets/mern.jpg';

function EducationModern() {

  const { isDark } = useTheme();

  const scrollSlider = (direction) => {

    const slider = document.querySelector('.education-grid');

    if (!slider) return;

    slider.scrollBy({
      left: direction === 'left' ? -320 : 320,
      behavior: 'smooth',
    });
  };

  return (

    <section
      id="education-modern"
      className={isDark ? 'dark' : 'light'}
    >

      {/* TOP BAR */}

      <div className="top-bar">

        <h1 className="top-bar-title-bg">
          BACKGROUND
        </h1>

        <h1 className="top-bar-title-edu">
          EDUCATION
        </h1>

      </div>

      {/* MOBILE SLIDER WRAPPER */}

      <div className="education-slider-wrapper">

        {/* LEFT ARROW */}

        <button
          className="slider-arrow left"
          onClick={() => scrollSlider('left')}
        >
          ❮
        </button>

        {/* GRID */}

        <div className="education-grid">

          {/* CARD 1 */}

          <motion.div
            className="education-card education-card--primary"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >

            <div className="education-image-top">

              {/* <img
                src={eduImage}
                alt="education"
              /> */}

            </div>

            <div className="education-content">

              <h2>
                BICT Honours
              </h2>

              <h3>
                University of Jaffna
              </h3>

              <span>
                2022 - 2026
              </span>

              <p>
                Bachelor of Information and Communication Technology
                (Honours) undergraduate focused on software engineering,
                full-stack web development, database systems,
                UI/UX design, and scalable application development.
              </p>

            </div>

          </motion.div>

          {/* CARD 2 */}

          <motion.div
            className="education-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >

            <div className="education-image-top">

              <img
                src={edu2Image}
                alt="education"
              />

            </div>

            <div className="education-content">

              <h2>
                Diploma Course on Enterprise Software
                Application Development by Java Programming
              </h2>

              <h3>
                IDET Pvt Ltd
              </h3>

              <span>
                2023 - 2024
              </span>

              <p>
                Focused on enterprise-level Java application
                development, backend systems,
                object-oriented programming,
                and software architecture.
              </p>

            </div>

          </motion.div>

          {/* CARD 3 */}

          <motion.div
            className="education-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >

            <div className="education-image-top">

              <img
                src={edu3Image}
                alt="education"
              />

            </div>

            <div className="education-content">

              <h2>
                Enterprise Software Application
                Development by MERN Stack
              </h2>

              <h3>
                IDET Pvt Ltd
              </h3>

              <span>
                2023 - 2024
              </span>

              <p>
                Specialized in MERN stack application
                development including React,
                Express.js, Node.js,
                MongoDB, and responsive frontend engineering.
              </p>

              <p>
                Developed modern web applications
                with scalable architecture and
                interactive user experiences.
              </p>

            </div>

          </motion.div>

        </div>

        {/* RIGHT ARROW */}

        <button
          className="slider-arrow right"
          onClick={() => scrollSlider('right')}
        >
          ❯
        </button>

      </div>

    </section>
  );
}

export default EducationModern;