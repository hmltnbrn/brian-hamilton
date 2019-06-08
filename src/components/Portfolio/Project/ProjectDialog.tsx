import React from 'react';
import styles from './ProjectDialog.module.scss';
import { connect } from 'react-redux';
import { toggleDialog, getProject } from '../actions';
import { compose } from 'redux';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import withMobileDialog from '@material-ui/core/withMobileDialog';

import { ButtonLink } from '../../Local/Button/Button';

import classNames from 'classnames/bind';

type Props = {
  project: {
    id: number,
    background: string,
    title: string,
    description: string,
    technology: Array<string>,
    links: Array<{
      href: string,
      text: string
    }>,
    complete: boolean
  },
  dialog: boolean,
  toggleDialog: () => void
};

let cx = classNames.bind(styles);

class ProjectDialog extends React.Component<Props> {
  render() {
    const { project } = this.props;
    const projectStyle = {
      background: `url(${project.background}) no-repeat center center`,
      backgroundSize: "cover"
    };
    let projectLinks = project.links || [];
    return (
      <Dialog
        fullScreen={false}
        open={this.props.dialog}
        onClose={() => this.props.toggleDialog()}
        maxWidth="md"
        fullWidth={true}
      >
        <DialogContent className={cx("project-dialog", "center")}>
          <div className={cx("dialog-banner")} style={projectStyle}></div>
          <h2 className={cx("primary-color")}>{project.title}</h2>
          <p>{project.description}</p>
          {/* <button type="button" onClick={() => this.props.toggleDialog()}>Close</button> */}
          <div className={cx("project-links")}>
            {projectLinks.map(link => {
              return <ButtonLink type="a" key={link.text} href={link.href} target="_blank" rel="noopener noreferrer">{link.text}</ButtonLink>
            })}
          </div>
        </DialogContent>
      </Dialog>
    );
  }
};

const mapStateToProps = (state: any) => ({
  dialog: state.portfolio.dialog,
  project: state.portfolio.project
});

export default compose<any>(
  withMobileDialog(),
  connect(mapStateToProps, { toggleDialog, getProject })
)(ProjectDialog);
