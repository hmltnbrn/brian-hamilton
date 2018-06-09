import React from 'react';
import './Technologies.css';

class Technologies extends React.Component {

  render() {

    return (
      <div className="home-technologies">
        <p>Working with modern frameworks and languages, I build comprehensive web projects and interactive data visualizations.</p>
        <div className="all-tech">
          <div className="tech-container">
            <a href="https://angular.io/" target="_blank" rel="noopener noreferrer">
              <img src="images/logos/angular.png" alt="Angular" />
              <h2>Angular</h2>
            </a>
          </div>
          <div className="tech-container">
            <a href="https://d3js.org/" target="_blank" rel="noopener noreferrer">
              <img src="images/logos/d3.png" alt="D3.js" />
              <h2>D3.js</h2>
            </a>
          </div>
          <div className="tech-container">
            <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
              <img src="images/logos/nodejs.png" alt="Node.js" />
              <h2>Node.js</h2>
            </a>
          </div>
          <div className="tech-container">
            <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">
              <img src="images/logos/postgresql.png" alt="PostgreSQL" />
              <h2>PostgreSQL</h2>
            </a>
          </div>
          <div className="tech-container">
            <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
              <img src="images/logos/python.png" alt="Python" />
              <h2>Python</h2>
            </a>
          </div>
          <div className="tech-container">
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
              <img src="images/logos/react.png" alt="React" />
              <h2>React</h2>
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default Technologies;
