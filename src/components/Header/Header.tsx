import classNames from 'classnames';
import { FC, useState } from 'react';

import { useWindowWidth } from '../../hooks/useWindowWidth';
import { GitHubIcon } from '../../icons/GitHub';
import { LinkedInIcon } from '../../icons/LinkedIn';
import { Button } from '../Local/Button/Button';
import FixedMenu from './FixedMenu';
import SideNav from './SideNav';

import styles from './Header.module.scss';

const Header: FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
    const windowWidth = useWindowWidth();
    return (
        <header>
            <FixedMenu toggleDrawer={() => setIsDrawerOpen(!isDrawerOpen)} />
            <div className={styles.headerContainer}>
                <div className={styles.headerLeft}>
                    {windowWidth < 800 && (
                        <i
                            className={`material-icons ${classNames(
                                styles.drawerOpener,
                            )}`}
                            onClick={() => setIsDrawerOpen(true)}
                        >
                            menu
                        </i>
                    )}
                </div>
                <div className={styles.headerRight}>
                    {windowWidth >= 800 ? (
                        <div className={styles.headerLinks}>
                            <Button
                                type="nav-link"
                                exact
                                to="/"
                                classNames={[styles.headerLink]}
                                activeClassName={styles.active}
                            >
                                Home
                            </Button>
                            <Button
                                type="nav-link"
                                to="/resume"
                                classNames={[styles.headerLink]}
                                activeClassName={styles.active}
                            >
                                Resume
                            </Button>
                            <Button
                                type="nav-link"
                                to="/portfolio"
                                classNames={[styles.headerLink]}
                                activeClassName={styles.active}
                            >
                                Portfolio
                            </Button>
                            <Button
                                type="nav-link"
                                to="/contact"
                                classNames={[styles.headerLink]}
                                activeClassName={styles.active}
                            >
                                Contact
                            </Button>
                            <div className={styles.verticalRule} />
                            <Button
                                type="a"
                                href="https://www.linkedin.com/in/brian-hamilton-520835a8"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LinkedInIcon />
                            </Button>
                            <Button
                                type="a"
                                href="https://github.com/hmltnbrn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GitHubIcon />
                            </Button>
                        </div>
                    ) : (
                        <div className={styles.headerLinks}>
                            <Button
                                type="a"
                                href="https://www.linkedin.com/in/brian-hamilton-520835a8"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LinkedInIcon />
                            </Button>
                            <Button
                                type="a"
                                href="https://github.com/hmltnbrn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GitHubIcon />
                            </Button>
                        </div>
                    )}
                </div>
            </div>
            <SideNav
                isOpen={isDrawerOpen}
                toggleDrawer={() => setIsDrawerOpen(!isDrawerOpen)}
            />
        </header>
    );
};

export default Header;
