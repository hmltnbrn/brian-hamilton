import { FC } from 'react';

import { ButtonLink } from '../../Local/Button/Button';

import styles from './ContactMe.module.scss';

const ContactMe: FC = () => {
    return (
        <div className={styles.contactMeContainer}>
            <div className={styles.overlay}>
                <h1>Want to chat?</h1>
                <p>
                    Whether it's to talk about politics, a freelance
                    opportunity, or the latest React, send me a message.
                </p>
                <ButtonLink type="link" to="/contact" white>
                    Click Here to Contact Me
                </ButtonLink>
            </div>
        </div>
    );
};

export default ContactMe;
