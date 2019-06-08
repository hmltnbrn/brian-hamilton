import React from 'react';
import styles from './ContactMe.module.scss';

import classNames from 'classnames/bind';

import { ButtonLink } from '../../Local/Button/Button';

let cx = classNames.bind(styles);

class ContactMe extends React.Component<{}> {
  render() {
    return (
      <div className={cx("contact-me-container")}>
        <div className={cx("overlay")}>
          <h1>Want to chat?</h1>
          <p>Whether it's to talk about politics, a freelance opportunity, or the latest Angular, send me a message.</p>
          <ButtonLink type="link" to="contact" white>Click Here to Contact Me</ButtonLink>
        </div>
      </div>
    );
  }
};

export default ContactMe;
