//@flow

import React from 'react';
import './Technologies.scss';

import { Link } from 'react-router-dom';

import Technology from './Technology/Technology';

class Technologies extends React.Component<{}> {
  render() {
    return (
      <div className="home-technologies">
        <p>Working with modern frameworks and languages, I build comprehensive web projects and interactive data visualizations.</p>
        <div className="all-tech">
          <Technology
            href="https://angular.io/"
            src="images/tech-logos/angular.png"
            alt="Angular Logo"
            title="Angular"
          />
          <Technology
            href="https://d3js.org/"
            src="images/tech-logos/d3.png"
            alt="D3.js Logo"
            title="D3.js"
          />
          <Technology
            href="https://nodejs.org/en/"
            src="images/tech-logos/nodejs.png"
            alt="Node.js Logo"
            title="Node.js"
          />
          <Technology
            href="https://www.postgresql.org/"
            src="images/tech-logos/postgresql.png"
            alt="PostgreSQL Logo"
            title="PostgreSQL"
          />
          <Technology
            href="https://www.python.org/"
            src="images/tech-logos/python.png"
            alt="Python Logo"
            title="Python"
          />
          <Technology
            href="https://reactjs.org/"
            src="images/tech-logos/react.png"
            alt="React Logo"
            title="React"
          />
        </div>
        <div className="resume-link-container">
          <Link to="resume" className="button-link inverse">Take a Look at My Resume</Link>
        </div>
      </div>
    );
  }
};

export default Technologies;
