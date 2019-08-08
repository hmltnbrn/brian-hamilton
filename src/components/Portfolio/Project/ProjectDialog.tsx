import React from 'react';
import styles from './ProjectDialog.module.scss';
import { connect } from 'react-redux';
import { toggleDialog } from '../actions';
import { compose } from 'redux';

import { AppState } from "../../../store";

import classNames from 'classnames/bind';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import withMobileDialog from '@material-ui/core/withMobileDialog';

import { ButtonLink } from '../../Local/Button/Button';

type Props = {
  project: {
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
  },
  dialog: boolean,
  toggleDialog: () => void
};

let cx = classNames.bind(styles);

const ProjectDialog = ({ project, dialog, toggleDialog }: Props) => {
  const projectStyle = {
    background: `url(${project.background}) no-repeat center center`,
    backgroundSize: "cover"
  };
  let projectLinks = project.links || [];
  let projectTech = project.technology || [];
  return (
    <Dialog
      fullScreen={false}
      open={dialog}
      onClose={() => toggleDialog()}
      maxWidth="md"
      fullWidth={true}
      scroll={"body"}
    >
      <DialogContent className={cx("project-dialog", "center")}>
        <div className={cx("dialog-banner")} style={projectStyle}>
          <div className={cx("dialog-banner-overlay")}></div>
        </div>
        <div className={cx("exit-container")}>
          <div className={cx("drawer-exit")} onClick={() => toggleDialog()}><i className="material-icons" tabIndex={0}>clear</i></div>
        </div>
        <div className={cx("active-container")}>
          <div className={cx("active-dot", { "inactive": !project.active })}></div>
          <h4 className={cx({ "inactive": !project.active })}>{project.active ? "Active" : "Inactive"}</h4>
        </div>
        <h2>{project.title}</h2>
        <h3>{project.year}</h3>
        <div className={cx("badge-container")}>
          {projectTech.map((tech, index) => {
            return <div key={index} className={cx("tech-badge")}>{tech}</div>
          })}
        </div>
        <p>{project.description}</p>
        <div className={cx("project-links")}>
          {projectLinks.map((link, index) => {
            return <ButtonLink type="a" key={index} href={link.href} target="_blank" rel="noopener noreferrer">{link.text}</ButtonLink>
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};

const mapStateToProps = (state: AppState) => ({
  dialog: state.portfolio.dialog,
  project: state.portfolio.project
});

export default compose<any>(
  withMobileDialog(),
  connect(mapStateToProps, { toggleDialog })
)(ProjectDialog);
