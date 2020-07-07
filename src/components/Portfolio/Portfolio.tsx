import React, { useEffect } from 'react';
import styles from './Portfolio.module.scss';
import { connect } from 'react-redux';
import { getPortfolio } from './actions';
import { Helmet } from 'react-helmet';

import { AppState } from '../../store';

import classNames from 'classnames/bind';

import Project from './Project/Project';
import ProjectDialog from './Project/ProjectDialog';

const cx = classNames.bind(styles);

interface Links {
  href: string;
  text: string;
}

interface Background {
  src: string;
  position: string;
}

interface ProjectType {
  id: number;
  background: Background;
  title: string;
  year: string;
  description: string;
  technology: string[];
  links: Links[];
  complete: boolean;
  active: boolean;
}

interface StateProps {
  portfolio: ProjectType[];
}

interface Props {
  portfolio: ProjectType[];
  getPortfolio: () => void;
}

// tslint:disable-next-line: no-shadowed-variable
const Portfolio = ({ portfolio, getPortfolio }: Props): JSX.Element => {
  useEffect((): any => {
    const fetchData = (): void => {
      return getPortfolio();
    };
    fetchData();
  }, [getPortfolio]);

  const completeProjects = portfolio
    .filter((project: ProjectType): boolean => project.complete)
    .map(
      (project: ProjectType): JSX.Element => {
        return <Project key={project.id} {...project} />;
      }
    );

  const inCompleteProjects = portfolio
    .filter((project: ProjectType): boolean => !project.complete)
    .map(
      (project: ProjectType): JSX.Element => {
        return <Project key={project.id} {...project} />;
      }
    );

  return (
    <>
      <Helmet>
        <title>Brian Hamilton | Portfolio</title>
      </Helmet>
      <div className={cx('lead-container')}>
        <div className={cx('lead-text')}>
          <p>
            Throughout my career, I've worked on a range of work and personal
            projects. Below are some examples. Click on the image to get further
            details of each.
          </p>
        </div>
      </div>
      <div className={cx('portfolio-sections')}>
        <div className={cx('portfolio-section', 'completed-projects')}>
          <h1>Completed projects</h1>
          <div className={cx('portfolio-project-container')}>
            {completeProjects}
          </div>
        </div>
        <div className={cx('portfolio-section', 'in-progress-projects')}>
          <h1>Under construction</h1>
          <div className={cx('portfolio-project-container')}>
            {inCompleteProjects}
          </div>
        </div>
      </div>
      <ProjectDialog />
    </>
  );
};

const mapStateToProps = (state: AppState): StateProps => ({
  portfolio: state.portfolio.portfolio
});

export default connect(mapStateToProps, { getPortfolio })(Portfolio);
