import React from 'react';
import './CustomSnackbar.css';

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

class CustomSnackbar extends React.Component {

  render() {

    const type = this.props.type;

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
    }

    const backgroundColor = {
      success: "#2e7d32",
      warning: "#f9a825",
      error: "#c62828"
    }

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
            <span id="bh-snackbar" className="snackbar-message">
              {Icon()}
              <span>{this.props.message}</span>
            </span>
          }
          action={[
            <div key="clear" onClick={this.props.onClose} className="snackbar-close"><i className="material-icons">clear</i></div>
          ]}
        />
      </Snackbar>
    );
  }
};

export default CustomSnackbar;
