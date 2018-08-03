import React from 'react';
import './NotFound.css';

class NotFound extends React.Component {
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {

    return (
      <div className="not-found">
        <div className="error-section">
          <h1>404</h1>
          <p className="small">Page Not Found</p>
        </div>
        <p className="description">The page you're looking for doesn't exist. Sorry.</p>
        <p className="contact"><span className="span-link" onClick={this.goBack}>Go back</span> or <a href="mailto:hmltnbrn@gmail.com">contact me</a> with details.</p>
      </div>
    );
  }
};

export default NotFound;
