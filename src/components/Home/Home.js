import React, { Component } from 'react';
import './Home.scss';

import Banner from '../Banner/Banner';
import About from './components/About/About';
import Technologies from './components/Technologies/Technologies';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({windowWidth: window.innerWidth});
  }

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
