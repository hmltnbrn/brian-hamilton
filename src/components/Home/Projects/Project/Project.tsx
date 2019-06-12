import React from 'react';
import styles from './Project.module.scss';

import classNames from 'classnames/bind';

import { ButtonLink } from '../../../Local/Button/Button';

type Props = {
  background: string,
  title: string,
  links: Array<{
    href: string,
    text: string
  }>
};

let cx = classNames.bind(styles);

class Project extends React.Component<Props> {

  render() {

    const projectStyle = {
      background: `url(${this.props.background}) no-repeat center center`,
      backgroundSize: "cover"
    };

    const links = this.props.links.map(link => 
      <ButtonLink type="a" key={link.text} href={link.href} target="_blank" rel="noopener noreferrer" white>{link.text}</ButtonLink>
    );

    return (
      <div className={cx("project")} style={projectStyle}>
        <div className={cx("project-overlay")} tabIndex={0}>
          <div className={cx("project-title")}>{this.props.title}</div>
          <div className={cx("project-links")}>
            {links}
          </div>
        </div>
      </div>
    );
  }
};

export default Project;
