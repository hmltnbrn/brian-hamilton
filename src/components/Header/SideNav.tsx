import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { FC } from 'react';

import { Button } from '../Local/Button/Button';

import styles from './SideNav.module.scss';

type Props = {
    isOpen: boolean;
    toggleDrawer: () => void;
};

const SideNav: FC<Props> = ({ isOpen, toggleDrawer }) => {
    return (
        <>
            <SwipeableDrawer
                open={isOpen}
                onClose={toggleDrawer}
                onOpen={toggleDrawer}
            >
                <div
                    tabIndex={0}
                    role="button"
                    onClick={toggleDrawer}
                    onKeyDown={toggleDrawer}
                >
                    <div className={styles.linksContainer}>
                        <div className={styles.drawerExit}>
                            <i className="material-icons" tabIndex={0}>
                                clear
                            </i>
                        </div>
                        <Button
                            type="nav-link"
                            exact
                            to="/"
                            classNames={[styles.drawerLink]}
                            activeClassName={styles.active}
                        >
                            Home
                        </Button>
                        <Button
                            type="nav-link"
                            to="/resume"
                            classNames={[styles.drawerLink]}
                            activeClassName={styles.active}
                        >
                            Resume
                        </Button>
                        <Button
                            type="nav-link"
                            to="/portfolio"
                            classNames={[styles.drawerLink]}
                            activeClassName={styles.active}
                        >
                            Portfolio
                        </Button>
                        <Button
                            type="nav-link"
                            to="/contact"
                            classNames={[styles.drawerLink]}
                            activeClassName={styles.active}
                        >
                            Contact
                        </Button>
                    </div>
                </div>
            </SwipeableDrawer>
        </>
    );
};

export default SideNav;
