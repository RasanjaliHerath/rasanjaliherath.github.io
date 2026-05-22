import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';
import './ToolsTech.css';

function ToolsTech() {

  const { isDark } = useTheme();

  const skills = {
    languages: [
      'Python',
      'PHP',
      'WordPress',
      'Java (Core Java)',
      'JavaScript',
      'C#',
      'C++',
      'C',
      'SQL'
    ],

    frameworks: [
      'Spring Boot',
      'React',
      'React Native',
      'Angular',
      'Next.js',
      'Vue.js',
      'Express.js',
      '.NET'
    ],

    technologies: [
      'RESTful APIs',
      'JSON',
      'Database Management',
      'Responsive UI Design',
      'Microsoft SQL Server'
    ]
  };

  return (

    <section
      id="technical-expertise"
      className={isDark ? 'dark' : 'light'}
    >

      <div className="expertise-container">

        {/* TITLE */}

        <motion.h1
          className="expertise-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          TECHNICAL  EXPERTISE
        </motion.h1>

        {/* GRID */}

        <div className="expertise-grid">

          {/* LANGUAGES */}

          <motion.div
            className="expertise-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <h2>Languages</h2>

            <div className="tag-container">

              {skills.languages.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}

            </div>

          </motion.div>

          {/* FRAMEWORKS */}

          <motion.div
            className="expertise-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >

            <h2>Frameworks</h2>

            <div className="tag-container">

              {skills.frameworks.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}

            </div>

          </motion.div>

          {/* TECHNOLOGIES */}

          <motion.div
            className="expertise-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
          >

            <h2>Technologies</h2>

            <div className="tag-container">

              {skills.technologies.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default ToolsTech;