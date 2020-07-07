import React from 'react';
import styles from './ProjectDialog.module.scss';
import { connect } from 'react-redux';
import { toggleDialog } from '../actions';
import { compose } from 'redux';
import parse from 'html-react-parser';

import { AppState } from '../../../store';

import classNames from 'classnames/bind';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import withMobileDialog from '@material-ui/core/withMobileDialog';

import { ButtonLink } from '../../Local/Button/Button';

interface Links {
  href: string;
  text: string;
}

interface Background {
  src: string;
  position: string;
}

interface ProjectType {
  id?: number;
  background?: Background;
  title?: string;
  year?: string;
  description?: string;
  technology?: string[];
  links?: Links[];
  complete?: boolean;
  active?: boolean;
}

interface StateProps {
  project: ProjectType;
  dialog: boolean;
}

interface Props {
  project: ProjectType;
  dialog: boolean;
  toggleDialog: () => void;
}

const cx = classNames.bind(styles);

const ProjectDialog = ({ project, dialog, ...props }: Props): JSX.Element => {
  const projectStyle = {
    // tslint:disable-next-line: prettier
    background: `url(${project.background ? project.background.src : ''}) no-repeat top center`,
    backgroundSize: 'cover'
  };
  const projectLinks = project.links || [];
  const projectTech = project.technology || [];
  return (
    <Dialog
      fullScreen={false}
      open={dialog}
      onClose={props.toggleDialog}
      maxWidth="md"
      fullWidth={true}
      scroll={'body'}
    >
      <DialogContent className={cx('project-dialog', 'center')}>
        <div className={cx('dialog-banner')} style={projectStyle}>
          <div className={cx('dialog-banner-overlay')} />
        </div>
        <div className={cx('exit-container')}>
          <div className={cx('drawer-exit')} onClick={props.toggleDialog}>
            <i className="material-icons" tabIndex={0}>
              clear
            </i>
          </div>
        </div>
        <div className={cx('active-container')}>
          <div className={cx('active-dot', { inactive: !project.active })} />
          <h4 className={cx({ inactive: !project.active })}>
            {project.active ? 'Active' : 'Inactive'}
          </h4>
        </div>
        <h2>{project.title}</h2>
        <h3>{project.year}</h3>
        <div className={cx('badge-container')}>
          {projectTech.map((tech: any, index: number): any => {
            return (
              <div key={index} className={cx('tech-badge')}>
                {tech}
              </div>
            );
          })}
        </div>
        <p>{parse(project.description || '')}</p>
        <div className={cx('project-links')}>
          {projectLinks.map((link: any, index: number): any => {
            return (
              <ButtonLink
                type="a"
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.text}
              </ButtonLink>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};

const mapStateToProps = (state: AppState): StateProps => ({
  dialog: state.portfolio.dialog,
  project: state.portfolio.project
});

export default compose<any>(
  withMobileDialog(),
  connect(mapStateToProps, { toggleDialog })
)(ProjectDialog);
