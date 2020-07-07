import React from 'react';
import styles from './Header.module.scss';

import { connect } from 'react-redux';
import { toggleDrawer } from './actions';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import classNames from 'classnames/bind';

import { Button } from '../Local/Button/Button';

import windowWidth from '../../WindowWidth';

import { LinkedInIcon } from '../../icons/LinkedIn';
import { GitHubIcon } from '../../icons/GitHub';

import FixedMenu from './FixedMenu';
import SideNav from './SideNav';

interface Props {
  windowWidth: number;
  toggleDrawer: () => void;
}

const cx = classNames.bind(styles);

const Header = ({ ...props }: Props): JSX.Element => {
  return (
    <header>
      <FixedMenu />
      <div className={cx('header-container')}>
        <div className={cx('header-left')}>
          {props.windowWidth < 800 && (
            <i
              className={`material-icons ${cx('drawer-opener')}`}
              onClick={props.toggleDrawer}
            >
              menu
            </i>
          )}
        </div>
        <div className={cx('header-right')}>
          {props.windowWidth >= 800 ? (
            <div className={cx('header-links')}>
              <Button
                type="nav-link"
                exact={true}
                to="/"
                classNames={[cx('header-link')]}
                activeClassName={cx('active')}
              >
                Home
              </Button>
              <Button
                type="nav-link"
                to="/resume"
                classNames={[cx('header-link')]}
                activeClassName={cx('active')}
              >
                Resume
              </Button>
              <Button
                type="nav-link"
                to="/portfolio"
                classNames={[cx('header-link')]}
                activeClassName={cx('active')}
              >
                Portfolio
              </Button>
              <Button
                type="nav-link"
                to="/contact"
                classNames={[cx('header-link')]}
                activeClassName={cx('active')}
              >
                Contact
              </Button>
              <div className={cx('vertical-rule')} />
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
            <div className={cx('header-links')}>
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
      <SideNav />
    </header>
  );
};

export default compose<any>(
  withRouter,
  connect(null, { toggleDrawer }),
  windowWidth
)(Header);
