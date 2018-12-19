import React from 'react';
import './Projects.css';

import { Link } from 'react-router-dom';

import Project from './components/Project/Project';

class Projects extends React.Component {

  render() {

    const projectOneLinks = [
      { href: "https://github.com/hmltnbrn/classroom-library", text: "Repository" },
      { href: "http://classroomlibrary.brianhamilton.me/", text: "Live Demo" }
    ];

    const projectTwoLinks = [
      { href: "https://www.commonwealthfund.org/blog/2018/understand-how-consumers-are-faring-individual-health-insurance-markets-watch-states", text: "Live Site" }
    ];

    return (
      <div className="home-projects">
        <h1>Featured projects</h1>
        <div className="project-container">
          <Project
            background="'./images/projects/classroom-library.png'"
            title="Classroom Library"
            links={projectOneLinks}
          />
          <Project
            background="'./images/projects/health-insurance.png'"
            title="What Is Your State Doing to Affect Access to Adequate Health Insurance?"
            links={projectTwoLinks}
          />
        </div>
        <div className="projects-link-container">
          <Link to="portfolio" className="button-link">View More on My Portfolio</Link>
        </div>
      </div>
    );
  }
};

export default Projects;
