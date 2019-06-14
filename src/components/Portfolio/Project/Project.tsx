import React from 'react';
import styles from './Project.module.scss';
import { connect } from 'react-redux';
import { getProject } from '../actions';

import classNames from 'classnames/bind';

type Props = {
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
  active: boolean,
  dialog: boolean,
  getProject: (id: number) => void
};

let cx = classNames.bind(styles);

class Project extends React.Component<Props> {
  render() {
    const projectStyle = {
      background: `url(${this.props.background}) no-repeat center center`,
      backgroundSize: "cover"
    };
    return (
      <>
        <div className={cx("project")} style={projectStyle} onClick={()=>this.props.getProject(this.props.id)}>
          <div className={cx("project-overlay")} tabIndex={0}>
            <div className={cx("project-title")}>{this.props.title}</div>
          </div>
        </div>
      </>
    );
  }
};

const mapStateToProps = (state: any) => ({
  dialog: state.portfolio.dialog
});

export default connect(mapStateToProps, { getProject })(Project);
