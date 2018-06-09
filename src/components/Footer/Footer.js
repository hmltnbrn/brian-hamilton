import React from 'react';
import './Footer.css';

class Footer extends React.Component {

  render() {

    return (
      <footer>
        <p className="footer-name">Brian Hamilton © 2016-2018</p>
        <p className="footer-repo">View this site&rsquo;s <a href="https://github.com/hmltnbrn/brian-hamilton" target="_blank" rel="noopener noreferrer">repository</a> | Photo by <a href="https://www.flickr.com/photos/tedchambers/" target="_blank" rel="noopener noreferrer">Ted Chambers</a></p>
      </footer>
    );
  }
};

export default Footer;
