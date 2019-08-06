import React from 'react';
import { Helmet } from "react-helmet";

import Banner from '../Banner/Banner';
import About from './About/About';
import Technologies from './Technologies/Technologies';
import Projects from './Projects/Projects';
import ContactMe from './ContactMe/ContactMe';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Brian Hamilton</title>
      </Helmet>
      <Banner />
      <About />
      <Technologies />
      <Projects />
      <ContactMe />
    </>
  );
};

export default Home;
