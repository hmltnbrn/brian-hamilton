import React from 'react';
import './Banner.css';

class Banner extends React.Component {

  render() {

    return (
      <div id="banner" className="Banner-container">
        <div className="Banner-words">
          <div className="Banner-name">Brian Hamilton</div>
          <div className="Banner-title">web developer</div>
         </div>
      </div>
    );
  }
};

export default Banner;
