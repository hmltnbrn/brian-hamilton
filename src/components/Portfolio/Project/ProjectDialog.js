//@flow

import React from 'react';
import styles from './ProjectDialog.module.scss';
import { connect } from 'react-redux';
import { toggleDialog, getProject } from '../actions';
import { compose } from 'redux';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import withMobileDialog from '@material-ui/core/withMobileDialog';

import classNames from 'classnames/bind';

type Props = {
  project: {
    id: number,
    background: string,
    title: string,
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
    return (
      <Dialog
        fullScreen={false}
        open={this.props.dialog}
        onClose={() => this.props.toggleDialog()}
        maxWidth="md"
        fullWidth={true}
      >
        <DialogContent className={cx("project-dialog", "center")}>
          <h2>{this.props.project.title}</h2>
          <button type="button" onClick={() => this.props.toggleDialog()}>Close</button>
        </DialogContent>
      </Dialog>
    );
  }
};

const mapStateToProps = (state) => ({
  dialog: state.portfolio.dialog,
  project: state.portfolio.project
});

export default compose(
  withMobileDialog(),
  connect(mapStateToProps, { toggleDialog, getProject })
)(ProjectDialog);
