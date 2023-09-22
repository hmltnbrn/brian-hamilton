import { FC } from 'react';

import styles from './Banner.module.scss';

const Banner: FC = () => {
    return (
        <div className={styles.bannerContainer}>
            <div className={styles.bannerWords}>
                <div className={styles.bannerName}>Brian Hamilton</div>
                <div className={styles.bannerTitle}>web developer</div>
            </div>
        </div>
    );
};

export default Banner;
