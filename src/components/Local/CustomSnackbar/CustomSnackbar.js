import React from 'react';
import './CustomSnackbar.css';

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

class CustomSnackbar extends React.Component {

  render() {

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
          style={{backgroundColor: "#2e7d32"}}
          message={
            <span id="bh-snackbar" className="snackbar-message">
              <i className="material-icons">done</i>
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
