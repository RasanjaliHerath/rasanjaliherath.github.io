import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Hero from './hero';
import AboutHero from './AboutTitle';

import EducationModern from './EducationModern';
import ExperienceModern from './ExperienceModern';

function Aboutme() {

  const location = useLocation();

  useEffect(() => {

    if (location.hash) {

      const id = location.hash.replace('#', '');

      const element = document.getElementById(id);

      if (element) {

        setTimeout(() => {

          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });

        }, 200);

      }

    }

  }, [location]);

  return (
    <>

      <AboutHero />

      <Hero />

      <EducationModern />

      <ExperienceModern />

    </>
  );
}

export default Aboutme;