//@flow

import React from 'react';
import './Technology.scss';

type Props = {
  href: string,
  src: string,
  alt: string,
  title: string
};

class Technology extends React.Component<Props> {
  render() {
    return (
      <div className="tech-container" tabIndex="0">
        <a href={this.props.href} target="_blank" rel="noopener noreferrer" tabIndex="-1">
          <img src={this.props.src} alt={this.props.alt} />
          <h2>{this.props.title}</h2>
        </a>
      </div>
    );
  }
};

export default Technology;
