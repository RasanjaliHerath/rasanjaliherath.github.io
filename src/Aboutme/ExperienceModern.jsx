import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';
import './ExperienceModern.css';

import expImage from '../assets/Sejaya-Logo.jpg';
import exp1Image from '../assets/idt.png';


function ExperienceModern() {

  const { isDark } = useTheme();

  return (

    <section
      id="experience-modern"
      className={isDark ? 'dark' : 'light'}
    >

      {/* TOP BAR */}

      <div className="top-bar">

        <h1 className="top-bar-title-bg">
          BACKGROUND
        </h1>

        <h1 className="top-bar-title-main">
          WORK EXPERIENCE
        </h1>

      </div>

      {/* GRID */}

      <div className="experience-grid">

        {/* CARD 1 */}

        <motion.div
          className="experience-card"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <div className="card-glow"></div>

          <h2>
            Software Engineer Intern
          </h2>

          <h3>
            Institute of Digital Engineering Technology (IDET)
          </h3>

          <span>
            2025 – Present
          </span>

          <ul>

    <li>
  Developed web applications using Spring Boot,
  React, PHP, Laravel, and WordPress
</li>

<li>
  Worked with frontend technologies including
  Angular and React Native
</li>

<li>
  Performed manual testing and API testing
  using Postman
</li>

<li>
  Identified, documented, and reported bugs
  to improve system performance and usability
</li>

<li>
  Assisted in User Acceptance Testing (UAT)
  and application deployment processes
</li>

<li>
  Deployed and maintained web applications
  in development and production environments
</li>

<li>
  Collaborated with developers to troubleshoot
  and resolve system defects and technical issues
</li>

<li>
  Supported backend systems, database operations,
  and maintained testing results
</li>

<li>
  Integrated REST APIs and assisted in
  backend feature development
</li>

<li>
  Participated in system maintenance,
  debugging, and performance optimization
</li>

<li>
  Worked effectively in a team environment
  to complete projects and meet deadlines
</li>

<li>
  Applied problem-solving skills to identify
  issues and implement effective solutions
</li>

          </ul>

          {/* <div className="experience-image">
            <img src={exp1Image} alt="experience" />
          </div> */}

        </motion.div>

        {/* CARD 2 */}

        <motion.div
          className="experience-card"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
        >

          <div className="card-glow"></div>

          <h2>
            Customer Service Executive
          </h2>

          <h3>
            Sejaya Micro Credit Limited (SMCL)
          </h3>

          <span>
            2021
          </span>

          <ul>

       <li>
  Provided professional customer support and
  resolved financial and system-related inquiries
</li>

<li>
  Maintained accurate customer records and ensured
  timely updates in company systems
</li>

<li>
  Assisted customers with financial transactions
  and basic technical troubleshooting
</li>

<li>
  Delivered high-quality customer service while
  ensuring accuracy and customer satisfaction
</li>

<li>
  Coordinated with internal departments to ensure
  smooth customer service operations
</li>

<li>
  Managed customer complaints and resolved issues
  efficiently and professionally
</li>

<li>
  Communicated with clients to provide clear
  information about company services and procedures
</li>

<li>
  Handled customer requests through phone calls,
  emails, and in-person communication
</li>

<li>
  Ensured confidentiality and security of
  customer financial information
</li>

<li>
  Assisted in preparing reports, documentation,
  and daily administrative tasks
</li>

<li>
  Built positive customer relationships to improve
  client trust and service experience
</li>

<li>
  Collaborated with team members to achieve
  operational and customer service goals
</li>

          </ul>
{/* 
          <div className="experience-image">
            <img src={expImage} alt="experience" />
          </div> */}

        </motion.div>

      </div>

    </section>
  );
}

export default ExperienceModern;