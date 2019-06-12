import React from 'react';
import styles from './CustomSnackbar.module.scss';

import classNames from 'classnames/bind';

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

type Props = {
  type: string,
  message: string,
  open: boolean,
  onClose: () => void
};

let cx = classNames.bind(styles);

class CustomSnackbar extends React.Component<Props> {

  render() {

    const { type } = this.props;

    const Icon = () => {
      switch(type) {
        case 'success':
          return <i className="material-icons">done</i>;
        case 'warning':
          return <i className="material-icons">warning</i>;
        case 'error':
          return <i className="material-icons">error</i>;
        default:
          return null;
      }
    };

    const backgroundColor: any = {
      success: "#2e7d32",
      warning: "#f9a825",
      error: "#c62828"
    };

    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={this.props.open}
        autoHideDuration={6000}
        onClose={this.props.onClose}
      >
        <SnackbarContent
          aria-describedby="bh-snackbar"
          style={{backgroundColor: backgroundColor[type]}}
          message={
            <span id="bh-snackbar" className={cx("snackbar-message")}>
              {Icon()}
              <span>{this.props.message}</span>
            </span>
          }
          action={[
            <div key="clear" onClick={this.props.onClose} className={cx("snackbar-close")}><i className="material-icons">clear</i></div>
          ]}
        />
      </Snackbar>
    );
  }
};

export default CustomSnackbar;
