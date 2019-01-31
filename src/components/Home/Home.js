//@flow

import React from 'react';
import styles from './Home.module.scss';

import classNames from 'classnames/bind';

import Banner from '../Banner/Banner';
import About from './About/About';
import Technologies from './Technologies/Technologies';
import Projects from './Projects/Projects';
import ContactMe from './ContactMe/ContactMe';

let cx = classNames.bind(styles);

class Home extends React.Component<{}> {
  render() {
    return (
      <div className={cx("home-components")}>
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
