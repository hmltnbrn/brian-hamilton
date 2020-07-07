import React from 'react';
import styles from './Project.module.scss';
import { connect } from 'react-redux';
import { getProject } from '../actions';

import { AppState } from '../../../store';

import classNames from 'classnames/bind';

interface Links {
  href: string;
  text: string;
}

interface Background {
  src: string;
  position: string;
}

interface StateProps {
  dialog: boolean;
}

interface Props {
  id: number;
  background: Background;
  title: string;
  year: string;
  description: string;
  technology: string[];
  links: Links[];
  complete: boolean;
  active: boolean;
  dialog: boolean;
  getProject: (id: number) => void;
}

const cx = classNames.bind(styles);

const Project = (props: Props): JSX.Element => {
  const projectStyle = {
    // tslint:disable-next-line: prettier
    background: `url(${props.background.src}) no-repeat ${props.background.position}`,
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

export default connect(mapStateToProps, { getProject })(Project);
