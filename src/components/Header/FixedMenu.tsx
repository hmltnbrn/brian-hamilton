import { FC, useEffect, useState } from 'react';
import styles from './FixedMenu.module.scss';

import classNames from 'classnames';

type Props = {
    toggleDrawer: () => void;
};

const APPEAR_VALUE = 100;

const FixedMenu: FC<Props> = ({ toggleDrawer }) => {
    const [isHide, setIsHide] = useState<boolean>(true);

    useEffect(() => {
        const hideBar = () => {
            if (window.scrollY < APPEAR_VALUE || window.innerWidth < 800) {
                setIsHide(true);
            } else {
                setIsHide(false);
            }
        };

        window.addEventListener('scroll', hideBar);

        return () => {
            window.removeEventListener('scroll', hideBar);
        };
    }, [isHide]);

    return (
        <div className={classNames(styles.topMenu, { [styles.hide]: isHide })}>
            <button onClick={() => toggleDrawer()}>
                <i className="material-icons">menu</i>
            </button>
        </div>
    );
};

export default FixedMenu;
