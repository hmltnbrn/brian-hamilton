//@flow

import React from 'react';
import './Home.scss';

import Banner from '../Banner/Banner';
import About from './About/About';
import Technologies from './Technologies/Technologies';
import Projects from './Projects/Projects';
import ContactMe from './ContactMe/ContactMe';

class Home extends React.Component<{}> {
  render() {
    return (
      <div className="home-components">
        <Banner />
        <About />
        <Technologies />
        <Projects />
        <ContactMe />
      </div>
    );
  }
}

export default Home;
