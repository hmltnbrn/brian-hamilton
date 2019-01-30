//@flow

import React from 'react';
import './Project.scss';

type Props = {
  background: string,
  title: string,
  links: Array<{
    href: string,
    text: string
  }>
};

class Project extends React.Component<Props> {

  render() {

    const projectStyle = {
      background: `url(${this.props.background}) no-repeat center center`,
      backgroundSize: "cover"
    };

    const links = this.props.links.map(link => 
      <a key={link.text} href={link.href} target="_blank" rel="noopener noreferrer">{link.text}</a>
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