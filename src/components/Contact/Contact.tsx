import React, { useState } from 'react';
import styles from './Contact.module.scss';
import { Helmet } from 'react-helmet';

import classNames from 'classnames/bind';

import axios from 'axios';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import withMobileDialog from '@material-ui/core/withMobileDialog';

import ReCAPTCHA from 'react-google-recaptcha';

import Input from '../Local/Input/Input';
import TextArea from '../Local/TextArea/TextArea';
import CustomSnackbar from '../Local/CustomSnackbar/CustomSnackbar';
import { ButtonLink, RoundButtonLink } from '../Local/Button/Button';

const cx = classNames.bind(styles);

const Contact = (): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [nameError, setNameError] = useState<boolean | string>(false);
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean | string>(false);
  const [subject, setSubject] = useState<string>('');
  const [subjectError, setSubjectError] = useState<boolean | string>(false);
  const [message, setMessage] = useState<string>('');
  const [messageError, setMessageError] = useState<boolean | string>(false);
  const [recaptcha, setRecaptcha] = useState<string | null>('');
  const [emailDialog, setEmailDialog] = useState<boolean>(false);
  const [phoneDialog, setPhoneDialog] = useState<boolean>(false);
  const [emailSuccessSnackbar, setEmailSuccessSnackbar] = useState<boolean>(
    // tslint:disable-next-line: trailing-comma
    false
  );
  const [recaptchaSnackbar, setRecaptchaSnackbar] = useState<boolean>(false);
  const [emailErrorSnackbar, setEmailErrorSnackbar] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,63})+$/;
    let validEmail = true;

    !name ? setNameError('Required field') : setNameError(false);
    !subject ? setSubjectError('Required field') : setSubjectError(false);
    !message ? setMessageError('Required field') : setMessageError(false);
    !recaptcha ? setRecaptchaSnackbar(true) : setRecaptchaSnackbar(false);

    if (!email) {
      setEmailError('Required field');
      validEmail = false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Not a valid email');
      validEmail = false;
    } else {
      setEmailError(false);
      validEmail = true;
    }

    if (name && validEmail === true && subject && message && recaptcha) {
      setEmailDialog(false);
      sendEmail();
    }
    event.preventDefault();
  };

  const sendEmail = async (): Promise<any> => {
    const data = {
      name,
      email,
      subject,
      message,
      recaptcha
    };
    try {
      await axios.post(`${process.env.REACT_APP_API || ''}/send`, data);
      setEmailSuccessSnackbar(true);
      clear();
    } catch (e) {
      setEmailErrorSnackbar(true);
      setRecaptcha('');
    }
  };

  const clear = (): void => {
    setName('');
    setNameError(false);
    setEmail('');
    setEmailError(false);
    setSubject('');
    setSubjectError(false);
    setMessage('');
    setMessageError(false);
  };

  return (
    <>
      <Helmet>
        <title>Brian Hamilton | Contact</title>
      </Helmet>
      <div className={cx('contact-map')} />
      <div className={cx('contact-top-container')}>
        <div className={cx('contact-chooser')}>
          <div
            className={cx('contact-option')}
            onClick={(): void => setEmailDialog(true)}
          >
            <i className="material-icons">email</i>
            <div className={cx('contact-text')}>Shoot me an email</div>
          </div>
          <div
            className={cx('contact-option')}
            onClick={(): void => setPhoneDialog(true)}
          >
            <i className="material-icons">phone</i>
            <div className={cx('contact-text')}>Give me a ring</div>
          </div>
        </div>
      </div>
      <Dialog
        fullScreen={true}
        open={emailDialog}
        onClose={(): void => setEmailDialog(false)}
      >
        <DialogContent className={cx('contact-dialog')}>
          <div className={cx('dialog-exit')}>
            <i
              className="material-icons"
              onClick={(): void => setEmailDialog(false)}
              tabIndex={0}
            >
              clear
            </i>
          </div>
          <form onSubmit={handleSubmit} noValidate={true}>
            <Input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={name}
              errorText={nameError}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setName(e.currentTarget.value)
              }
            />
            <Input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={email}
              errorText={emailError}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setEmail(e.currentTarget.value)
              }
            />
            <Input
              type="text"
              name="subject"
              placeholder="Subject *"
              value={subject}
              errorText={subjectError}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setSubject(e.currentTarget.value)
              }
            />
            <TextArea
              name="message"
              rows={6}
              placeholder="Message *"
              value={message}
              errorText={messageError}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void =>
                setMessage(e.currentTarget.value)
              }
            />
            <div className={cx('recaptcha-container')}>
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY || ''}
                onChange={(token: string | null): void => setRecaptcha(token)}
              />
            </div>
            <div className={cx('dialog-button-container')}>
              <ButtonLink type="button" onButtonClick={clear}>
                Clear
              </ButtonLink>
              <ButtonLink type="submit">Send Email</ButtonLink>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog
        fullScreen={true}
        open={phoneDialog}
        onClose={(): void => setPhoneDialog(false)}
      >
        <DialogContent className={cx('contact-dialog', 'center')}>
          <div className={cx('dialog-exit')}>
            <i
              className="material-icons"
              onClick={(): void => setPhoneDialog(false)}
              tabIndex={0}
            >
              clear
            </i>
          </div>
          <p>On a phone? Tap the button below.</p>
          <div className={cx('dialog-button-container', 'phone')}>
            <RoundButtonLink
              type="a"
              href="tel:1-518-391-5033"
              onButtonClick={(): void => setPhoneDialog(false)}
            >
              <i className="material-icons">phone</i>
            </RoundButtonLink>
          </div>
          <p className={cx('phone-wrap')}>
            <span>Otherwise, call me at </span>
            <span>
              <strong>(518) 391-5033</strong>.
            </span>
          </p>
          <span />
        </DialogContent>
      </Dialog>
      <CustomSnackbar
        open={emailSuccessSnackbar}
        message="Email sent!"
        onClose={(): void => setEmailSuccessSnackbar(false)}
        type="success"
      />
      <CustomSnackbar
        open={recaptchaSnackbar}
        message="Are you a robot?"
        onClose={(): void => setRecaptchaSnackbar(false)}
        type="warning"
      />
      <CustomSnackbar
        open={emailErrorSnackbar}
        message="Email failed to send"
        onClose={(): void => setEmailErrorSnackbar(false)}
        type="error"
      />
    </>
  );
};

export default withMobileDialog()(Contact);
