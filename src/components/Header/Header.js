// @flow

import React from 'react';
import styles from './Header.module.scss';

import classNames from 'classnames/bind';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import { Button } from '../Local/Button/Button';

import windowWidth from '../../WindowWidth';

import { LinkedInIcon } from '../../icons/LinkedIn';
import { GitHubIcon } from '../../icons/GitHub';

type Props = {
  windowWidth: number
};

type State = {
  drawer: boolean
};

let cx = classNames.bind(styles);

class Header extends React.Component<Props, State> {

  state = {
    drawer: false
  };

  render() {
    return (
      <header>
        <div className={cx("container")}>
          <div className={cx("header-left")}>
          {this.props.windowWidth < 800 ?
            <i className={`material-icons ${cx("drawer-opener")}`} onClick={() => this.setState({drawer: true})}>menu</i>
            : <span></span>
          }
          </div>
          <div className={cx("header-right")}>
            {this.props.windowWidth >= 800 ?
              <div className={cx("header-links")}>
                <Button type="nav-link" exact to="/" classNames={[cx("header-link")]} activeClassName={cx("active")}>Home</Button>
                <Button type="nav-link" to="/resume" classNames={[cx("header-link")]} activeClassName={cx("active")}>Resume</Button>
                <Button type="nav-link" to="/portfolio" classNames={[cx("header-link")]} activeClassName={cx("active")}>Portfolio</Button>
                <Button type="nav-link" to="/contact" classNames={[cx("header-link")]} activeClassName={cx("active")}>Contact</Button>
                <div className={cx("vertical-rule")}></div>
                <a href="https://www.linkedin.com/in/brian-hamilton-520835a8" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
                <a href="https://github.com/hmltnbrn" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
              </div>
              : 
              <div className={cx("header-links")}>
                <a href="https://www.linkedin.com/in/brian-hamilton-520835a8" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
                <a href="https://github.com/hmltnbrn" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
              </div>
            }
          </div>
        </div>
        <SwipeableDrawer
          open={this.state.drawer}
          onClose={() => this.setState({drawer: false})}
          onOpen={() => this.setState({drawer: true})}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={() => this.setState({drawer: false})}
            onKeyDown={() => this.setState({drawer: false})}
          >
            <div className={cx("links-container")}>
              <Button type="nav-link" exact to="/" classNames={[cx("drawer-link")]} activeClassName={cx("active")}>Home</Button>
              <Button type="nav-link" to="/resume" classNames={[cx("drawer-link")]} activeClassName={cx("active")}>Resume</Button>
              <Button type="nav-link" to="/portfolio" classNames={[cx("drawer-link")]} activeClassName={cx("active")}>Portfolio</Button>
              <Button type="nav-link" to="/contact" classNames={[cx("drawer-link")]} activeClassName={cx("active")}>Contact</Button>
            </div>
          </div>
        </SwipeableDrawer>
      </header>
    );
  }
};

export default windowWidth(Header);
