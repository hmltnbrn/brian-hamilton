import React from 'react';
import styles from './Technology.module.scss';

import classNames from 'classnames/bind';

type Props = {
  href: string,
  src: string,
  alt: string,
  title: string
};

let cx = classNames.bind(styles);

class Technology extends React.Component<Props> {
  render() {
    return (
      <div className={cx("tech-container")} tabIndex={0}>
        <a href={this.props.href} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
          <img src={this.props.src} alt={this.props.alt} />
          <h2>{this.props.title}</h2>
        </a>
      </div>
    );
  }
};

export default Technology;
