import Hero from './Hero';
import ShortAboutMe from './shortAboutme';
import Education from './Education';
import Experience from './Experience';
import ToolsTech from './ToolsTech';

function Home() {
  return (
    <>
      <Hero />
      <ShortAboutMe />
        <Education />
        <Experience />
        <ToolsTech/>


    </>
  );
}

export default Home;
