import About from './About';
import Experience from './Experience';
import Project from './Project';
import Contact from './Contact';
import HeroSection from '../components/heroSection';

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default Home
