import React from 'react';
import Services from '../containers/Services';
import Hero from '../Hero';
import About from './About';
import Clients from './Clients';
import Contact from './Contact';
import Employees from './Employees';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Employees />
      <Clients />
      <Contact />
    </div>
  );
};

export default Home;
