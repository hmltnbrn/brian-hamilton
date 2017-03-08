import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Footer extends React.Component {

  render() {

    return (
      <MuiThemeProvider>
        <div className="footer">
          <p className="footer-built">Brian Hamilton © 2016-2017</p>
          <p className="footer-photo">View this site&rsquo;s <a href="https://github.com/hmltnbrn/brian-hamilton" target="_blank">repository</a> | Photo by <a href="https://www.flickr.com/photos/tedchambers/" target="_blank">Ted Chambers</a></p>
        </div>
      </MuiThemeProvider>
    );
  }
};

export default Footer;
