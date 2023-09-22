import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './NotFound.module.scss';

const NotFound: FC = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.notFound}>
            <div className={styles.errorSection}>
                <h1>404</h1>
                <p className={styles.small}>Page Not Found</p>
            </div>
            <p className={styles.description}>
                The page you're looking for doesn't exist. Sorry.
            </p>
            <p className={styles.contact}>
                <span className={styles.spanLink} onClick={() => navigate(-1)}>
                    Go back
                </span>{' '}
                or <a href="mailto:hmltnbrn@gmail.com">contact me</a> with
                details.
            </p>
        </div>
    );
};

export default NotFound;
