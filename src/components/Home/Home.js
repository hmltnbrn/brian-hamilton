//@flow

import React from 'react';
import './Home.scss';

import Banner from '../Banner/Banner';
import About from './components/About/About';
import Technologies from './components/Technologies/Technologies';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';

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
