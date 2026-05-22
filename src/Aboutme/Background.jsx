import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';
import EducationSplit from './EducationSplit';
import ExperienceSplit from './ExperienceSplit';
import './Background.css';

function Background() {
  const { isDark } = useTheme();

  return (
    <section
      id="background-section"
      className={isDark ? 'dark' : 'light'}
    >
      <motion.div className="background-layout">
        <motion.div
          className="vertical-title"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>BACKGROUND</h1>
        </motion.div>

        <div className="background-panels">
          <EducationSplit embedded />
          <ExperienceSplit embedded />
        </div>
      </motion.div>
    </section>
  );
}

export default Background;
