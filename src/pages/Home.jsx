import React from 'react'
import NavBar from './../components/NavBar';
import About from './About';
import Experience from './Experience';
import Project from './Project';
import Contact from './Contact';
import HeroSection from '../components/heroSection';
import OtherProjects from './OtherProjects';

const Home = () => {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <About/>
      <Experience/>
      <Project/>
      <OtherProjects/>
      <Contact/>
    </div>
  )
}

export default Home
