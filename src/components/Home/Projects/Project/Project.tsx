import { FC } from 'react';

import { ButtonLink } from '../../../Local/Button/Button';

import styles from './Project.module.scss';

type Links = {
    href: string;
    text: string;
};

type Background = {
    src: string;
    position: string;
};

type Props = {
    background: Background;
    title: string;
    links: Links[];
};

const Project: FC<Props> = ({ title, background, links }) => {
    const projectStyle = {
        background: `url(${background.src}) no-repeat ${background.position}`,
        backgroundSize: 'cover',
    };

    const buttonLinks = links.map((link: Links) => (
        <ButtonLink
            type="a"
            key={link.text}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            white
        >
            {link.text}
        </ButtonLink>
    ));

    return (
        <div className={styles.project} style={projectStyle}>
            <div className={styles.projectOverlay} tabIndex={0}>
                <div className={styles.projectTitle}>{title}</div>
                <div className={styles.projectLinks}>{buttonLinks}</div>
            </div>
        </div>
    );
};

export default Project;
