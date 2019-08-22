import React from 'react';
import styles from './Project.module.scss';
import { connect } from 'react-redux';
import { getProject } from '../actions';

import { AppState } from '../../../store';

import classNames from 'classnames/bind';

interface StateProps {
  dialog: boolean;
}

interface Props {
  id: number;
  background: string;
  title: string;
  year: string;
  description: string;
  technology: string[];
  links: Array<{
    href: string;
    text: string;
  }>;
  complete: boolean;
  active: boolean;
  dialog: boolean;
  getProject: (id: number) => void;
}

const cx = classNames.bind(styles);

const Project = (props: Props): JSX.Element => {
  const projectStyle = {
    background: `url(${props.background}) no-repeat center center`,
    backgroundSize: 'cover'
  };

  return (
    <div
      className={cx('project')}
      style={projectStyle}
      onClick={(): void => props.getProject(props.id)}
    >
      <div className={cx('project-overlay')} tabIndex={0}>
        <div className={cx('project-title')}>{props.title}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState): StateProps => ({
  dialog: state.portfolio.dialog
});

export default connect(
  mapStateToProps,
  { getProject }
)(Project);
