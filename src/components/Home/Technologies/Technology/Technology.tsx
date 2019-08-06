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

const Technology = ({ href, src, alt, title }: Props) => {
  return (
    <div className={cx("tech-container")} tabIndex={0}>
      <a href={href} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
        <img src={src} alt={alt} />
        <h2>{title}</h2>
      </a>
    </div>
  );
};

export default Technology;
