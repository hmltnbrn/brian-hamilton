import { FC } from 'react';

import styles from './Technology.module.scss';

type Props = {
    href: string;
    src: string;
    alt: string;
    title: string;
};

const Technology: FC<Props> = ({ href, src, alt, title }) => {
    return (
        <div className={styles.techContainer} tabIndex={0}>
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
            >
                <img src={src} alt={alt} />
                <h2>{title}</h2>
            </a>
        </div>
    );
};

export default Technology;
