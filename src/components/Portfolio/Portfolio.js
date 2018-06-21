import React from 'react';
import './Portfolio.css';

import Project from '../Home/components/Projects/components/Project/Project';

class Portfolio extends React.Component {

  render() {

    const projectOneLinks = [
      { href: "https://github.com/hmltnbrn/classroom-library", text: "Repository" },
      { href: "http://classroomlibrary.brianhamilton.me/", text: "Live Demo" }
    ];

    const projectTwoLinks = [
      { href: "https://github.com/end-line/end-line", text: "Repository" }
    ];

    const projectThreeLinks = [
      { href: "http://www.commonwealthfund.org/interactives/2017/july/mirror-mirror/", text: "Live Site" }
    ];

    const projectFourLinks = [];

    const projectFiveLinks = [
      { href: "https://github.com/hmltnbrn/nyc-school-crimes", text: "Repository" },
      { href: "http://schools.brianhamilton.me/", text: "View Project" }
    ];

    const projectSixLinks = [];

    return (
      <div className="portfolio-container">
        <div className="portfolio-sections">
          <div className="portfolio-section completed-projects">
            <h1>Completed projects</h1>
            <div className="portfolio-project-container">
              <Project
                background="'./images/projects/classroom-library.png'"
                title="Classroom Library"
                links={projectOneLinks}
              />
              <Project
                background="'./images/projects/end-line.png'"
                title="end/line"
                links={projectTwoLinks}
              />
              <Project
                background="'./images/projects/mirror-mirror.png'"
                title="Mirror, Mirror 2017"
                links={projectThreeLinks}
              />
              <Project
                background="'./images/projects/train-movement.png'"
                title="NYCT Train Movement"
                links={projectFourLinks}
              />
              <Project
                background="'./images/projects/school-crimes.png'"
                title="NYC School Crimes"
                links={projectFiveLinks}
              />
            </div>
          </div>
          <div className="portfolio-section in-progress-projects">
            <h1>Under construction</h1>
            <div className="portfolio-project-container">
            <Project
              background="'./images/projects/book-bin.png'"
              title="BookBin"
              links={projectSixLinks}
            />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Portfolio;
