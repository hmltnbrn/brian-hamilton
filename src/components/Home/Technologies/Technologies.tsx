import React from 'react';
import styles from './Technologies.module.scss';

import classNames from 'classnames/bind';

import { ButtonLink } from '../../Local/Button/Button';

import Technology from './Technology/Technology';

const cx = classNames.bind(styles);

const Technologies = (): JSX.Element => {
  return (
    <div className={cx('home-technologies')}>
      <p>
        Working with modern frameworks and languages, I build comprehensive web
        projects and interactive data visualizations.
      </p>
      <div className={cx('all-tech')}>
        <Technology
          href="https://angular.io/"
          src="images/tech-logos/angular.png"
          alt="Angular Logo"
          title="Angular"
        />
        <Technology
          href="https://d3js.org/"
          src="images/tech-logos/d3.png"
          alt="D3.js Logo"
          title="D3.js"
        />
        <Technology
          href="https://nodejs.org/en/"
          src="images/tech-logos/nodejs.png"
          alt="Node.js Logo"
          title="Node.js"
        />
        <Technology
          href="https://www.postgresql.org/"
          src="images/tech-logos/postgresql.png"
          alt="PostgreSQL Logo"
          title="PostgreSQL"
        />
        <Technology
          href="https://www.python.org/"
          src="images/tech-logos/python.png"
          alt="Python Logo"
          title="Python"
        />
        <Technology
          href="https://reactjs.org/"
          src="images/tech-logos/react.png"
          alt="React Logo"
          title="React"
        />
      </div>
      <div className={cx('resume-link-container')}>
        <ButtonLink type="link" to="resume" inverse={true}>
          Take a Look at My Resume
        </ButtonLink>
      </div>
    </div>
  );
};

export default Technologies;
