import React, { useEffect } from 'react';
import styles from './Portfolio.module.scss';
import { connect } from 'react-redux';
import { getPortfolio } from './actions';
import { Helmet } from "react-helmet";

import { AppState } from "../../store";

import classNames from 'classnames/bind';

import Project from './Project/Project';
import ProjectDialog from './Project/ProjectDialog';

let cx = classNames.bind(styles);

type ProjectType = {
  id: number,
  background: string,
  title: string,
  year: string,
  description: string,
  technology: Array<string>,
  links: Array<{
    href: string,
    text: string
  }>,
  complete: boolean,
  active: boolean
}

type Props = {
  portfolio: Array<ProjectType>,
  getPortfolio: () => void
}

const Portfolio = ({ portfolio, getPortfolio }: Props) => {

  useEffect(() => {
    getPortfolio();
  }, [getPortfolio]);

  const completeProjects = portfolio.filter(project => project.complete).map((project) => {
    return (<Project key={project.id} { ...project }/>);
  });

  const inCompleteProjects = portfolio.filter(project => !project.complete).map((project) => {
    return (<Project key={project.id} { ...project }/>);
  });

  return (
    <>
      <Helmet>
        <title>Brian Hamilton | Portfolio</title>
      </Helmet>
      <div className={cx("lead-container")}>
        <div className={cx("lead-text")}>
          <p>Throughout my career, I've worked on a range of work and personal projects. Below are some examples. Click on the image to get further details of each.</p>
        </div>
      </div>
      <div className={cx("portfolio-sections")}>
        <div className={cx("portfolio-section", "completed-projects")}>
          <h1>Completed projects</h1>
          <div className={cx("portfolio-project-container")}>
            {completeProjects}
          </div>
        </div>
        <div className={cx("portfolio-section", "in-progress-projects")}>
          <h1>Under construction</h1>
          <div className={cx("portfolio-project-container")}>
            {inCompleteProjects}
          </div>
        </div>
      </div>
      <ProjectDialog/>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  portfolio: state.portfolio.portfolio
});

export default connect(mapStateToProps, { getPortfolio })(Portfolio);
