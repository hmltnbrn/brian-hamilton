import React from 'react';
import styles from './ContactMe.module.scss';

import classNames from 'classnames/bind';

import { ButtonLink } from '../../Local/Button/Button';

const cx = classNames.bind(styles);

const ContactMe = (): JSX.Element => {
  return (
    <div className={cx('contact-me-container')}>
      <div className={cx('overlay')}>
        <h1>Want to chat?</h1>
        <p>
          Whether it's to talk about politics, a freelance opportunity, or the
          latest React, send me a message.
        </p>
        <ButtonLink type="link" to="contact" white={true}>
          Click Here to Contact Me
        </ButtonLink>
      </div>
    </div>
  );
};

export default ContactMe;
