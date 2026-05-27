import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { useTheme } from '../ThemeContext';

import {
  FaGraduationCap,
  FaCertificate,
  FaArrowRight,
} from 'react-icons/fa';

import './Education.css';

const educationData = [
  {
    title: 'University of Jaffna — BICT (Honors)',
    year: '2022 - 2026',
    icon: <FaGraduationCap />,
    bullets: [
      'Software Engineering & Application Development',
      'Database Systems & UI/UX Design',
      'Responsive Web & Mobile Interfaces',
    ],
    details:
      'Studied software engineering, modern application development, database systems, UI/UX design, and scalable digital solutions.',
  },

  {
    title: 'Institute of Digital Engineering Technology',
    year: '2023 - 2024',
    icon: <FaCertificate />,
    bullets: [
      'Enterprise Software Development using Java',
      'Enterprise MERN Stack Application Development',
    ],
    details:
      'Focused on backend engineering, enterprise systems, REST APIs, scalable architectures, and modern full stack development.',
  },
];

function Education() {

  const { isDark } = useTheme();

  const navigate = useNavigate();

  const goToAboutEducation = () => {
    navigate('/about#education-modern');
  };

  return (

    <section
      id="education"
      className={isDark ? 'dark' : 'light'}
    >

      {/* BACKGROUND ART */}

      <div className="edu-line one"></div>
      <div className="edu-line two"></div>

      <div className="edu-circle top"></div>
      <div className="edu-circle bottom"></div>

      <div className="edu-wave"></div>

      <div className="education-container">

        <motion.h1
          className="education-heading"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          EDUCATION

        </motion.h1>

        <motion.div
          className="education-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >

          {educationData.map((item, index) => (

            <motion.div
              key={index}
              className="education-item"

              initial={{
                opacity: 0,
                scale: 0.85,
                rotate: -4,
                filter: 'blur(10px)',
              }}

              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                filter: 'blur(0px)',
              }}

              transition={{
                delay: index * 0.2,
                duration: 0.9,
              }}

              viewport={{ once: true }}

              whileHover={{
                y: -10,
                scale: 1.02,
              }}
            >

              <div className="education-top">

                <div className="education-icon">
                  {item.icon}
                </div>

                <div>

                  <h2>{item.title}</h2>

                  <span className="education-year">
                    {item.year}
                  </span>

                </div>

              </div>

              <ul className="education-bullets">

                {item.bullets.map((bullet, bulletIndex) => (

                  <li key={bulletIndex}>

                    <span className="bullet-dot"></span>

                    {bullet}

                  </li>

                ))}

              </ul>

              <p className="education-details">
                {item.details}
              </p>

              <button
                className="education-button"
                onClick={goToAboutEducation}
              >

                Explore More

                <FaArrowRight />

              </button>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}

export default Education;
