import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import axios from 'axios';
import classNames from 'classnames';
import { ChangeEvent, FC, FormEvent, useCallback, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Helmet } from 'react-helmet-async';

import { ButtonLink, RoundButtonLink } from '../Local/Button/Button';
import CustomSnackbar from '../Local/CustomSnackbar/CustomSnackbar';
import Input from '../Local/Input/Input';
import TextArea from '../Local/TextArea/TextArea';

import styles from './Contact.module.scss';

const Contact: FC = () => {
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
    const [emailSendingSnackbar, setEmailSendingSnackbar] =
        useState<boolean>(false);
    const [emailSuccessSnackbar, setEmailSuccessSnackbar] =
        useState<boolean>(false);
    const [recaptchaSnackbar, setRecaptchaSnackbar] = useState<boolean>(false);
    const [emailErrorSnackbar, setEmailErrorSnackbar] =
        useState<boolean>(false);

    const sendEmail = useCallback(async () => {
        const data = {
            name,
            email,
            subject,
            message,
            recaptcha,
        };
        try {
            setEmailSendingSnackbar(true);
            await axios.post(`${process.env.REACT_APP_API || ''}/send`, data);
            setEmailSendingSnackbar(false);
            setEmailSuccessSnackbar(true);
            setRecaptcha('');
            clear();
        } catch (e) {
            setEmailSendingSnackbar(false);
            setEmailErrorSnackbar(true);
            setRecaptcha('');
        }
    }, [email, message, name, recaptcha, subject]);

    const handleSubmit = useCallback(
        (event: FormEvent<HTMLFormElement>) => {
            const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,63})+$/;
            let validEmail = true;

            !name ? setNameError('Required field') : setNameError(false);
            !subject
                ? setSubjectError('Required field')
                : setSubjectError(false);
            !message
                ? setMessageError('Required field')
                : setMessageError(false);
            !recaptcha
                ? setRecaptchaSnackbar(true)
                : setRecaptchaSnackbar(false);

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

            if (
                name &&
                validEmail === true &&
                subject &&
                message &&
                recaptcha
            ) {
                setEmailDialog(false);
                sendEmail();
            }
            event.preventDefault();
        },
        [email, message, name, recaptcha, sendEmail, subject],
    );

    const clear = () => {
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
            <div className={styles.contactMap} />
            <div className={styles.contactTopContainer}>
                <div className={styles.contactChooser}>
                    <div
                        className={styles.contactOption}
                        onClick={() => setEmailDialog(true)}
                    >
                        <i className="material-icons">email</i>
                        <div className={styles.contactText}>
                            Shoot me an email
                        </div>
                    </div>
                    <div
                        className={styles.contactOption}
                        onClick={() => setPhoneDialog(true)}
                    >
                        <i className="material-icons">phone</i>
                        <div className={styles.contactText}>Give me a ring</div>
                    </div>
                </div>
            </div>
            <Dialog
                fullScreen
                open={emailDialog}
                onClose={() => setEmailDialog(false)}
            >
                <DialogContent className={styles.contactDialog}>
                    <div className={styles.dialogExit}>
                        <i
                            className="material-icons"
                            onClick={() => setEmailDialog(false)}
                            tabIndex={0}
                        >
                            clear
                        </i>
                    </div>
                    <form onSubmit={handleSubmit} noValidate>
                        <Input
                            type="text"
                            name="name"
                            placeholder="Full Name *"
                            value={name}
                            errorText={nameError}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setName(e.currentTarget.value)
                            }
                        />
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email Address *"
                            value={email}
                            errorText={emailError}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setEmail(e.currentTarget.value)
                            }
                        />
                        <Input
                            type="text"
                            name="subject"
                            placeholder="Subject *"
                            value={subject}
                            errorText={subjectError}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setSubject(e.currentTarget.value)
                            }
                        />
                        <TextArea
                            name="message"
                            rows={6}
                            placeholder="Message *"
                            value={message}
                            errorText={messageError}
                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                                setMessage(e.currentTarget.value)
                            }
                        />
                        <div className={styles.recaptchaContainer}>
                            <ReCAPTCHA
                                sitekey={
                                    process.env.REACT_APP_RECAPTCHA_SITE_KEY ||
                                    ''
                                }
                                onChange={(token: string | null) =>
                                    setRecaptcha(token)
                                }
                            />
                        </div>
                        <div className={styles.dialogButtonContainer}>
                            <ButtonLink type="button" onButtonClick={clear}>
                                Clear
                            </ButtonLink>
                            <ButtonLink type="submit">Send Email</ButtonLink>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
            <Dialog
                fullScreen
                open={phoneDialog}
                onClose={() => setPhoneDialog(false)}
            >
                <DialogContent
                    className={classNames(styles.contactDialog, styles.center)}
                >
                    <div className={styles.dialogExit}>
                        <i
                            className="material-icons"
                            onClick={() => setPhoneDialog(false)}
                            tabIndex={0}
                        >
                            clear
                        </i>
                    </div>
                    <p>On a phone? Tap the button below.</p>
                    <div
                        className={classNames(
                            styles.dialogButtonContainer,
                            styles.phone,
                        )}
                    >
                        <RoundButtonLink
                            type="a"
                            href="tel:1-518-391-5033"
                            onButtonClick={() => setPhoneDialog(false)}
                        >
                            <i className="material-icons">phone</i>
                        </RoundButtonLink>
                    </div>
                    <p className={styles.phoneWrap}>
                        <span>If not, call me at </span>
                        <span>
                            <strong>(518) 391-5033</strong>.
                        </span>
                    </p>
                    <span />
                </DialogContent>
            </Dialog>
            <CustomSnackbar
                open={emailSendingSnackbar}
                message="Sending email..."
                onClose={() => setEmailSendingSnackbar(false)}
                type="notification"
            />
            <CustomSnackbar
                open={emailSuccessSnackbar}
                message="Email sent!"
                onClose={() => setEmailSuccessSnackbar(false)}
                type="success"
            />
            <CustomSnackbar
                open={recaptchaSnackbar}
                message="Are you a robot?"
                onClose={() => setRecaptchaSnackbar(false)}
                type="warning"
            />
            <CustomSnackbar
                open={emailErrorSnackbar}
                message="Email failed to send"
                onClose={() => setEmailErrorSnackbar(false)}
                type="error"
            />
        </>
    );
};

export default Contact;
