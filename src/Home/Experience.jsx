import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";
import { useNavigate } from 'react-router-dom';
import "./Experience.css";

import softwareImage from "../assets/cse.png";
import customerImage from "../assets/contac.png";

function Experience() {

  const { isDark } = useTheme();
  const navigate = useNavigate();

const goToAboutExperience = () => {
  navigate('/about#experience-modern');
};

  return (

    <section
      id="experience"
      className={isDark ? "dark" : "light"}
    >

      <div className="experience-container">

        {/* LEFT SIDE */}

        <motion.div
          className="experience-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >

          <div className="flip-card">

            <div className="flip-card-inner">

              {/* FRONT IMAGE */}

              <div className="flip-card-front">

                <img
                  src={softwareImage}
                  alt="Software Engineer"
                />

               

              </div>

              {/* BACK IMAGE */}

              <div className="flip-card-back">

                <img
                  src={customerImage}
                  alt="Customer Service"
                />

               

              </div>

            </div>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          className="experience-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >

          <h1 className="experience-heading">
            EXPERIENCE
          </h1>

          {/* CARD 1 */}

          <motion.div
            className="experience-item"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >

            <h2>
              Software Engineer - Intern
            </h2>

            <h3>
              IDET (Institute of Digital Engineering Technology)
            </h3>

            <span>
              Aug 2023 - Jan 2024
            </span>

            <p>
              Developed full-stack web applications using modern
              technologies including React, Java Spring Boot,
              MySQL, REST APIs, and responsive frontend design.
            </p>

          </motion.div>

          {/* CARD 2 */}

          <motion.div
            className="experience-item"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
          >

            <h2>
              Customer Service Executive
            </h2>

            <h3>
              SMCL (Sejaya Micro Credit Limited)
            </h3>

            <span>
              Feb 2021 - Aug 2021
            </span>

            <p>
              Provided excellent customer support and service
              management while handling client communication,
              issue resolution, and operational coordination.
            </p>

          </motion.div>

          {/* BUTTON */}

          <div className="experience-button-wrapper">

   <button
  className="experience-learn-btn"
  onClick={goToAboutExperience}
>
  Explore More
</button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Experience;