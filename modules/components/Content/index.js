import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

class Content extends React.Component {

  render() {

    return (
      <MuiThemeProvider>
        <div className="content">
          <div className="flex flex-column">
            <div id="about" className="element">
              <About/>
            </div>
            <div id="resume" className="element">
              <Resume windowWidth={this.props.windowWidth}/>
            </div>
            <div id="projects" className="element">
              <Projects/>
            </div>
            <div id="contact" className="element">
              <Contact windowWidth={this.props.windowWidth}/>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
};

export default Content;
