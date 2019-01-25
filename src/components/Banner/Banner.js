import React from 'react';
import './Banner.scss';

class Banner extends React.Component {
  render() {
    return (
      <div id="banner" className="banner-container">
        <div className="banner-words">
          <div className="banner-name">Brian Hamilton</div>
          <div className="banner-title">web developer</div>
         </div>
      </div>
    );
  }
};

export default Banner;
