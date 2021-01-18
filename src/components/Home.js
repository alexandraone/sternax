import React from 'react';
import About from '../containers/about/About';
import Clients from '../containers/clients/Clients';
import Contact from '../containers/contact/Contact';
import Employees from '../containers/employees/Employees';
import Services from '../containers/services/Services';
import Hero from './hero/Hero';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Employees />
      <Clients />
      <Contact />
    </>
  );
};

export default Home;
