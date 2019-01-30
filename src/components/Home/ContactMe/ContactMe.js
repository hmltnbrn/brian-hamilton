//@flow

import React from 'react';
import './ContactMe.scss';

import { Link } from 'react-router-dom';

class ContactMe extends React.Component<{}> {
  render() {
    return (
      <div className="home-contact-me">
        <div className="contact-banner-overlay">
          <h1>Want to chat?</h1>
          <p>Whether it's to talk about politics, a freelance opportunity, or the latest Angular, send me a message.</p>
          <Link to="contact">Click Here to Contact Me</Link>
        </div>
      </div>
    );
  }
};

export default ContactMe;
