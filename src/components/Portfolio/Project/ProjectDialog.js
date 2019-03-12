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

import { Button } from '../../Local/Button/Button';

type Props = {
  project: {
    id: number,
    background: string,
    title: string,
    links: Array<{
      href: string,
      text: string
    }>
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
      >
        <DialogContent className={cx("contact-dialog", "center")}>
          {this.props.project.title}
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
