//@flow

import React from 'react';
import styles from './Portfolio.module.scss';
import { connect } from 'react-redux';
import { getPortfolio } from './actions';
import { Helmet } from "react-helmet";

import classNames from 'classnames/bind';

import Project from './Project/Project';
import ProjectDialog from './Project/ProjectDialog';

let cx = classNames.bind(styles);

type ProjectType = {
  id: number,
  background: string,
  title: string,
  links: Array<{
    href: string,
    text: string
  }>
}

type Props = {
  portfolio: Array<ProjectType>,
  getPortfolio: () => void
}

type State = {
  portfolio: Array<ProjectType>
};

class Portfolio extends React.Component<Props, State> {

  state = {
    portfolio: []
  };

  componentDidMount() {
    this.props.getPortfolio();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.portfolio) {
      this.setState({
        portfolio: nextProps.portfolio
      });
    }
  }

  render() {

    const { portfolio } = this.state;

    const completeProjects = portfolio.map((project) => {
      if(project.complete) return (<Project key={project.id} { ...project }/>);
    });

    const inCompleteProjects = portfolio.map((project) => {
      if(!project.complete) return (<Project key={project.id} { ...project }/>);
    });

    // const projectOneLinks = [
    //   { href: "https://github.com/hmltnbrn/classroom-library", text: "Repository" },
    //   { href: "http://classroomlibrary.brianhamilton.me/", text: "Live Demo" }
    // ];

    // const projectTwoLinks = [
    //   { href: "https://github.com/end-line/end-line", text: "Repository" }
    // ];

    // const projectThreeLinks = [
    //   { href: "http://www.commonwealthfund.org/interactives/2017/july/mirror-mirror/", text: "Live Site" }
    // ];

    // const projectFourLinks = [];

    // const projectFiveLinks = [
    //   { href: "https://github.com/hmltnbrn/nyc-school-crimes", text: "Repository" },
    //   { href: "http://schools.brianhamilton.me/", text: "View Project" }
    // ];

    // const projectSixLinks = [
    //   { href: "https://github.com/hmltnbrn/trebot", text: "Repository" }
    // ];

    // const projectSevenLinks = [
    //   { href: "https://www.commonwealthfund.org/blog/2018/understand-how-consumers-are-faring-individual-health-insurance-markets-watch-states", text: "Live Site" }
    // ];

    // const projectEightLinks = [];

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
              {/* <Project
                background="'./images/projects/classroom-library.png'"
                title="Classroom Library"
                links={projectOneLinks}
              />
              <Project
                background="'./images/projects/end-line.png'"
                title="end/line"
                links={projectTwoLinks}
              />
              <Project
                background="'./images/projects/mirror-mirror.png'"
                title="Mirror, Mirror 2017"
                links={projectThreeLinks}
              />
              <Project
                background="'./images/projects/train-movement.png'"
                title="NYCT Train Movement"
                links={projectFourLinks}
              />
              <Project
                background="'./images/projects/school-crimes.png'"
                title="NYC School Crimes"
                links={projectFiveLinks}
              />
              <Project
                background="'./images/projects/trebot.jpg'"
                title="Trebot"
                links={projectSixLinks}
              />
              <Project
                background="'./images/projects/health-insurance.png'"
                title="What Is Your State Doing to Affect Access to Adequate Health Insurance?"
                links={projectSevenLinks}
              /> */}
            </div>
          </div>
          <div className={cx("portfolio-section", "in-progress-projects")}>
            <h1>Under construction</h1>
            <div className={cx("portfolio-project-container")}>
              {inCompleteProjects}
            {/* <Project
              background="'./images/projects/book-bin.png'"
              title="BookBin"
              links={projectEightLinks}
            /> */}
            </div>
          </div>
        </div>
        <ProjectDialog/>
      </>
    );
  }
};

const mapStateToProps = (state) => ({
  portfolio: state.portfolio.portfolio
});

export default connect(mapStateToProps, { getPortfolio })(Portfolio);
