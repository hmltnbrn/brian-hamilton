//@flow

import React from 'react';

import Banner from '../Banner/Banner';
import About from './About/About';
import Technologies from './Technologies/Technologies';
import Projects from './Projects/Projects';
import ContactMe from './ContactMe/ContactMe';

class Home extends React.Component<{}> {
  render() {
    return (
      <>
        <Banner />
        <About />
        <Technologies />
        <Projects />
        <ContactMe />
      </>
    );
  }
}

export default Home;
