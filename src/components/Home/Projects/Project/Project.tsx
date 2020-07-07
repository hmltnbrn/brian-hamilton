import React from 'react';
import styles from './Project.module.scss';

import classNames from 'classnames/bind';

import { ButtonLink } from '../../../Local/Button/Button';

interface Links {
  href: string;
  text: string;
}

interface Background {
  src: string;
  position: string;
}

interface Props {
  background: Background;
  title: string;
  links: Links[];
}

const cx = classNames.bind(styles);

const Project = ({ title, background, links }: Props): JSX.Element => {
  const projectStyle = {
    background: `url(${background.src}) no-repeat ${background.position}`,
    backgroundSize: 'cover'
  };

  const buttonLinks = links.map(
    (link: Links): JSX.Element => (
      <ButtonLink
        type="a"
        key={link.text}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        white={true}
      >
        {link.text}
      </ButtonLink>
    )
  );

  return (
    <div className={cx('project')} style={projectStyle}>
      <div className={cx('project-overlay')} tabIndex={0}>
        <div className={cx('project-title')}>{title}</div>
        <div className={cx('project-links')}>{buttonLinks}</div>
      </div>
    </div>
  );
};

export default Project;
