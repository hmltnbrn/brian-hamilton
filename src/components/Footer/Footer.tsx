import { FC } from 'react';

import { GitHubIcon } from '../../icons/GitHub';
import { LinkedInIcon } from '../../icons/LinkedIn';
import { TwitterIcon } from '../../icons/Twitter';
import { Button } from '../Local/Button/Button';

import styles from './Footer.module.scss';

const Footer: FC = () => {
    return (
        <footer>
            <p className={styles.footerName}>
                Brian Hamilton © 2016-{new Date().getFullYear()}
            </p>
            <nav>
                <Button type="link" to="/">
                    Home
                </Button>
                <Button type="link" to="/resume">
                    Resume
                </Button>
                <Button type="link" to="/portfolio">
                    Portfolio
                </Button>
                <Button type="link" to="/contact">
                    Contact
                </Button>
            </nav>
            <nav>
                <a href="tel:1-518-391-5033" title="(518) 391-5033">
                    <i className="material-icons">phone</i>
                </a>
                <a href="mailto:hmltnbrn@gmail.com" title="hmltnbrn@gmail.com">
                    <i className="material-icons">email</i>
                </a>
                <a
                    href="https://twitter.com/waynejohnaton"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <TwitterIcon />
                </a>
                <a
                    href="https://www.linkedin.com/in/brian-hamilton-520835a8"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedInIcon />
                </a>
                <a
                    href="https://github.com/hmltnbrn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHubIcon />
                </a>
            </nav>
        </footer>
    );
};

export default Footer;
