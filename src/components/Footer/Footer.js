import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

import { TwitterIcon } from '../../icons/Twitter';
import { LinkedInIcon } from '../../icons/LinkedIn';
import { GitHubIcon } from '../../icons/GitHub';

class Footer extends React.Component {

  render() {

    return (
      <footer>
        <p className="footer-name">Brian Hamilton © 2016-2018</p>
        <div className="footer-nav">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/resume" className="footer-link">Resume</Link>
          <Link to="/portfolio" className="footer-link">Portfolio</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>
        <div className="footer-nav">
          <a href="tel:1-518-391-5033"><i className="material-icons">phone</i></a>
          <a href="mailto:hmltnbrn@gmail.com"><i className="material-icons">email</i></a>
          <a href="https://twitter.com/hmltnbrn" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
          <a href="https://www.linkedin.com/in/brian-hamilton-520835a8" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
          <a href="https://github.com/hmltnbrn" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
        </div>
      </footer>
    );
  }
};

export default Footer;
