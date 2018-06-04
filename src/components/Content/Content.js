import React from 'react';
import './Content.css';

import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

class Content extends React.Component {

  render() {

    return (
      <div className="Content-container">
        <div id="about" className="element">
          <About/>
        </div>
        <div id="resume" className="element">
          <Resume windowWidth={this.props.windowWidth} />
        </div>
        <div id="projects" className="element">
          <Projects/>
        </div>
        <div id="contact" className="element">
          <Contact windowWidth={this.props.windowWidth} />
        </div>
      </div>
    );
  }
};

export default Content;
