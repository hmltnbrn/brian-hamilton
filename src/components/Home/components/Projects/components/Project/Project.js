import React from 'react';
import './Project.css';

class Project extends React.Component {

  render() {

    const projectStyle = {
      background: `url(${this.props.background}) no-repeat center center`,
      backgroundSize: "cover"
    };

    const links = this.props.links.map(link => 
      <a key={link.text} href={link.href} target="_blank">{link.text}</a>
    );

    return (
      <div className="project" style={projectStyle}>
        <div className="project-overlay" tabIndex="0">
          <div className="project-title">{this.props.title}</div>
          <div className="project-links">
            {links}
          </div>
        </div>
      </div>
    );
  }
};

export default Project;
