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

const Project = ({ title, background, links }: Props) => {

  const projectStyle = {
    background: `url(${background}) no-repeat center center`,
    backgroundSize: "cover"
  };

  const buttonLinks = links.map(link => 
    <ButtonLink type="a" key={link.text} href={link.href} target="_blank" rel="noopener noreferrer" white>{link.text}</ButtonLink>
  );

  return (
    <div className={cx("project")} style={projectStyle}>
      <div className={cx("project-overlay")} tabIndex={0}>
        <div className={cx("project-title")}>{title}</div>
        <div className={cx("project-links")}>
          {buttonLinks}
        </div>
      </div>
    </div>
  );
};

export default Project;
