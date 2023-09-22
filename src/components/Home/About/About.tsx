import { FC } from 'react';
import styles from './About.module.scss';

const About: FC = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutText}>
                <p>
                    I&rsquo;m a full-stack developer based in Astoria, New York.
                    Take a look around my website and portfolio to get a better
                    understanding of my field of work. If you want to learn more
                    about working with me, contact me by phone or email.
                </p>
            </div>
        </div>
    );
};

export default About;
