import React from 'react';
import styles from './CustomSnackbar.module.scss';

import classNames from 'classnames/bind';

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

interface Props {
  type: string;
  message: string;
  open: boolean;
  onClose: () => void;
}

const cx = classNames.bind(styles);

const CustomSnackbar = ({
  type,
  message,
  open,
  onClose
}: Props): JSX.Element => {
  const Icon = (): JSX.Element | null => {
    switch (type) {
      case 'success':
        return <i className="material-icons">done</i>;
      case 'warning':
        return <i className="material-icons">warning</i>;
      case 'error':
        return <i className="material-icons">error</i>;
      case 'notification':
        return <i className="material-icons">notifications</i>;
      default:
        return null;
    }
  };

  const backgroundColor: any = {
    success: '#4caf50',
    warning: '#ff9800',
    error: '#f44336',
    notification: '#2196f3'
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
    >
      <SnackbarContent
        aria-describedby="bh-snackbar"
        style={{ backgroundColor: backgroundColor[type] }}
        message={
          <span id="bh-snackbar" className={cx('snackbar-message')}>
            {Icon()}
            <span>{message}</span>
          </span>
        }
        action={[
          <div key="clear" onClick={onClose} className={cx('snackbar-close')}>
            <i className="material-icons">clear</i>
          </div>
        ]}
      />
    </Snackbar>
  );
};

export default CustomSnackbar;
