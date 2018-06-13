import React from 'react';
import './Resume.css';

class Resume extends React.Component {

  render() {

    return (
      <div className="resume-container">
        <div className="resume-section">
          <div className="section-left">
            <h1>Skills</h1>
          </div>
          <div className="section-right">
            <div className="side-by-side">
              <div>
                <h2>Languages/Frameworks</h2>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3 / SASS</li>
                  <li>JavaScript / jQuery</li>
                  <li>PHP</li>
                  <li>D3.js</li>
                  <li>Python 2.7+</li>
                  <li>C++</li>
                  <li>Node.js</li>
                  <li>React</li>
                  <li>Angular 2+</li>
                  <li>PostgreSQL</li>
                  <li>MySQL</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
              <div>
                <h2>Methodologies</h2>
                <ul>
                  <li>Agile Software Development</li>
                  <li>REST API</li>
                  <li>Responsive Web Design</li>
                  <li>Cross-Browser Compatibility</li>
                  <li>Mobile Web Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="resume-section">
          <div className="section-left">
            <h1>Experience</h1>
          </div>
          <div className="section-right">
            <div className="resume-experience">
              <h2><span className="primary-color">Software Engineer</span> <span className="company-name">DGDean</span></h2>
              <h3>New York, New York | July 2017 - Present</h3>
            </div>
            <div className="resume-experience">
              <h2><span className="primary-color">Consultant Web Developer</span> <span className="company-name">New York City Transit</span></h2>
              <h3>New York, New York | March 2015 - March 2017</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Resume;
