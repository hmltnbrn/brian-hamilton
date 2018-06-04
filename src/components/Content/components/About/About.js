import React from 'react';
import './About.css';

class About extends React.Component {

  render() {

    return (
      <div className="section">
        <div className="About-container">
          <div className="About-content">
            <p>I&rsquo;m a full-stack developer based in Astoria, New York. 
            I specialize in data visualizations and full-stack web applications. 
            My main languages of focus are JavaScript (Node.js/React/Angular) and Python.</p>
            <p>See my resume and examples of my work below.</p>
          </div>
        </div>
      </div>
    );
  }
};

export default About;
