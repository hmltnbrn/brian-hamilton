import React from 'react';
import styles from './Projects.module.scss';

import classNames from 'classnames/bind';

import Project from './Project/Project';

import { ButtonLink } from '../../Local/Button/Button';

const cx = classNames.bind(styles);

const Projects = (): JSX.Element => {
  const projectOneLinks = [
    {
      href: 'https://github.com/hmltnbrn/classroom-library',
      text: 'Repository'
    },
    { href: 'http://classroomlibrary.brianhamilton.me/', text: 'Live Demo' }
  ];

  const projectTwoLinks = [
    {
      href:
        'https://www.commonwealthfund.org/blog/2018/understand-how-consumers-are-faring-individual-health-insurance-markets-watch-states',
      text: 'Live Site'
    }
  ];

  return (
    <div className={cx('home-projects')}>
      <h1>Featured projects</h1>
      <div className={cx('project-container')}>
        <Project
          background="'https://i.brianhamilton.me/classroom-library.png'"
          title="Classroom Library"
          links={projectOneLinks}
        />
        <Project
          background="'https://i.brianhamilton.me/health-insurance.png'"
          title="What Is Your State Doing to Affect Access to Adequate Health Insurance?"
          links={projectTwoLinks}
        />
      </div>
      <div className={cx('projects-link-container')}>
        <ButtonLink type="link" to="portfolio">
          View More on My Portfolio
        </ButtonLink>
      </div>
    </div>
  );
};

export default Projects;
